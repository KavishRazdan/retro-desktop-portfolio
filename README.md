# 💾 Kavish.OS — Retro Desktop Portfolio

> A nostalgic, interactive 90s-inspired desktop operating system built to showcase modern frontend and cross-platform mobile engineering.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-kavish.netlify.app-blue?style=for-the-badge&logo=netlify)](https://kavish.netlify.app/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Fast%20Builds-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

```text
 __________________________________________________________________
| [■] C:\KAVISH\PORTFOLIO                                    _ □ X |
|==================================================================|
|  [📂 Projects]   [💾 Skills]   [📄 Resume]   [💻 Terminal.exe]   |
|  [🎓 Education]  [💼 Work]     [🎵 Audio]    [🏆 Milestones]     |
|__________________________________________________________________|
```

---

## 💡 The Philosophy Behind Kavish.OS

Instead of building another standard, vertically-scrolling portfolio template that recruiters scroll past in five seconds, I wanted to create an **experience** — something playful, tactile, and memorable.

**Kavish.OS** turns my developer journey into an authentic, interactive retro operating system reminiscent of the golden era of desktop computing (Windows 95/98 meets classic Mac OS). Everything you see is functional: windows can be dragged across the screen, minimized to the dock, maximized, or layered with realistic z-index stacking. There's a working Unix-like terminal, an ambient lo-fi music player, interactive retro skill executables with real-time competency meters, and full mobile responsiveness.

Behind the nostalgic aesthetic lies a modern, high-performance web architecture built with **React 19**, **Framer Motion**, **Zustand**, and **Vite**, adhering to strict component design patterns, accessibility standards, and aggressive bundle optimization.

---

## 🚀 Key Highlights & Interactive Features

### 🗂️ 1. Window Manager Engine
- **Draggable & Stackable Windows**: Custom coordinate system powered by Framer Motion and event listeners, allowing windows to be moved fluidly across the canvas.
- **Dynamic Window State**: Windows support minimize, maximize, restore, dynamic z-index focusing, and keyboard shortcuts (`Escape` to close).
- **Mobile Adaptive Sheets**: On smaller touchscreens, windows seamlessly adapt into native-feeling slide-up bottom sheets with backdrop blur.
- **Code Splitting & Lazy Loading**: Every window's content (`Projects`, `Skills`, `Resume`, etc.) is dynamically code-split using `React.lazy()` and `Suspense`, ensuring the initial bundle stays lightweight (<330 KB gzipped) and loads in milliseconds.

### 💼 2. Flagship Projects Showcase
The Projects explorer features my production-grade web and SaaS applications with interactive modal deep dives:
- **SprintDesk**: Enterprise-grade Sprint Management SaaS dashboard engineered with **React 19**, **TypeScript** (strict mode), and **Vite**. Features authentication, sprint analytics, and a 4-column drag-and-drop Kanban board built with `dnd-kit`, complete with action-history undo/redo state management.
- **VectorShift Pipeline Editor**: Client-side visual graph editor built with **ReactFlow**, enabling drag-and-drop DAG workflow construction and cycle prevention using Depth-First Search (DFS) validation algorithms.
- **CSV Plot Studio**: Client-side high-throughput data visualization tool supporting 8 dynamic chart types (Scatter, Violin, 3D Surface, Box, Histogram). Uses multi-threaded **Web Workers** (`PapaParse`) to parse 50MB+ and 1M+ row CSV datasets without dropping a single frame on the main UI thread.
- **IDR Website & E-Commerce & Spotify Clone**: Responsive client interfaces, cart state management systems, and media playback control interfaces.

### 🛠️ 3. Skills Matrix & Competency Inspector
- **App Shortcut Executables**: Skills are displayed as retro desktop executable icons categorized into *Languages*, *Frameworks & Libraries*, *Tools & Platforms*, and *Architecture Concepts*.
- **Interactive Competency Meter**: Hovering or focusing on any skill executable dynamically reveals a retro inspection panel showing mastery percentages, specific use cases, and technical capabilities.
- **Full-Stack & Mobile Stack**: Covers both web frontend (**React.js**, **Zustand**, **TanStack Query**, **Tailwind CSS**) and cross-platform mobile app development (**React Native**, **Expo**, **NativeWind**, **Android Studio**).

### 💻 4. Interactive Terminal (`Terminal.exe`)
- A functioning command-line interface with custom commands:
  - `help` — Lists available commands
  - `about` — Background, location, and developer philosophy
  - `skills` — Full tech stack matrix
  - `projects` — Direct links and technical summaries of highlight projects
  - `education` — Academic qualifications
  - `contact` — Social links & email
  - `resume` — Direct jump to the resume viewer
  - `clear` — Clears terminal buffer

### 📄 5. Digital Resume Sheet
- Pixel-perfect, printable document sheet styled with clean typography and balanced whitespace.
- Includes direct clickable **Live** and **GitHub** links for projects.
- One-click native browser print / PDF export button.

### 🎵 6. Retro Music Player (`NowPlaying`)
- Embedded lo-fi ambient audio player with custom track navigation, play/pause controls, progress scrubbing, and volume management.

---

## 🧰 Comprehensive Tech Stack & Keywords

### **Frontend & Mobile Technologies**
- **Core Languages**: JavaScript (ES6+), TypeScript, HTML5 (Semantic & WCAG Compliant), CSS3 (Flexbox, CSS Grid, Custom Properties).
- **Web Frameworks & Libraries**: React 19, React.js (Hooks, Context API, Memoization, Custom Hooks), React Router, ReactFlow.
- **Mobile App Development**: React Native, Expo (SDK & Managed Workflow), NativeWind, Expo CLI / Expo Go, Android Studio, Cross-Platform Architecture.
- **State Management**: Zustand (Atomic Stores, Actions, Decoupled State), Redux Toolkit (Slices, Selectors), React Context API.
- **Data Fetching & Async**: TanStack Query / React Query (Cache Invalidation, Optimistic Updates, Deduplication), REST APIs, Fetch API.
- **Styling & Design System**: Tailwind CSS (Utility-first, responsive layouts), Vanilla CSS Tokens, Retro Glassmorphism, Responsive Media Queries.
- **Animations & Graphics**: Framer Motion (Window gestures, transitions, spring physics), Canvas Confetti, Lucide React Icons, Custom Retro SVGs.
- **Performance & Multithreading**: Web Workers (Background thread data parsing with PapaParse), Code Splitting (`React.lazy`, `Suspense`), Lighthouse Optimization, Virtualized Rendering.
- **Build Tools & Workflow**: Vite (HMR, Rollup Bundling, ES Modules), Oxlint (High-speed static analysis), Git & GitHub Actions, Vercel, Netlify.

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets, retro wallpapers, audio tracks
├── src/
│   ├── components/         # Modular UI Components
│   │   ├── Achievements/   # Retro trophy badges & awards
│   │   ├── Desktop/        # Central desktop header & branding
│   │   ├── DesktopIcon/    # Desktop draggable / selectable app shortcuts
│   │   ├── Dock/           # Bottom retro taskbar / sticky social dock
│   │   ├── Education/      # Academic credentials & coursework
│   │   ├── Experience/     # Internship experience & impact metrics
│   │   ├── FunFacts/       # Interactive trivia & Easter eggs
│   │   ├── MusicPlayer/    # Functional audio player with playback controls
│   │   ├── Profile/        # Bio card & avatar
│   │   ├── Projects/       # Project explorer & 4x3 tools circular grid
│   │   ├── Resume/         # Printable resume sheet viewer
│   │   ├── Skills/         # Interactive skill executables & competency gauges
│   │   ├── Terminal/       # Interactive CLI emulator (Terminal.exe)
│   │   ├── Timeline/       # Year-by-year milestone navigator (2020-2026)
│   │   └── Window/         # Core Window coordinator, header, & controls
│   ├── context/
│   │   └── WindowContext.jsx # Global window coordinator (open, focus, z-index, stack)
│   ├── data/               # Curated data sources
│   │   ├── certificates.js # Verified credentials & external certificate URLs
│   │   ├── education.js    # University degrees & academic history
│   │   ├── experience.js   # Professional internship records & achievements
│   │   ├── funfacts.js     # Personal trivia & developer hobbies
│   │   ├── projects.js     # Featured production projects & metadata
│   │   └── skills.js       # Languages, frameworks, tools, & concepts
│   ├── pages/
│   │   └── Home.jsx        # Main desktop coordinator view
│   ├── utils/
│   │   └── constants.js    # Desktop icons registry & dock configurations
│   ├── App.jsx             # Top-level application wrapper & audio registry
│   ├── index.css           # Global typography, color tokens, & retro utilities
│   └── main.jsx            # React root entry point
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite configuration & plugins
└── README.md               # You are here!
```

---

## ⚡ Getting Started Locally

To run Kavish.OS on your local machine, ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 1. Clone the repository
```bash
git clone https://github.com/KavishRazdan/retro-desktop-portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to experience Kavish.OS live.

### 4. Run linter
```bash
npm run lint
```

### 5. Build for production
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory ready for deployment on Netlify or Vercel.

---

## 👨‍💻 About Md Kavish

I am a **Frontend & Mobile Application Developer** passionate about crafting high-performance, accessible, and delightful digital experiences. Whether architecting complex SaaS dashboards with React 19, building cross-platform mobile apps with React Native & Expo, or exploring creative web design paradigms, I believe every line of code should balance engineering precision with visual elegance.

- **Portfolio**: [kavish.netlify.app](https://kavish.netlify.app/)
- **LinkedIn**: [linkedin.com/in/kavish-razdan](https://www.linkedin.com/in/kavish-razdan/)
- **GitHub**: [github.com/KavishRazdan](https://github.com/KavishRazdan)
- **Email**: [razdankavish67@gmail.com](mailto:razdankavish67@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to fork, customize, and build your own retro operating system experience!
