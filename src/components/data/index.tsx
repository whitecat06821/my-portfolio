import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import noteApp from "../../assets/projects/note-app.png";
import freshApp from "../../assets/projects/fresh-app.png";
import portoApp from "../../assets/projects/porto-app.png";
import cvApp from "../../assets/projects/cv-app.png";
import Exclucive from "../../assets/projects/screencapture-e-commerce-v1-ochre-vercel-app-2024-07-27-16_20_53.png";
import cyborg from "../../assets/projects/screencapture-cyborg-mu-vercel-app-2024-07-27-16_27_43.png";

import html from "../../assets/skills images/html-5.png";
import css from "../../assets/skills images/css-3.png";
import bootstrap from "../../assets/skills images/bootstrap.png";
import tailwind from "../../assets/skills images/icons8-tailwind-css-48.png";
import js from "../../assets/skills images/js.png";
import react from "../../assets/skills images/icons8-react-native-48.png";
import redux from "../../assets/skills images/icons8-redux-48.png";
import axios from "../../assets/skills images/axios_.png";
import git from "../../assets/skills images/icons8-git-48.png";
import npm from "../../assets/skills images/icons8-npm-48.png";
import vercel from "../../assets/skills images/vercel.256x225.png";
import github from "../../assets/skills images/social.png";
import lottie from "../../assets/skills images/download.png";
import reacticons from "../../assets/skills images/react-icons.svg";
import vscode from "../../assets/skills images/download (1).png";
import postman from "../../assets/skills images/download (2).png";
import figma from "../../assets/skills images/download (3).png";
import chrome from "../../assets/skills images/chrome.jpeg";
import typeScript from "../../assets/skills images/typescript.svg";
import {
  Inavitems,
  Iprojects,
  Iskills,
  Isocialmedia,
  Itools,
} from "../interfaces";

export const NAV_ITEMS: Inavitems[] = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Skills",
    to: "/skills",
  },
  {
    text: "Project",
    to: "/projects",
  },
  {
    text: "Contact Me",
    to: "/contactme",
  },
];

export const SOCIAL_MEDIA: Isocialmedia[] = [
  {
    href: "https://www.facebook.com/profile.php?id=100069281631238",
    icon: <FaFacebook />,
  },
  {
    href: "https://github.com/aliahmed200",
    icon: <FaGithub />,
  },
  {
    href: "https://t.me/aliahmed_2000",
    icon: <SiTelegram />,
  },
  {
    href: "mailto:aliahmed60345@gmail.com",
    icon: <SiGmail />,
  },
  {
    href: "whatsapp://send?phone=+201096929238",
    icon: <BsWhatsapp />,
  },
  {
    href: "https://www.linkedin.com/in/ali-ahmed-2579202a9",
    icon: <FaLinkedin />,
  },
];

export const PARAGRAPH_HOME: string =
  "I’m a passionate Front End developer with experience developing FrontEnd web applications with React.js I am strongly interested in learning new technologies and implementing them in my projects. I'm aself-motivated and hardworking individual who is always ready to learn new things and work in a team.";
export const PARAGRAPH_ABOUT: string =
  'Hello! I\'m Ali, a front-end developer from Egypt. I love creating web applications with React, and I\'m currently studying BackEnd. "I\'m not sure if it\'s "front-end", "frontend", or "front end", but it doesn\'t really matter😅"';

export const SKILLS: Iskills[] = [
  {
    src: html,
    alt: "html",
    children: "Html",
  },
  {
    src: css,
    alt: "css",
    children: "Css",
  },
  {
    src: js,
    alt: "js",
    children: "Java Script",
  },
  {
    src: typeScript,
    alt: "typeScript",
    children: "Type Script",
  },
  {
    src: bootstrap,
    alt: "bootstrap",
    children: "Bootstrap",
  },
  {
    src: tailwind,
    alt: "tailwind",
    children: "Tailwind Css",
  },
  {
    src: react,
    alt: "react",
    children: "react",
  },
  {
    src: redux,
    alt: "redux",
    children: "redux",
  },
  {
    src: axios,
    alt: "axios",
    children: "axios",
  },
  {
    src: git,
    alt: "git",
    children: "git",
  },
  {
    src: npm,
    alt: "npm",
    children: "npm",
  },
  {
    src: vercel,
    alt: "vercel",
    children: "vercel",
  },
  {
    src: github,
    alt: "github",
    children: "github",
  },
  {
    src: lottie,
    alt: "lottie",
    children: "lottie",
  },
  {
    src: reacticons,
    alt: "reacticons",
    children: "react icons",
  },
];

export const TOOLS: Itools[] = [
  {
    src: vscode,
    alt: "vscode",
    children: "VsCode",
  },
  {
    src: postman,
    alt: "postman",
    children: "Postman",
  },
  {
    src: figma,
    alt: "figma",
    children: "figma",
  },
  {
    src: chrome,
    alt: "chrome",
    children: "Chrome",
  },
];

export const PROJECTS: Iprojects[] = [
  {
    id: 1,
    name: "Fresh Cart",
    description: [
      "Created a cool online shop using React.js",
      "Connected it smoothly to Api using Axios.",
      "Made sure all the info entered is correct and safe",
      "Used Formik to make signing up and buying stuff easy",
      "Designed a simple cart page so you can see what you’re buying",
      "Made the website work smoothly, like it’s all on one page (SPA)",
    ],
    image: freshApp,
    github: "https://github.com/aliahmed200/E-commerce",
  },
  {
    id: 2,
    name: "Note App",
    description: [
      "Made a Note Website using React.js for easy interaction",
      "Used Axios to connect with other websites smoothly",
      "Made sure the forms work well using Yup",
      "Used Formik to make login and sign up easy",
      "Let users add, delete, and change notes easily",
      "Implemented a Single Page Application (SPA).",
    ],
    image: noteApp,
    github: "https://github.com/aliahmed200/note-app",
    vercel: "https://note-app-my-new-branch.vercel.app/login",
  },
  {
    id: 3,
    name: "JobJunction",
    description: [
      "Designed and developed a cv builder System using react and Tailwind CSS",
      "Users can select their preferred template.",
      "input their information, and generate a professional CV in PDF format.",
      "It’s an easy-to-use tool for creating personalized resumes effortlessly",
    ],
    image: cvApp,
    vercel: "https://cv-builder-newversion.vercel.app/",
    github: "https://github.com/aliahmed200/cv-builder",
  },
  {
    id: 4,
    name: "My Portofolio",
    description: [
      "- Developed an engaging Portfolio using React.js, TypeScript, and Tailwind CSS.",
      "- Implemented dark and light mode themes for enhanced user experience.",
      "- Utilized React-Router for seamless SPA navigation.",
      "- Integrated animations to enhance interactivity.",
      "- Leveraged TypeScript for type safety and improved code quality.",
      "- Used React Helmet for dynamic updates to the page title and meta tags.",
      "- Implemented react-detect-offline for offline detection.",
      "- Built accessible and customizable UI elements with Headless UI.",
      "- Ensured perfect responsiveness across all screen sizes.",
    ],
    image: portoApp,
    vercel: "https://portfolio-three-sandy-24.vercel.app/",
    github: "https://github.com/aliahmed200/portfolio",
  },
  {
    id: 5,
    name: "Exclusive",
    description: [
      "Created a cool online shop using React.js",
      "Connected it smoothly to Api using Axios.",
      "Made sure all the info entered is correct and safe",
      "Used Formik to make signing up and buying stuff easy",
      "Designed a simple cart page so you can see what you’re buying",
      "Made the website work smoothly, like it’s all on one page (SPA)",
    ],
    image: Exclucive,
    github: "https://github.com/aliahmed200/E-commerce-ts",
    vercel: "https://e-commerce-v1-ochre.vercel.app/",
  },
  {
    id: 6,
    name: "CYBORG",
    description: [
      "Developed a dynamic gaming website using React.js, TypeScript, and Tailwind CSS",
      "Created core pages including Home, Streams, Profile, Details, and Browse for a comprehensive user experience",
      "Implemented responsive design to ensure optimal performance across various devices and screen sizes",
      "Utilized react-router-dom for efficient single-page application navigation and seamless transitions between pages",
      "Incorporated perfect-pixel to maintain pixel-perfect design accuracy across different viewports",
      "Designed and integrated a visually appealing and functional Navbar with search functionality and user profile access",
    ],
    image: cyborg,
    vercel: "https://cyborg-mu.vercel.app/",
    github: "https://github.com/aliahmed200/cyborg",
  },
];
