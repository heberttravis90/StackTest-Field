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

const gradle = path.join(android, 'app', 'build.gradle');
if (fs.existsSync(gradle)) {
  let text = fs.readFileSync(gradle, 'utf8');
  text = text.replace(/versionCode\s+\d+/, 'versionCode 7202');
  text = text.replace(/versionName\s+"[^"]+"/, 'versionName "0.72.2-rc2"');
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

console.log('Patched Android app name, version, cleartext policy, and launcher icons.');
