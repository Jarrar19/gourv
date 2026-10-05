# JIT Campus Navigator — Mobile & Desktop Application Guide
**Jhulelal Institute of Technology (JIT), Nagpur**

Official interactive campus wayfinding and floor plan navigation application.

---

## 📱 App Distribution Options

You can distribute and install this application in two main ways:

### Option 1: Instant PWA Install (No Store / No APK needed)
The application is a fully configured **Progressive Web App (PWA)** with offline caching:
1. Open the campus map URL (e.g. `http://localhost:8080/` or your deployed college domain) in **Google Chrome** or **Samsung Internet** on your Android phone (or Safari on iPhone).
2. Tap the **"Install App"** button in the top navigation bar, or open the browser menu (**⋮**) and tap **"Install App"** or **"Add to Home screen"**.
3. The app is installed directly to the phone's home screen and app drawer with the official **JIT NAV** gold-and-navy icon, launches in fullscreen standalone mode without browser URL bars, and works offline!

---

### Option 2: Standalone Android APK (Capacitor)
This project is set up with **Capacitor** to compile into a native Android application package (`.apk`):

#### Project Structure:
- `www/` — Optimized web assets (HTML, CSS, JS, icons, manifest).
- `capacitor.config.json` — App ID (`in.edu.jitnagpur.campusnav`) and window settings.
- `android/` — Complete native Android Studio project.

#### Commands:
- **Sync web changes to Android**:
  ```bash
  npm run cap:sync
  ```
- **Open project in Android Studio**:
  ```bash
  npx cap open android
  ```
- **Build Debug APK directly via command line**:
  ```bash
  cd android
  gradlew.bat assembleDebug
  ```
  The compiled APK will be generated at:
  `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🏛️ Campus Architecture Reference
- **Main Academic Building (4 Floors)**:
  - **Ground**: Administrative Office, Principal's Cabin, 1st Year Dept, Comp Lab, Scholarship, Accounts.
  - **1st Floor**: Computer Science & Engineering (CSE) Dept.
  - **2nd Floor**: Electronics & Telecom (ETC) Dept & MBA Dept.
  - **3rd Floor**: Artificial Intelligence & Machine Learning (AIML) Dept.
- **Second Academic Building (3 Floors)**:
  - **Ground**: Mechanical & Electrical Engineering Depts.
  - **1st Floor**: Central Library & College Auditorium.
  - **2nd Floor**: CSE (AI & Data Science) Department only.
