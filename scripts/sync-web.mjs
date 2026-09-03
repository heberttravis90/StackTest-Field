import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const www = path.join(root, 'www');
fs.mkdirSync(www, { recursive: true });
fs.mkdirSync(path.join(www, 'vendor'), { recursive: true });

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replaceAll('manifest.webmanifest?v=068rc1', 'manifest.webmanifest?v=072rc2apk1');
html = html.replaceAll('./sw.js?v=068rc1', './sw.js?v=072rc2apk1');
html = html.replaceAll('stp_068rc1_controller_reload', 'stp_072rc2apk1_controller_reload');
html = html.replaceAll('./?v=068rc1&t=', './?v=072rc2apk1&t=');

const sdkNeedle = 'const STP_SUPABASE_SDK_URLS=[';
if (html.includes(sdkNeedle) && !html.includes('"./vendor/supabase.min.js"')) {
  html = html.replace(sdkNeedle, `${sdkNeedle}\n  "./vendor/supabase.min.js",`);
}
if (!html.includes('native-runtime.js')) {
  const closeBody = html.toLowerCase().lastIndexOf('</body>');
  if (closeBody < 0) throw new Error('Could not find final </body> in Stack Test Pro index.html');
  html = html.slice(0, closeBody) + '  <script src="./native-runtime.js"></script>\n' + html.slice(closeBody);
}
fs.writeFileSync(path.join(www, 'index.html'), html);

for (const name of ['manifest.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png']) {
  const src = path.join(root, name);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(www, name));
}

const supabaseCandidates = [
  path.join(root, 'node_modules', '@supabase', 'supabase-js', 'dist', 'umd', 'supabase.min.js'),
  path.join(root, 'node_modules', '@supabase', 'supabase-js', 'dist', 'umd', 'supabase.js')
];
const sdk = supabaseCandidates.find(fs.existsSync);
if (sdk) {
  fs.copyFileSync(sdk, path.join(www, 'vendor', 'supabase.min.js'));
  console.log('Bundled Supabase UMD for offline APK startup.');
} else {
  console.warn('Supabase UMD not found yet. Run npm install before the Android build.');
}

console.log('Prepared Stack Test Pro web assets in www/.');
