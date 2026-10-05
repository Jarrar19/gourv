# 🏛️ JIT Campus Navigator — Mobile & Desktop Application
**Jhulelal Institute of Technology (JIT), Nagpur**

Official interactive campus wayfinding and floor plan navigation application for students, faculty, and visitors.

---

## ✨ Features
- 🗺️ **Interactive Campus Map & Floor Guides**: Step-by-step navigation across all academic buildings and departments.
- 📱 **Progressive Web App (PWA)**: Works seamlessly in any browser with offline support.
- 🤖 **Android Native App (Capacitor)**: Full Android Studio support and standalone APK builds.
- 🔍 **Instant Search & Department Directory**: Quickly find labs, classrooms, faculty cabins, and offices.

---

## 📱 Installation & Distribution

### Option 1: Instant PWA Install (No Store / No APK needed)
1. Open the campus map in **Google Chrome**, **Edge**, or **Samsung Internet** on your phone (or Safari on iOS).
2. Tap the **"Install App"** button in the top navigation bar, or select **"Add to Home screen"** from the browser menu.
3. The app will install directly with the official JIT icon, launch in standalone fullscreen, and work offline!

---

### Option 2: Standalone Android App (Capacitor)

#### Prerequisites:
- [Node.js](https://nodejs.org/) (v18+)
- [Android Studio](https://developer.android.com/studio) with Android SDK

#### Quick Start:
```bash
# 1. Install dependencies
npm install

# 2. Build and copy web assets to native Android
npm run build
npm run cap:sync

# 3. Open in Android Studio
npm run cap:open

# 4. Build Debug APK directly via CLI
npm run build:apk
```

The compiled APK will be generated at:
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🏛️ Campus Architecture Reference
- **Main Academic Building (4 Floors)**:
  - **Ground Floor**: Administrative Office, Principal's Cabin, 1st Year Dept, Computer Labs, Scholarship Section, Accounts.
  - **1st Floor**: Computer Science & Engineering (CSE) Department.
  - **2nd Floor**: Electronics & Telecom (ETC) & MBA Departments.
  - **3rd Floor**: Artificial Intelligence & Machine Learning (AIML) Department.
- **Second Academic Building (3 Floors)**:
  - **Ground Floor**: Mechanical & Electrical Engineering Departments.
  - **1st Floor**: Central Library & College Auditorium.
  - **2nd Floor**: CSE (AI & Data Science) Department.

---

## 📄 License
ISC License © Jhulelal Institute of Technology, Nagpur.
