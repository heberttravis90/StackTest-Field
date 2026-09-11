import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const android = path.join(root, 'android');
if (!fs.existsSync(android)) {
  console.error('android/ does not exist. Run npm run android:init first.');
  process.exit(1);
}

const parsedRun = Number.parseInt(process.env.GITHUB_RUN_NUMBER || process.env.STP_BUILD_NUMBER || '1', 10);
const buildNumber = Number.isFinite(parsedRun) && parsedRun > 0 ? parsedRun : 1;
const versionCode = 740000 + buildNumber;
const versionName = `0.74.${buildNumber}`;

const gradle = path.join(android, 'app', 'build.gradle');
if (fs.existsSync(gradle)) {
  let text = fs.readFileSync(gradle, 'utf8');
  text = text.replace(/versionCode\s+\d+/, `versionCode ${versionCode}`);
  text = text.replace(/versionName\s+"[^"]+"/, `versionName "${versionName}"`);

  if (!text.includes('STP_KEYSTORE_FILE')) {
    const signingBlock = `
    signingConfigs {
        release {
            def stpKeystore = System.getenv("STP_KEYSTORE_FILE")
            if (stpKeystore) {
                storeFile file(stpKeystore)
                storePassword System.getenv("STP_KEYSTORE_PASSWORD")
                keyAlias System.getenv("STP_KEY_ALIAS") ?: "stacktestpro"
                keyPassword System.getenv("STP_KEY_PASSWORD")
            }
        }
    }
`;
    if (text.includes('    buildTypes {')) {
      text = text.replace('    buildTypes {', `${signingBlock}\n    buildTypes {`);
    } else {
      throw new Error('Could not find buildTypes block in android/app/build.gradle');
    }
  }

  if (!text.includes('signingConfig signingConfigs.release')) {
    const buildTypesPos = text.indexOf('    buildTypes {');
    const releasePos = buildTypesPos >= 0 ? text.indexOf('release {', buildTypesPos) : -1;
    if (releasePos < 0) throw new Error('Could not find release buildType in android/app/build.gradle');
    const insertPos = releasePos + 'release {'.length;
    text = text.slice(0, insertPos) + `
            if (System.getenv("STP_KEYSTORE_FILE")) {
                signingConfig signingConfigs.release
            }` + text.slice(insertPos);
  }

  fs.writeFileSync(gradle, text);
}

const manifest = path.join(android, 'app', 'src', 'main', 'AndroidManifest.xml');
if (fs.existsSync(manifest)) {
  let text = fs.readFileSync(manifest, 'utf8');
  if (!text.includes('android:usesCleartextTraffic=')) {
    text = text.replace('<application\n', '<application\n        android:usesCleartextTraffic="false"\n');
  }
  fs.writeFileSync(manifest, text);
}

const strings = path.join(android, 'app', 'src', 'main', 'res', 'values', 'strings.xml');
if (fs.existsSync(strings)) {
  let text = fs.readFileSync(strings, 'utf8');
  text = text.replace(/<string name="app_name">[\s\S]*?<\/string>/, '<string name="app_name">Stack Test Pro</string>');
  text = text.replace(/<string name="title_activity_main">[\s\S]*?<\/string>/, '<string name="title_activity_main">Stack Test Pro</string>');
  fs.writeFileSync(strings, text);
}

// Native Mobilize actions: Android chooser, document picker, and PrintManager.
const capacitorConfig = JSON.parse(fs.readFileSync(path.join(root, 'capacitor.config.json'), 'utf8'));
const appId = capacitorConfig.appId || 'com.gulfcoastcodeworks.stacktestpro';
const javaDir = path.join(android, 'app', 'src', 'main', 'java', ...appId.split('.'));
fs.mkdirSync(javaDir, { recursive: true });

const nativePluginPath = path.join(javaDir, 'StackTestNativePlugin.java');
const nativePluginSource = `package ${appId};

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.result.ActivityResult;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

@CapacitorPlugin(name = "StackTestNative")
public class StackTestNativePlugin extends Plugin {
    private WebView printWebView;

    @PluginMethod()
    public void ping(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("native", true);
        ret.put("platform", "android");
        call.resolve(ret);
    }

    @PluginMethod()
    public void shareText(PluginCall call) {
        String title = call.getString("title", "Stack Test Pro Loadout");
        String text = call.getString("text", "");
        String dialogTitle = call.getString("dialogTitle", "Share Stack Test Pro loadout");

        Intent sendIntent = new Intent(Intent.ACTION_SEND);
        sendIntent.setType("text/plain");
        sendIntent.putExtra(Intent.EXTRA_SUBJECT, title);
        sendIntent.putExtra(Intent.EXTRA_TEXT, text);

        Intent chooser = Intent.createChooser(sendIntent, dialogTitle);
        getActivity().startActivity(chooser);
        call.resolve();
    }

    @PluginMethod()
    public void saveText(PluginCall call) {
        String filename = call.getString("filename", "StackTestPro_Loadout.txt");
        String mimeType = call.getString("mimeType", "text/plain");

        Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType(mimeType);
        intent.putExtra(Intent.EXTRA_TITLE, filename);
        startActivityForResult(call, intent, "saveTextResult");
    }

    @ActivityCallback
    private void saveTextResult(PluginCall call, ActivityResult result) {
        if (call == null) return;

        if (result.getResultCode() != Activity.RESULT_OK || result.getData() == null || result.getData().getData() == null) {
            JSObject ret = new JSObject();
            ret.put("cancelled", true);
            call.resolve(ret);
            return;
        }

        Uri uri = result.getData().getData();
        String text = call.getString("text", "");

        try (OutputStream out = getContext().getContentResolver().openOutputStream(uri, "w")) {
            if (out == null) {
                call.reject("Could not open the selected save location.");
                return;
            }
            out.write(text.getBytes(StandardCharsets.UTF_8));
            out.flush();

            JSObject ret = new JSObject();
            ret.put("cancelled", false);
            ret.put("uri", uri.toString());
            call.resolve(ret);
        } catch (Exception error) {
            call.reject("Could not save the loadout file.", null, error);
        }
    }

    @PluginMethod()
    public void printHtml(PluginCall call) {
        String name = call.getString("name", "Stack Test Pro Loadout");
        String html = call.getString("html", "");

        if (html.trim().isEmpty()) {
            call.reject("No loadout content was provided.");
            return;
        }

        getActivity().runOnUiThread(() -> {
            printWebView = new WebView(getContext());
            printWebView.getSettings().setJavaScriptEnabled(false);
            printWebView.setWebViewClient(new WebViewClient() {
                @Override
                public void onPageFinished(WebView view, String url) {
                    try {
                        PrintManager printManager = (PrintManager) getContext().getSystemService(Context.PRINT_SERVICE);
                        if (printManager == null) {
                            call.reject("Android printing is not available on this device.");
                            return;
                        }

                        PrintDocumentAdapter adapter = view.createPrintDocumentAdapter(name);
                        printManager.print(name, adapter, new PrintAttributes.Builder().build());
                        call.resolve();
                    } catch (Exception error) {
                        call.reject("Could not open the Android print dialog.", null, error);
                    }
                }
            });
            printWebView.loadDataWithBaseURL(null, html, "text/html", "UTF-8", null);
        });
    }
}
`;
fs.writeFileSync(nativePluginPath, nativePluginSource);

const mainActivityPath = path.join(javaDir, 'MainActivity.java');
if (fs.existsSync(mainActivityPath)) {
  let text = fs.readFileSync(mainActivityPath, 'utf8');

  if (!text.includes('import android.os.Bundle;')) {
    const packageLine = `package ${appId};`;
    text = text.replace(packageLine, `${packageLine}\n\nimport android.os.Bundle;`);
  }

  // Capacitor 8 constructs its Bridge during super.onCreate(). A manually
  // registered plugin MUST be added to bridgeBuilder before that happens.
  // Remove any stale post-super registration from an older generated build.
  text = text.replace(/^\s*registerPlugin\(StackTestNativePlugin\.class\);\s*$/gm, '');

  if (/void\s+onCreate\s*\(\s*Bundle\s+savedInstanceState\s*\)/.test(text)) {
    text = text.replace(
      /(^[ \t]*)super\.onCreate\(savedInstanceState\);/m,
      (_match, indent) => `${indent}registerPlugin(StackTestNativePlugin.class);\n${indent}super.onCreate(savedInstanceState);`
    );
  } else {
    text = text.replace(
      /public class MainActivity extends BridgeActivity\s*\{/,
      `public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(StackTestNativePlugin.class);
        super.onCreate(savedInstanceState);
    }`
    );
  }

  const registerPos = text.indexOf('registerPlugin(StackTestNativePlugin.class);');
  const superPos = text.indexOf('super.onCreate(savedInstanceState);');
  if (registerPos < 0 || superPos < 0 || registerPos > superPos) {
    throw new Error('StackTestNative must be registered before super.onCreate(savedInstanceState).');
  }

  fs.writeFileSync(mainActivityPath, text);
} else {
  throw new Error(`Could not find generated MainActivity.java at ${mainActivityPath}`);
}

const densityMap = {
  mdpi: 48,
  hdpi: 72,
  xhdpi: 96,
  xxhdpi: 144,
  xxxhdpi: 192
};
for (const density of Object.keys(densityMap)) {
  const source = path.join(root, 'android-res', `ic_launcher_${density}.png`);
  const destDir = path.join(android, 'app', 'src', 'main', 'res', `mipmap-${density}`);
  if (fs.existsSync(source)) {
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(source, path.join(destDir, 'ic_launcher.png'));
    fs.copyFileSync(source, path.join(destDir, 'ic_launcher_round.png'));
  }
}
for (const dir of ['mipmap-anydpi-v26']) {
  const p = path.join(android, 'app', 'src', 'main', 'res', dir);
  if (fs.existsSync(p)) {
    for (const name of ['ic_launcher.xml', 'ic_launcher_round.xml']) {
      const target = path.join(p, name);
      if (fs.existsSync(target)) fs.rmSync(target);
    }
  }
}

console.log(`Patched Android app: versionCode ${versionCode}, versionName ${versionName}, native Mobilize share/save/print actions registered before bridge creation, permanent release signing, cleartext policy, and launcher icons.`);
