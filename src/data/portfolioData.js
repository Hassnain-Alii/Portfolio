import React from "react";
import {
  Server,
  Layout,
  Database,
  Smartphone,
  Globe,
  Code,
} from "lucide-react";

export const personalInfo = {
  name: "Hassnain Ali",
  title: "Full Stack Developer (MERN & Backend-Focused)",
  shortAbout:
    "Full Stack Developer with hands-on experience building scalable web applications using Node.js, Express, MongoDB, and React. I specialize in backend systems, authentication, caching (Redis), and cloud storage integrations. I focus on building real-world, production-ready applications with strong performance and security practices.",
  contact: {
    email: "hassnainalyy@gmail.com",
    phone: "+92 3026340597",
    github: "https://github.com/Hassnain-Alii",
    linkedin: "https://www.linkedin.com/in/hassnain-alii",
  },
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML & CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "REST APIs", level: 90 },
    { name: "Authentication (JWT, OAuth)", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "Mongoose", level: 90 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Redis", level: 85 },
    { name: "Supabase", level: 80 },
    { name: "Vercel Deployment", level: 85 },
  ],
};

export const projectsData = [
  // 🔥 FEATURED PROJECTS
  {
    id: 1,
    title: "Google Drive Enterprise Clone",
    category: "Full Stack",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Supabase", "JWT"],
    description:
      "A full-featured file storage and management system inspired by Google Drive, supporting multi-file uploads, folder hierarchy, caching, and secure authentication.",
    image:
      "https://images.unsplash.com/photo-1649180549324-3e03951391aa?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveLink: "https://google-drive-ecru.vercel.app",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "GalleryPro (Image Platform)",
    category: "MERN Stack",
    techStack: ["React", "Node.js", "MongoDB", "Redis", "Supabase", "Docker"],
    description:
      "A high-performance image hosting platform with drag-and-drop uploads, search optimization, Redis caching, and secure authentication.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    liveLink: "https://gallery-project-frontend.vercel.app",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "TaskBoard (Kanban System)",
    category: "MERN Stack",
    techStack: ["React", "Node.js", "MongoDB", "Redis", "Supabase"],
    description:
      "A dynamic Kanban task management system with drag-and-drop functionality, analytics, filtering, and optimized backend performance.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    liveLink: "https://task-board-frontend-ten.vercel.app",
    githubLink: "#",
    featured: true,
  },

  // ⚡ OTHER FULL STACK PROJECTS
  {
    id: 4,
    title: "E-Commerce Web App (Scatch)",
    category: "Full Stack",
    techStack: ["Node.js", "Express", "MongoDB"],
    description:
      "A complete e-commerce platform with product management, cart system, and backend APIs for scalable operations.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Task & Notes Management App",
    category: "Full Stack",
    techStack: ["Node.js", "Express", "MongoDB"],
    description:
      "A backend-driven application for managing tasks and notes with user-specific data handling and API-based architecture.",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },

  // 🌐 FRONTEND PROJECTS
  {
    id: 6,
    title: "Gallery UI (Frontend)",
    category: "REACT",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive image gallery interface with modern layout and user-friendly interactions.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },

  // 🧠 JAVASCRIPT APPS
  {
    id: 7,
    title: "AI Chatbot",
    category: "JavaScript App",
    techStack: ["JavaScript", "API"],
    description:
      "A chatbot interface integrating external AI APIs for conversational responses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Weather App",
    category: "JavaScript App",
    techStack: ["JavaScript", "API"],
    description:
      "A weather forecasting app fetching real-time data from external APIs.",
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Currency Converter",
    category: "JavaScript App",
    techStack: ["JavaScript", "API"],
    description:
      "A simple tool for converting currencies using live exchange rate APIs.",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "SolnetInfo",
    duration: "Oct 2024 - Dec 2025",
    description: [
      "Gained hands-on experience in full stack development using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
      "Developed backend APIs for handling authentication, data management, and CRUD operations.",
      "Worked with real-world application architecture, focusing on scalable backend design and clean API structure.",
      "Implemented authentication systems including JWT-based login flows and secure user session handling.",
      "Collaborated on debugging, optimizing performance, and improving code structure in development projects.",
    ],
  },
];