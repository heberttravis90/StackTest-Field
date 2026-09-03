import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const android = path.join(root, 'android');
const mode = (process.argv[2] || 'debug').toLowerCase();
const task = mode === 'release' ? 'assembleRelease' : 'assembleDebug';
const wrapper = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
const result = spawnSync(wrapper, [task], { cwd: android, stdio: 'inherit', shell: process.platform === 'win32' });
if (result.status !== 0) process.exit(result.status || 1);
const apk = path.join(android, 'app', 'build', 'outputs', 'apk', mode, `app-${mode}.apk`);
if (fs.existsSync(apk)) console.log(`APK: ${apk}`);
