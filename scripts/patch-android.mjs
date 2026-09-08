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
    const signingBlock = `\n    signingConfigs {\n        release {\n            def stpKeystore = System.getenv("STP_KEYSTORE_FILE")\n            if (stpKeystore) {\n                storeFile file(stpKeystore)\n                storePassword System.getenv("STP_KEYSTORE_PASSWORD")\n                keyAlias System.getenv("STP_KEY_ALIAS") ?: "stacktestpro"\n                keyPassword System.getenv("STP_KEY_PASSWORD")\n            }\n        }\n    }\n`;
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
    text = text.slice(0, insertPos) + `\n            if (System.getenv("STP_KEYSTORE_FILE")) {\n                signingConfig signingConfigs.release\n            }` + text.slice(insertPos);
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

console.log(`Patched Android app: versionCode ${versionCode}, versionName ${versionName}, permanent release signing, cleartext policy, and launcher icons.`);
