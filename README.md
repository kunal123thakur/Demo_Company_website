# 🚀 Animated & Responsive Demo Website

### 🌟 Overview
I have developed a **fully animated and responsive** demo website for a company proposal using **React**. The website incorporates **advanced styling and animation techniques** to deliver a smooth, visually appealing user experience.

The **magic** lies within the **config section** of this project, where the core animations and styles are managed.
![Screenshot 2025-03-30 200652](https://github.com/user-attachments/assets/f4373f76-9e61-4768-bf6f-84fcdf56d69e)

---


## 🎨 Features
✅ Fully responsive design 📱💻🖥️  
✅ Smooth animations & transitions 🎭  
✅ Advanced styling techniques 🎨  
✅ High-performance Locomotive Scroll integration 🚀  
✅ Modular & scalable React component structure 🏗️  

---

## 🛠️ Technologies Used
- **React.js** ⚛️
- **Locomotive Scroll** 🏎️ (For smooth scrolling effects)
- **Framer Motion** 🎥 (For animations)
- **Tailwind CSS** 🎨 (For styling)

---

## 📂 Project Structure
```bash
📦 project-root
├── 📁 components
│   ├── Hero.js
│   ├── LandingPage.js
│   ├── LoadingAnimation.js
│   ├── MotionCard.js
│   ├── Navigation.js
│   ├── Page1.js
│   ├── Page6.js
├── 📁 comp_2
│   ├── Cards.js
├── App.js  # Main application file
├── index.js  # Entry point
├── README.md  # Project documentation
```

---

## 🚀 Getting Started
### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies
```bash
yarn install  # Or npm install
```

### 3️⃣ Run the project
```bash
yarn start  # Or npm start
```

---

## ⚙️ Configuration
The **config** section of this project controls various animations and styles. Fine-tuning them allows customization of animation speeds, easing functions, and transition effects.

---

## 📸 Screenshots
*Add some screenshots of your project here*

---

## 🌍 Live Demo
[Click here](#) to view the live demo *(Add your deployment link here)*

---

## 📬 Contact
For queries or suggestions, feel free to reach out:
- 📧 Email: your.email@example.com
- 🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

## 📜 License
This project is **open-source** and available under the MIT License.


tailwind.config.js 1 


------------------------------------------------------------------
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};

--------------------------------------------
