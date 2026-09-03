import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const required = [
  'index.html', 'package.json', 'capacitor.config.json', 'manifest.webmanifest', 'sw.js',
  'src/native-runtime.js', 'scripts/sync-web.mjs', 'scripts/patch-android.mjs',
  '.github/workflows/build-android-apk.yml'
];
let bad = false;
for (const f of required) {
  if (!fs.existsSync(path.join(root, f))) { console.error(`Missing ${f}`); bad = true; }
}
const config = JSON.parse(fs.readFileSync(path.join(root, 'capacitor.config.json'), 'utf8'));
if (config.appId !== 'com.gulfcoastcodeworks.stacktestpro') { console.error('Unexpected appId'); bad = true; }
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (!html.includes('0.72 RC2')) { console.error('Root index is not v0.72 RC2'); bad = true; }
if (bad) process.exit(1);
console.log('Stack Test Pro Android project checks passed.');
