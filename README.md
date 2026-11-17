# Ramanan S — Personal Developer Portfolio

A modern, high-contrast developer portfolio built with **React**, **Vite**, and **Tailwind CSS**, designed after the signature aesthetic of Tomasz Gajda (diagonal split hero, framed box headers, categorized skill sets, interactive project modals, and L-bracket form fields).

---

## 🚀 Features

- **Angled Split Hero:** High-contrast light gray & pure black layout with custom monogram logo (`RS`), greeting, role, and embossed 3D social buttons (`@`, `GitHub`, `LinkedIn`).
- **About Me & Academic Background:** Expandable `| MORE |` panel displaying B.Tech in IT at Agni College of Technology (CGPA 7.8) and Nirmala Matriculation Hr. Sec. School, alongside three core pillars (**Design**, **Development**, **Maintenance**).
- **Categorized Skills Grid:**
  - **USING NOW:** React.js, JavaScript, Node.js, Express.js, MySQL, Python, Tailwind CSS, Git.
  - **LEARNING:** Cybersecurity & Ethical Hacking, AI/ML, ARCore, Next.js.
  - **DIFFERENT:** UI/UX (Figma), Java, Firebase, Photoshop, After Effects, Canva.
- **Interactive Portfolio Showcase:**
  - Dynamic filter tabs (`ALL`, `CODED`, `DESIGNED`).
  - Featured carousel with `| DEMO |` and `| INFO |` action buttons.
  - Interactive project detail modal detailing architecture and features for **MeetFlow**, **Gamified Sustainable Farming (SIH 2025)**, **Vehicle Leasing & Land Utilization (IPD)**, and **Enersense AI**.
- **Experience Timeline:** Highlighting internships at **Tamizhan Skills (Cybersecurity RISE 5.0)**, **CodeAlpha (Full Stack)**, and **InternPe (AI/ML)**.
- **Signature Contact Section:** Custom L-bracket underline input fields, `| SUBMIT |` button, `^ BACK TO TOP` smooth scroll, and footer social links.

---

## 🛠️ Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg           # Custom RS monogram favicon
├── src/
│   ├── assets/               # Images and visual assets
│   ├── components/
│   │   ├── Navbar.jsx        # Top navigation with RS logo & pill button
│   │   ├── Hero.jsx          # Angled split hero & portrait
│   │   ├── About.jsx         # Bio, more toggle, and 3 pillars
│   │   ├── Skills.jsx        # Categorized skills grid
│   │   ├── Portfolio.jsx     # Project showcase with tab filters
│   │   ├── ProjectModal.jsx  # Detailed architecture popup
│   │   ├── Experience.jsx    # Internship experience cards
│   │   └── Contact.jsx       # L-bracket contact form & footer
│   ├── data/
│   │   └── portfolioData.js  # All your resume data, projects, and skills
│   ├── App.jsx
│   ├── index.css             # Tailwind and signature styling rules
│   └── main.jsx
├── preview.html              # Standalone single-file version for instant preview
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 3. Instant Standalone Preview
You can also directly double-click or open `preview.html` in your browser without running any command line tools.

---

## 🖼️ How to Add Your Real Photo

To replace the vector silhouette in the Hero section with your real portrait photo:
1. Save your photo as a transparent PNG or high-res JPG (e.g. `src/assets/profile.png`).
2. In [src/components/Hero.jsx](file:///c:/Users/raman/OneDrive/Desktop/Portfolio/src/components/Hero.jsx), replace the `<svg>` block with:
```jsx
<img 
  src="/src/assets/profile.png" 
  alt="Ramanan S" 
  className="w-full h-auto max-h-[580px] object-cover object-top drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)]"
/>
```
>>>>>>> 083e5b7 (Initial commit: Ramanan S developer portfolio built with React, Vite, and Tailwind CSS)
