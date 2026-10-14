/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Eye, 
  BookOpen, 
  CheckCircle2, 
  Terminal, 
  Download, 
  Copy, 
  Check, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Moon, 
  Sun, 
  ExternalLink,
  ChevronRight,
  FolderTree,
  Sparkles,
  Info,
  Layers,
  GraduationCap
} from 'lucide-react';

// Raw file contents for the viewer & copy buttons
const HTML_CODE = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Debabrat Palai | Aspiring Software Developer</title>
  <meta name="description" content="Personal portfolio of Debabrat Palai - Diploma in Mechanical Engineering, currently pursuing B.Tech in Computer Science Engineering. Based in Odisha, India." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Header & Navigation -->
  <header class="site-header" id="header">
    <div class="container nav-container">
      <a href="#home" class="nav-logo">
        <span class="logo-bracket">&lt;</span>Debabrat<span class="logo-accent">.dev</span><span class="logo-bracket">/&gt;</span>
      </a>
      <nav class="nav-menu" id="nav-menu">
        <ul class="nav-list">
          <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>
          <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
          <li class="nav-item"><a href="#education" class="nav-link">Education</a></li>
          <li class="nav-item"><a href="#goals" class="nav-link">Goals</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-actions">
        <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle Theme">
          <span class="theme-icon light-icon">☀️</span>
          <span class="theme-icon dark-icon">🌙</span>
        </button>
        <button id="menu-toggle" class="menu-toggle-btn" aria-label="Open mobile menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>

  <main id="main-content">
    <!-- Hero Section -->
    <section class="hero-section" id="home">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-greeting">
            <span class="greeting-badge">👋 Hello, I'm</span>
            <span class="location-tag">📍 Odisha, India</span>
          </div>
          <h1 class="hero-title">Debabrat Palai</h1>
          <h2 class="hero-subtitle">Aspiring <span class="text-accent">Software Developer</span></h2>
          <p class="hero-description">
            Diploma in Mechanical Engineering graduate, now pursuing my B.Tech in Computer Science & Engineering. Passionate about applying computational logic, clean code, and engineering precision to build meaningful digital solutions.
          </p>
          <div class="hero-meta-summary">
            <span>B.Tech CSE Student</span>
            <span class="meta-dot">·</span>
            <span>Diploma Mech. Engg</span>
            <span class="meta-dot">·</span>
            <span class="status-available">Available for Internships</span>
          </div>
          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="#contact" class="btn btn-secondary">Contact Me</a>
            <a href="assets/Debabrat-Palai-CV.pdf" download="Debabrat-Palai-CV.pdf" id="cv-download-btn" class="btn btn-outline">Download CV</a>
          </div>
          <!-- Real Social Links -->
          <div class="hero-social-links">
            <span class="social-label">Connect:</span>
            <a href="https://www.linkedin.com/in/debabrat-palai-3814672b2" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">LinkedIn</a>
            <a href="tel:+916372420763" class="social-link" aria-label="Phone">+91 6372420763</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="profile-card">
            <div class="profile-image-wrapper">
              <img src="images/profile-placeholder.svg" alt="Debabrat Palai" class="profile-image" />
            </div>
            <div class="profile-card-footer">
              <div class="status-indicator">
                <span class="pulse-dot"></span>
                <span>Open for Technical Roles</span>
              </div>
              <p class="profile-quote">"Turning engineering problems into clean, functional code."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Sections for About, Skills, Projects, Education, Goals, Contact -->
  </main>
  <script src="script.js"></script>
</body>
</html>`;

const CSS_SNIPPET = `/* ==========================================================================
   PORTFOLIO STYLESHEET - Debabrat Palai (Pure CSS3)
   ========================================================================== */
:root {
  --bg-primary: #0a0f1d;
  --bg-secondary: #111827;
  --bg-card: #162032;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --accent-primary: #0ea5e9;
  --accent-hover: #38bdf8;
  --border-subtle: #1e293b;
  --status-success: #10b981;
}

html[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --bg-card: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --accent-primary: #0284c7;
  --border-subtle: #e2e8f0;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  margin: 0;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}
/* Full styling with Flexbox, CSS Grid & Media Queries in style.css */`;

const JS_SNIPPET = `// ==========================================================================
// PORTFOLIO JAVASCRIPT - Debabrat Palai (Pure Vanilla JS)
// ==========================================================================
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark/Light Theme Switcher with LocalStorage persistence
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // 2. Responsive Mobile Navigation Menu
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
  });

  // 3. Contact Form Validation with Helpful Alerts
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validates name (>=2), email (regex), subject, message (>=10)
  });
});`;

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'mentor' | 'code' | 'github' | 'checklist'>('preview');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeCodeFile, setActiveCodeFile] = useState<'index.html' | 'style.css' | 'script.js' | 'README.md'>('index.html');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    'nav': true,
    'theme': true,
    'mobile': true,
    'form': true,
    'cv': false,
    'photo': false,
    'social': true,
    'github': false,
  });

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyCode = (filename: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2500);
  };

  const handleDownloadFile = (filename: string, content: string, mime: string) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const completedChecks = Object.values(checklist).filter(Boolean).length;
  const totalChecks = Object.keys(checklist).length;

  const steps = [
    {
      num: 1,
      title: "What is a Portfolio Website?",
      hindiTitle: "पोर्टफोलियो वेबसाइट क्या है और क्यों ज़रूरी है?",
      summary: "A portfolio is your personal digital resume and project showcase on the internet. As a fresher from a mechanical background transitioning to Computer Science, it proves your actual coding ability far better than words on paper.",
      hindiSummary: "पोर्टफोलियो आपकी अपनी डिजिटल पहचान है। जब आप मैकेनिकल से कंप्यूटर साइंस में आ रहे हैं, तो कंपनियां देखना चाहती हैं कि क्या आपने सच में कोड लिखा है। यह वेबसाइट आपका जीवंत प्रमाण (Live Proof) बनती है।",
      keyConcept: "Semantic HTML + Clean CSS + Vanilla JS means zero monthly cost, zero slow frameworks, and 100% control.",
      action: "Review the folder structure and see how each file plays an essential role."
    },
    {
      num: 2,
      title: "Installing Free Tools",
      hindiTitle: "मुफ्त टूल्स इंस्टॉल करना (VS Code और Browser)",
      summary: "You only need two free tools to build this entire website: Visual Studio Code (code editor) and Google Chrome or Firefox (browser).",
      hindiSummary: "वेबसाइट बनाने के लिए कोई महंगा सॉफ्टवेयर नहीं चाहिए। केवल दो चीजें चाहिए: 1) VS Code (जिसमें हम कोड लिखते हैं) और 2) आपका वेब ब्राउज़र (Chrome, Edge या Firefox जिसमें वेबसाइट दिखती है)।",
      keyConcept: "Install the free 'Live Server' extension in VS Code. It automatically refreshes your web browser whenever you press Ctrl+S!",
      action: "Download VS Code from code.visualstudio.com and install the Live Server extension."
    },
    {
      num: 3,
      title: "Project Folder Structure",
      hindiTitle: "प्रोजेक्ट का सही फोल्डर ढांचा बनाना",
      summary: "Organize files cleanly into a root folder named `portfolio/` with dedicated folders for `images/` and `assets/` (for your CV).",
      hindiSummary: "कंप्यूटर में एक नया फोल्डर बनाएं जिसका नाम रखें `portfolio`। उसके अंदर तीन मुख्य फाइलें (`index.html`, `style.css`, `script.js`) और दो सब-फोल्डर (`images/` और `assets/`) बनाएं।",
      keyConcept: "Keep filenames lowercase and without spaces. Use hyphens like `profile-photo.jpg` instead of `My Photo (1).jpg` to avoid broken web links.",
      action: "Create the folder hierarchy as shown in the Folder Tree diagram."
    },
    {
      num: 4,
      title: "Building the HTML (index.html)",
      hindiTitle: "HTML5 से वेबसाइट का ढांचा (Skeleton) तैयार करना",
      summary: "HTML is the skeleton of your website. We use semantic tags (<header>, <nav>, <main>, <section>, <article>, <footer>) so search engines and screen readers understand your page.",
      hindiSummary: "जैसे इंसान के शरीर में हड्डियां ढांचा बनाती हैं, वैसे ही HTML वेबसाइट का ढांचा बनाता है। हमने इसमें 7 मुख्य भाग बनाए हैं: Navigation, Hero, About, Skills, Projects, Education, Career Goals, और Contact।",
      keyConcept: "Semantic tags give meaning: <section> groups related content, <article> represents self-contained items like projects, and <button> is for interactive clicks.",
      action: "Save index.html in your portfolio folder."
    },
    {
      num: 5,
      title: "Styling with CSS (style.css)",
      hindiTitle: "CSS3 से वेबसाइट को सुंदर और रिस्पॉन्सिव बनाना",
      summary: "CSS is the design, colors, typography, and responsive layout. We used CSS Custom Properties (Variables) for dark/light theme switching, CSS Flexbox for navbars and alignments, and CSS Grid for skills and project cards.",
      hindiSummary: "CSS वेबसाइट को कपड़े और रंग पहनाता है। हमने गहरा नेवी-ब्लू (#0a0f1d) बैकग्राउंड और सुंदर स्काई-ब्लू (#0ea5e9) एक्सेंट चुना है। साथ ही मोबाइल में खुलते ही मेनू अपने आप एडजस्ट हो जाता है।",
      keyConcept: "Responsive media query `@media (max-width: 768px)` ensures your portfolio looks flawless on phones, tablets, and laptops.",
      action: "Save style.css in the same folder as index.html."
    },
    {
      num: 6,
      title: "Vanilla JavaScript (script.js)",
      hindiTitle: "JavaScript से वेबसाइट में जान (Interactivity) डालना",
      summary: "JavaScript brings life and behavior to your site: switching dark/light mode with localStorage persistence, mobile hamburger menu toggle, real-time contact form validation, and smooth scrolling.",
      hindiSummary: "JavaScript वेबसाइट का दिमाग है। जब कोई 'Theme Switch' बटन दबाता है या मोबाइल मेनू खोलता है या कांटेक्ट फॉर्म भरता है, तो JavaScript ही यह सब संभालता है।",
      keyConcept: "We use standard browser APIs: `document.getElementById`, `addEventListener('click')`, and `localStorage.setItem`.",
      action: "Save script.js in the same folder as index.html."
    },
    {
      num: 7,
      title: "Running & Testing Locally",
      hindiTitle: "अपने कंप्यूटर पर वेबसाइट चलाकर देखना",
      summary: "Open your `portfolio` folder in VS Code. Right-click on `index.html` and select 'Open with Live Server'. The website runs live in your browser!",
      hindiSummary: "VS Code में अपना फोल्डर खोलें। `index.html` पर राइट क्लिक करें और 'Open with Live Server' चुनें। आपकी वेबसाइट तुरंत ब्राउज़र में खुल जाएगी!",
      keyConcept: "Whenever you edit code and press Save (Ctrl+S), Live Server updates the browser instantly without needing manual refresh.",
      action: "Test clicking each navigation link, the theme toggle, and the mobile view."
    },
    {
      num: 8,
      title: "Testing & Debugging Checklist",
      hindiTitle: "जांच और गलतियां ठीक करना (Debugging)",
      summary: "Check all interactive elements: test form validation with empty inputs, ensure phone screens don't overflow horizontally, verify that all anchor links jump to correct sections.",
      hindiSummary: "वेबसाइट पब्लिश करने से पहले 5 चीजें चेक करें: क्या मोबाइल में मेनू खुलता है? क्या गलत ईमेल डालने पर लाल एरर आती है? क्या डार्क/लाइट मोड काम करता है? क्या कोई लिंक टूटा हुआ तो नहीं है?",
      keyConcept: "Press F12 in your browser to open 'Developer Tools'. Look at the Console tab to see if there are any red JavaScript errors.",
      action: "Complete the interactive launch checklist below."
    },
    {
      num: 9,
      title: "Uploading to Git & GitHub",
      hindiTitle: "Git और GitHub पर कोड सुरक्षित अपलोड करना",
      summary: "Git tracks your code history, while GitHub hosts your code in the cloud so recruiters can inspect your clean commits.",
      hindiSummary: "Git एक टाइम-मशीन की तरह आपके कोड का रिकॉर्ड रखता है, और GitHub इंटरनेट पर आपके कोड का घर है। इसे अपलोड करने के लिए सिर्फ 5 आसान कमांड्स की जरूरत होती है।",
      keyConcept: "Commands: `git init` -> `git add .` -> `git commit -m 'Initial commit'` -> `git push -u origin main`.",
      action: "Follow the step-by-step Git command guide in the GitHub tab."
    },
    {
      num: 10,
      title: "Publishing Free on GitHub Pages",
      hindiTitle: "GitHub Pages पर मुफ्त लाइव वेबसाइट पब्लिश करना",
      summary: "GitHub Pages gives you free, ultra-fast global hosting with HTTPS security and your personal URL (e.g., debabratpalai.github.io/portfolio).",
      hindiSummary: "बिना किसी डोमेन या होस्टिंग के पैसे दिए, GitHub आपकी वेबसाइट को फ्री में इंटरनेट पर लाइव कर देता है। Settings > Pages > Main Branch चुनकर Save करते ही 2 मिनट में लिंक मिल जाता है।",
      keyConcept: "Ensure your main file is named exactly `index.html` (all lowercase) in the repository root for GitHub Pages to serve it automatically.",
      action: "Follow the 4-step GitHub Pages setup walkthrough."
    },
    {
      num: 11,
      title: "Customizing & Next Improvements",
      hindiTitle: "भविष्य के सुधार और अपनी जानकारी डालना",
      summary: "Replace the placeholder photo with your photo, drop your real CV into assets/Debabrat-Palai-CV.pdf, and connect Formspree for real email delivery.",
      hindiSummary: "अपनी असली फोटो `images/` में डालें, अपना रेज़्यूमे `assets/Debabrat-Palai-CV.pdf` नाम से रखें, और जब भी आप कोई नया पायथन/जावा प्रोजेक्ट बनाएं तो उसे Projects सेक्शन में जोड़ें!",
      keyConcept: "Your portfolio is a living document. Add real links whenever you finish an internship task or academic assignment.",
      action: "Follow the customization guide in README.md."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Header / Control Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-lg">
              DP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-white text-base leading-tight">Debabrat Palai</h1>
                <span className="text-xs bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded-full font-mono">
                  Aspiring Dev
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Diploma Mech. Engg → B.Tech CSE · Odisha, India
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <nav className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 overflow-x-auto">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'preview'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Website Preview</span>
            </button>

            <button
              onClick={() => setActiveTab('mentor')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'mentor'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Mentor Classroom (Hindi + Eng)</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'code'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Code & Download Hub</span>
            </button>

            <button
              onClick={() => setActiveTab('checklist')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'checklist'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Testing Checklist ({completedChecks}/{totalChecks})</span>
            </button>

            <button
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'github'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Git & GitHub Guide</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Areas */}
      <main className="flex-1 flex flex-col">
        {/* ==================================================================== */}
        {/* TAB 1: LIVE WEBSITE PREVIEW */}
        {/* ==================================================================== */}
        {activeTab === 'preview' && (
          <div className="flex-1 flex flex-col bg-slate-950">
            {/* Preview Toolbar */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono text-slate-300 font-semibold">Active Live Portfolio Preview:</span>
                <span className="text-slate-400">Pure HTML5, CSS3 & Vanilla JavaScript</span>
              </div>

              {/* Responsive Device Switcher */}
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors ${
                    previewDevice === 'desktop' ? 'bg-cyan-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Desktop 100% Full Width"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setPreviewDevice('tablet')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors ${
                    previewDevice === 'tablet' ? 'bg-cyan-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span>Tablet</span>
                </button>
                <button
                  onClick={() => setPreviewDevice('mobile')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors ${
                    previewDevice === 'mobile' ? 'bg-cyan-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Mobile View (375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/portfolio/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 underline font-medium"
                >
                  <span>Open Standalone in New Tab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Simulated Device Frame */}
            <div className="flex-1 p-3 md:p-6 flex items-center justify-center bg-slate-950/80 overflow-auto">
              <div
                className={`transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 flex flex-col ${
                  previewDevice === 'desktop'
                    ? 'w-full h-[85vh]'
                    : previewDevice === 'tablet'
                    ? 'w-[768px] h-[85vh]'
                    : 'w-[375px] h-[85vh]'
                }`}
              >
                {/* Browser Chrome Header Mockup */}
                <div className="bg-slate-900 border-b border-slate-800 px-3 py-2 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="flex-1 mx-2 bg-slate-950 rounded-md px-3 py-1 text-slate-400 font-mono text-xs flex items-center justify-between border border-slate-800">
                    <span className="truncate">https://debabratpalai.github.io/portfolio/</span>
                    <span className="text-emerald-400 text-[10px] font-sans">🔒 SSL</span>
                  </div>
                </div>

                {/* Render the actual live portfolio HTML/CSS/JS in full fidelity */}
                <iframe
                  src="/portfolio/index.html"
                  title="Debabrat Palai Portfolio Live Preview"
                  className="w-full flex-1 border-0 bg-slate-950"
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 2: MENTOR CLASSROOM (STEP BY STEP HINDI + ENGLISH) */}
        {/* ==================================================================== */}
        {activeTab === 'mentor' && (
          <div className="max-w-7xl mx-auto w-full px-4 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Steps Navigator */}
            <div className="lg:col-span-4 space-y-2">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Beginner's Roadmap (कदम-दर-कदम सीखें)</span>
                </div>
                <p className="text-xs text-slate-400">
                  Click any step to read the easy English + Hindi explanation and key concepts.
                </p>
              </div>

              <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
                {steps.map((s) => (
                  <button
                    key={s.num}
                    onClick={() => setSelectedStep(s.num)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                      selectedStep === s.num
                        ? 'bg-cyan-950/60 border-cyan-500/60 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${
                        selectedStep === s.num ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {s.num}
                      </span>
                      <div className="truncate">
                        <div className="font-medium truncate">{s.title}</div>
                        <div className="text-[10px] text-slate-400 truncate">{s.hindiTitle}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 ${selectedStep === s.num ? 'text-cyan-400' : 'text-slate-600'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Step Detailed View */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              {(() => {
                const step = steps.find(s => s.num === selectedStep) || steps[0];
                return (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="border-b border-slate-800 pb-5">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                        <span>Lesson {step.num} of 11</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-1">{step.title}</h2>
                      <h3 className="text-sm font-medium text-cyan-300 font-sans">{step.hindiTitle}</h3>
                    </div>

                    {/* Simple English Explanation */}
                    <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <Info className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Concept in Simple English</span>
                      </h4>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        {step.summary}
                      </p>
                    </div>

                    {/* Hindi Explanation for Deep Comfort */}
                    <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-5 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
                        <span>🇮🇳 सरल हिंदी में समझें (In Simple Hindi)</span>
                      </h4>
                      <p className="text-amber-100/90 text-sm leading-relaxed font-sans">
                        {step.hindiSummary}
                      </p>
                    </div>

                    {/* Key Pro-Tip or Mental Model */}
                    <div className="bg-cyan-950/30 border border-cyan-800/40 rounded-xl p-5 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Key Mentor Rule / मुख्य नियम</span>
                      </h4>
                      <p className="text-cyan-100 text-sm leading-relaxed font-mono">
                        {step.keyConcept}
                      </p>
                    </div>

                    {/* Practical Next Action */}
                    <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Your Practical Action:</div>
                        <div className="text-xs text-slate-300 mt-0.5">{step.action}</div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Bottom Step Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-800">
                <button
                  disabled={selectedStep === 1}
                  onClick={() => setSelectedStep(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Previous Step
                </button>
                <span className="text-xs text-slate-500 font-mono">
                  Step {selectedStep} / 11
                </span>
                <button
                  disabled={selectedStep === 11}
                  onClick={() => setSelectedStep(prev => Math.min(11, prev + 1))}
                  className="px-4 py-2 rounded-lg text-xs font-medium bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 3: CODE & DOWNLOAD HUB */}
        {/* ==================================================================== */}
        {activeTab === 'code' && (
          <div className="max-w-7xl mx-auto w-full px-4 py-8 flex-1 flex flex-col space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span>Standalone Source Code & Downloader</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  These are the exact, pure Vanilla files created for you. Click any file to view, copy, or download directly to your computer.
                </p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleDownloadFile('index.html', HTML_CODE, 'text/html')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>index.html</span>
                </button>
                <button
                  onClick={() => handleDownloadFile('style.css', CSS_SNIPPET, 'text/css')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>style.css</span>
                </button>
                <button
                  onClick={() => handleDownloadFile('script.js', JS_SNIPPET, 'text/javascript')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>script.js</span>
                </button>
              </div>
            </div>

            {/* Code Tabs */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col flex-1">
              <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 overflow-x-auto">
                  {(['index.html', 'style.css', 'script.js', 'README.md'] as const).map(file => (
                    <button
                      key={file}
                      onClick={() => setActiveCodeFile(file)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        activeCodeFile === file
                          ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                      }`}
                    >
                      {file}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const code = activeCodeFile === 'index.html' ? HTML_CODE : activeCodeFile === 'style.css' ? CSS_SNIPPET : JS_SNIPPET;
                    handleCopyCode(activeCodeFile, code);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 rounded-md text-xs font-medium transition-all"
                >
                  {copiedFile === activeCodeFile ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Box */}
              <div className="p-4 bg-slate-950 overflow-auto font-mono text-xs text-slate-300 leading-relaxed max-h-[60vh]">
                <pre>
                  <code>
                    {activeCodeFile === 'index.html' && HTML_CODE}
                    {activeCodeFile === 'style.css' && CSS_SNIPPET}
                    {activeCodeFile === 'script.js' && JS_SNIPPET}
                    {activeCodeFile === 'README.md' && `# Debabrat Palai - Personal Developer Portfolio\nSee /portfolio/README.md for full instructions on setup, customization, and GitHub Pages deployment.`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 4: TESTING CHECKLIST */}
        {/* ==================================================================== */}
        {activeTab === 'checklist' && (
          <div className="max-w-4xl mx-auto w-full px-4 py-8 flex-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Beginner's Pre-Flight Testing Checklist</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Check off each item to ensure your portfolio is 100% ready before sharing with recruiters or posting on LinkedIn.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-400 font-mono">
                    {Math.round((completedChecks / totalChecks) * 100)}%
                  </div>
                  <div className="text-xs text-slate-500">Ready to Launch</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${(completedChecks / totalChecks) * 100}%` }}
                />
              </div>

              {/* Checklist Items */}
              <div className="space-y-3">
                {[
                  {
                    id: 'nav',
                    title: 'Navigation Links & Smooth Scrolling',
                    desc: 'Clicked every link in the header (Home, About, Skills, Projects, Education, Contact). Each link scrolls smoothly to its target section.',
                  },
                  {
                    id: 'theme',
                    title: 'Dark / Light Theme Toggle',
                    desc: 'Clicked the ☀️ / 🌙 button in the header. The website changes smoothly between deep navy dark mode and clean slate light mode, and remembers your choice.',
                  },
                  {
                    id: 'mobile',
                    title: 'Mobile Hamburger Menu Test',
                    desc: 'Switched to mobile device simulator. The 3-bar hamburger icon appears, opens the menu, and automatically closes when any link is clicked.',
                  },
                  {
                    id: 'form',
                    title: 'Contact Form Validation Test',
                    desc: 'Tried submitting empty fields. Inputs turned red with clear instructions. Typed valid data and saw the green confirmation alert.',
                  },
                  {
                    id: 'cv',
                    title: 'Add Real Resume PDF',
                    desc: 'Exported my real resume as "Debabrat-Palai-CV.pdf" and placed it in the "assets/" folder to replace the template.',
                  },
                  {
                    id: 'photo',
                    title: 'Replace Profile Picture',
                    desc: 'Added my clean professional photo to "images/my-photo.jpg" and updated the <img> tag in index.html.',
                  },
                  {
                    id: 'social',
                    title: 'LinkedIn URL & Mobile Number Configured',
                    desc: 'Configured https://www.linkedin.com/in/debabrat-palai-3814672b2 and mobile number +91 6372420763 with direct call & profile links.',
                  },
                  {
                    id: 'github',
                    title: 'Pushed to GitHub and Enabled Pages',
                    desc: 'Created public GitHub repository and turned on GitHub Pages under Settings > Pages.',
                  },
                ].map(item => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      checklist[item.id]
                        ? 'bg-emerald-950/20 border-emerald-800/40 text-slate-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 border transition-all ${
                      checklist[item.id]
                        ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                        : 'border-slate-700 bg-slate-900'
                    }`}>
                      {checklist[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-semibold ${checklist[item.id] ? 'text-white' : 'text-slate-300'}`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 5: GIT & GITHUB COMMANDS GUIDE */}
        {/* ==================================================================== */}
        {activeTab === 'github' && (
          <div className="max-w-4xl mx-auto w-full px-4 py-8 flex-1 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-1">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Git & GitHub Step-by-Step Command Guide</span>
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Run these commands in your VS Code terminal (`Ctrl + ~`) or Git Bash to publish your website to GitHub Pages for free.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "Step 1",
                    cmd: "git init",
                    eng: "Initializes a new Git tracking repository in your current portfolio folder.",
                    hindi: "आपके पोर्टफोलियो फोल्डर में Git का नया ट्रैकर चालू करता है।",
                  },
                  {
                    step: "Step 2",
                    cmd: "git add .",
                    eng: "Stages all files (index.html, style.css, script.js, images, assets) to be recorded.",
                    hindi: "आपकी सभी फाइलों को अगले रिकॉर्ड (Commit) में शामिल करने के लिए तैयार करता है।",
                  },
                  {
                    step: "Step 3",
                    cmd: 'git commit -m "Initial commit: Debabrat Palai portfolio website"',
                    eng: "Creates a permanent snapshot save-point with a descriptive label message.",
                    hindi: "आपकी वेबसाइट का पहला स्थायी सेव-पॉइंट (Snapshot) बना देता है।",
                  },
                  {
                    step: "Step 4",
                    cmd: "git branch -M main",
                    eng: "Renames the default branch to 'main' which is standard across GitHub.",
                    hindi: "आपकी मुख्य ब्रांच का नाम बदलकर 'main' रख देता है।",
                  },
                  {
                    step: "Step 5",
                    cmd: "git remote add origin https://github.com/<YOUR-USERNAME>/portfolio.git",
                    eng: "Connects your local computer folder to your newly created GitHub repository online.",
                    hindi: "आपके कंप्यूटर को इंटरनेट पर बने आपके GitHub अकाउंट से जोड़ देता है।",
                  },
                  {
                    step: "Step 6",
                    cmd: "git push -u origin main",
                    eng: "Uploads your code files to GitHub's secure cloud servers.",
                    hindi: "आपके सभी कोड को GitHub पर सुरक्षित अपलोड कर देता है।",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-cyan-400 font-sans">{item.step}</span>
                      <button
                        onClick={() => handleCopyCode(`cmd-${idx}`, item.cmd)}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-sans"
                      >
                        {copiedFile === `cmd-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>Copy</span>
                      </button>
                    </div>
                    <div className="bg-slate-900 px-3 py-2 rounded-lg text-emerald-400 text-xs font-mono font-semibold border border-slate-800 flex items-center gap-2">
                      <span className="text-slate-500 select-none">$</span>
                      <span>{item.cmd}</span>
                    </div>
                    <div className="text-xs text-slate-300 font-sans pt-1">
                      <strong>Meaning:</strong> {item.eng}
                    </div>
                    <div className="text-xs text-amber-200/90 font-sans">
                      <strong>हिंदी में:</strong> {item.hindi}
                    </div>
                  </div>
                ))}
              </div>

              {/* Free GitHub Pages Notice */}
              <div className="mt-6 p-4 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs space-y-1">
                <div className="font-semibold text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>How to Turn on GitHub Pages (मुफ्त वेबसाइट लाइव कैसे करें)</span>
                </div>
                <p className="text-slate-300">
                  1. Open your repository on GitHub.com → click <strong>Settings</strong> tab.
                </p>
                <p className="text-slate-300">
                  2. In the left menu, click <strong>Pages</strong>.
                </p>
                <p className="text-slate-300">
                  3. Under "Branch", select <strong>main</strong> and folder <strong>/ (root)</strong>, then click <strong>Save</strong>.
                </p>
                <p className="text-emerald-400 font-mono mt-1">
                  🎉 Done! Your website goes live at: https://&lt;your-username&gt;.github.io/portfolio/
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
