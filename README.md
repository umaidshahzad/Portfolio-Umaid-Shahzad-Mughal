<div align="center">
  <h1>🚀 Umaid Shahzad Mughal - Developer Portfolio</h1>
  <p><i>A dynamic, premium personal portfolio showcasing full-stack engineering expertise and modern web design.</i></p>
  
  <br />

  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
</div>

---

## ✨ Overview
Welcome to my personal developer portfolio! This project is a modern, high-performance web application built to showcase my technical skills, educational background, and full-stack projects. It features a stunning glassmorphic UI, smooth micro-animations, full Dark/Light mode support, and a fully functional contact form powered by a custom backend API.

## 🛠️ Tech Stack & Technologies

### 💻 Frontend
* **Next.js (App Router):** Leveraging server-side rendering and the newest App router for blazing-fast load times and SEO optimization.
* **React 19:** Component-driven architecture using modern hooks and state management.
* **TailwindCSS 4:** Utility-first CSS framework ensuring responsive, pixel-perfect layouts with custom ambient shadows.
* **Lucide React:** Scalable, minimalist SVG icons used throughout the interface.
* **Framer Motion:** Powering smooth scroll interactions and elegant page transitions.

### ⚙️ Backend & API Integrations
* **Next.js Route Handlers:** Serverless backend functions handling form submissions securely.
* **Resend API:** Robust email delivery system wired directly into the Contact form to forward inquiries straight to my personal inbox.

---

## 🌟 Key Features

1. **🎨 Premium UI/UX:** Features a toggleable Dark/Light mode, custom CSS scrollbars, glassmorphism, and interactive hover-lift effects.
2. **📂 Dynamic Data-Driven Content:** The entire portfolio (skills, projects, bio, experience) is driven by a single `portfolioData.js` file, making content updates seamless without touching the UI components.
3. **✉️ Live Contact Form:** Visitors can send messages directly through the site, protected by server-side execution and powered by Resend.
4. **📱 Fully Responsive:** Carefully crafted mobile and tablet experiences with dynamic side drawers and responsive grids.

---

## 📂 Folder Structure

```text
📦 PORTFOLIO
 ┣ 📂 app                   # Next.js App Router (Layout, Pages, Styles)
 ┃ ┣ 📂 api/contact         # Secure serverless API route for the Resend email form
 ┃ ┣ 📜 layout.jsx          # Global application layout and Google Fonts configuration
 ┃ ┣ 📜 page.jsx            # Main single-page application entry point
 ┃ ┗ 📜 globals.css         # Tailwind configuration, base layers, and custom variables
 ┣ 📂 components            # Reusable React UI Components
 ┃ ┣ 📜 Navbar.jsx          # Responsive navigation bar with theme toggle
 ┃ ┣ 📜 Hero.jsx            # Landing section with quick action buttons
 ┃ ┣ 📜 About.jsx           # Bio and personal introduction
 ┃ ┣ 📜 Experience.jsx      # Engineering roles and responsibilities timeline
 ┃ ┣ 📜 Projects.jsx        # Project grid cards
 ┃ ┣ 📜 ProjectModal.jsx    # Interactive modal for detailed project views
 ┃ ┣ 📜 Skills.jsx          # Skills and certification section
 ┃ ┣ 📜 Contact.jsx         # Live contact form UI
 ┃ ┗ 📜 Footer.jsx          # Site footer
 ┣ 📂 data                  
 ┃ ┗ 📜 portfolioData.js    # 🧠 Centralized brain: contains all text, links, and project info!
 ┣ 📂 public                # Static assets and images
 ┣ 📜 .env                  # Environment variables (API keys)
 ┣ 📜 .env.example          # Environment variable template
 ┗ 📜 package.json          # Dependencies and scripts
```

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/umaidshahzad/portfolio.git
cd PORTFOLIO
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory (you can copy `.env.example`) and add your Resend API credentials:
```env
RESEND_API_KEY=re_your_super_secret_key
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```
The application will boot up at `http://localhost:3000`.

---

## 🌐 Deployment

This project is built seamlessly for deployment on **Vercel**. 
Simply link your GitHub repository to Vercel, securely add your `RESEND_API_KEY` in the Environment Variables dashboard, and hit deploy!

---
<div align="center">
  <i>Built with ❤️ by Umaid Shahzad Mughal.</i>
</div>
