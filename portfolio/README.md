# Debabrat Palai - Personal Developer Portfolio

> **Aspiring Software Developer** | Diploma in Mechanical Engineering | B.Tech in Computer Science Engineering (Pursuing)  
> Location: Odisha, India · Email: palaidebabrat463@gmail.com · Mobile: +91 6372420763  
> LinkedIn: [linkedin.com/in/debabrat-palai-3814672b2](https://www.linkedin.com/in/debabrat-palai-3814672b2)

---

## 🌟 About This Project

This is a modern, lightweight, fully responsive personal portfolio website built with **100% pure HTML5, CSS3, and Vanilla JavaScript**—with zero external frameworks, zero paid libraries, and zero build tool requirements.

It is designed for **Debabrat Palai** to present an authentic, professional profile for entry-level software engineering roles, internships, and technical collaborations.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                  # Semantic structure & content
├── style.css                   # Custom responsive styling & dark/light theme
├── script.js                   # Interactivity, menu, filters & form validation
├── images/
│   └── profile-placeholder.svg # Profile avatar (replace with your photo)
├── assets/
│   └── Debabrat-Palai-CV.pdf   # Your resume PDF file
└── README.md                   # Complete documentation & instructions
```

---

## 🚀 How to Run Locally

### Method 1: VS Code Live Server (Recommended)
1. Install [Visual Studio Code](https://code.visualstudio.com/) (Free).
2. Open VS Code, press `Ctrl + Shift + X` (or click the Extensions icon on the left).
3. Search for **"Live Server"** by *Ritwick Dey* and click **Install**.
4. Open the `portfolio` folder in VS Code (`File > Open Folder...`).
5. Right-click on `index.html` and choose **"Open with Live Server"**.
6. Your browser will automatically open at `http://127.0.0.1:5500/index.html`. Whenever you make changes and save, the browser updates automatically!

### Method 2: Direct Browser Opening
- Double-click `index.html` in your file explorer to open it in Chrome, Edge, or Firefox.

---

## ✏️ How to Customize Your Details

All details have been kept easy to edit with standard text:

1. **Your Profile Photo:**
   - Place a square photo of yourself in the `images/` folder (e.g. `images/my-photo.jpg`).
   - In `index.html` around line 95, update:
     ```html
     <img src="images/my-photo.jpg" alt="Debabrat Palai" class="profile-image" />
     ```

2. **Your Resume / CV:**
   - Export your real resume as a PDF from Canva, Google Docs, or Word.
   - Name it `Debabrat-Palai-CV.pdf` and paste it inside the `assets/` folder to replace the placeholder.

3. **Social & Contact Links:**
   - Search for `https://github.com/your-username` in `index.html` and replace with your real GitHub handle.
   - Search for `https://linkedin.com/in/your-username` and replace with your real LinkedIn URL.
   - Update phone number in the Quick Info section.

4. **Updating Projects:**
   - In `index.html`, locate `<section class="section projects-section" id="projects">`.
   - Update the project titles, descriptions, and GitHub links.
   - Remove the `[Sample Project - Example]` badge when replacing with your real creations!

---

## 📧 Making the Contact Form Send Real Emails (Free)

The current form includes complete client-side validation using JavaScript. To receive real emails in your inbox without coding a backend server:

1. Go to [https://formspree.io](https://formspree.io) and sign up for a free account.
2. Click **"+ New Form"**, name it "Portfolio Contact", and enter your email: `palaidebabrat463@gmail.com`.
3. Formspree will give you a special URL like `https://formspree.io/f/mqkvyqza`.
4. In `index.html`, find `<form id="contact-form"...` and change it to:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ENDPOINT_ID" method="POST">
   ```
5. In `script.js`, comment out `e.preventDefault();` so the form submits directly to Formspree, or use `fetch()` to send asynchronously!

---

## 🌐 Deploying Free on GitHub Pages

Follow these exact steps:

### 1. Initialize Git in your folder (Terminal / Git Bash)
```bash
git init
git add .
git commit -m "Initial commit of Debabrat Palai portfolio website"
```

### 2. Connect to GitHub
1. Open [https://github.com](https://github.com) and click **"New repository"**.
2. Name it: `portfolio` or `debabratpalai.github.io`.
3. Keep it **Public** and do NOT initialize with README (you already have one).
4. Run in your terminal:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/portfolio.git
git push -u origin main
```

### 3. Turn on GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top right tab).
3. On the left sidebar, click **Pages**.
4. Under **"Build and deployment" > Branch**, select `main` and `/ (root)`.
5. Click **Save**.
6. Wait 1-2 minutes. GitHub will provide your live URL:
   `https://<YOUR-GITHUB-USERNAME>.github.io/portfolio/`

---

## 💡 Recommended Next Upgrades for Debabrat

1. **Build a Python + Tkinter/Flask project** connected to an SQLite database (e.g., student management system or mechanical calculator) and link it in the Projects section.
2. **Write technical blog notes** on your journey transitioning from Mechanical Engineering to Computer Science.
3. **Earn free certifications** (like FreeCodeCamp Responsive Web Design or HackerRank Problem Solving) and add a "Certifications" sub-section.

---
*Created with care for Debabrat Palai's software engineering journey.*
