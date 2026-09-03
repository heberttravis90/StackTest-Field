# Stack Test Pro — Android / Capacitor

This package wraps Stack Test Pro v0.73 RC1 as a native Android app using Capacitor 8.

## App identity

- App name: **Stack Test Pro**
- Android package ID: `com.gulfcoastcodeworks.stacktestpro`
- Version name: `0.73.0-rc1`
- Version code: `7202`
- Approved launcher artwork: **original black / neon-green Stack Test Pro smokestack icon**
- Web source: root `index.html`
- Android web bundle: generated into `www/`

## What the APK keeps local

The Stack Test Pro HTML/CSS/JavaScript is bundled inside the APK. The build also copies the pinned Supabase UMD SDK into `www/vendor/`, so the sign-in/offline gate can initialize without depending on jsDelivr/Unpkg. Actual cloud sign-in/sync still requires internet. Verified offline access continues to follow Stack Test Pro's existing 72-hour entitlement rule.

## Native behavior included

- Android back button closes the Method modal/drawer first, then walks backward through the Stack Test Pro workflow, then minimizes the app.
- Native Android network changes are bridged into the app's existing `online` / `offline` handling.
- Existing photo input uses Android's camera/file chooser from inside the Capacitor WebView.
- Existing document input uses Android's document picker/file chooser.

## Easiest build: GitHub Actions

The included `.github/workflows/build-android-apk.yml` builds an installable **debug APK** on GitHub whenever you manually run the workflow (and on relevant pushes to `main`).

1. Put these files in the StackTest-Field GitHub repository.
2. Open the repository's **Actions** tab.
3. Open **Build Stack Test Pro APK**.
4. Choose **Run workflow**.
5. When it finishes, open the run and download the artifact named **Stack-Test-Pro-v0.73-RC1-APK**.
6. Inside the downloaded artifact is `Stack-Test-Pro-v0.73-RC1-debug.apk`.

The debug APK is Android-signed automatically and is suitable for direct testing/installing. A permanent release signing key should be added before customer distribution or Play Store release.

## Local Android Studio build

Requirements for Capacitor 8: Node.js 22+, Android Studio 2025.2.1+, and Android SDK API 24+.

```bash
npm install
npm run android:init
npm run android:open
```

After `android/` exists, future Stack Test Pro updates use:

```bash
npm run android:sync
```

Then build/run from Android Studio, or:

```bash
npm run android:debug
```

## Updating Stack Test Pro later

Replace only the root `index.html` with the newest working Stack Test Pro build, then run `npm run android:sync` or let GitHub Actions rebuild the APK. The `scripts/sync-web.mjs` script copies it into the Android web bundle and injects the local Supabase SDK + native runtime.

## Release signing

Do **not** commit a release `.jks` / keystore or its passwords to GitHub. The project `.gitignore` excludes common key formats. For customer distribution, configure a persistent signing key using GitHub Actions secrets or Android Studio's signed bundle/APK flow.
