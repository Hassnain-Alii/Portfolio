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
  title: "AI-Focused Full Stack Developer",
  shortAbout:
    "AI-focused Full Stack Developer with strong expertise in backend engineering, intelligent workflow automation, and production-grade web application development. Experienced in building scalable MERN applications integrated with Large Language Models (LLMs), AI APIs, cloud services, authentication systems, Redis caching, and asynchronous processing. Passionate about designing secure, high-performance software that combines modern backend architecture with practical AI solutions to solve real-world business problems.",
  contact: {
    email: "hassnainalyy@gmail.com",
    phone: "+92 3026340597",
    portfolio: "https://portfolio-hassnain-ali.vercel.app",
    github: "https://github.com/Hassnain-Alii",
    linkedin: "https://www.linkedin.com/in/hassnain-alii",
  },
};

export const skillsData = {
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "REST APIs", level: 90 },
    { name: "JWT & OAuth", level: 85 },
    { name: "Middleware Architecture", level: 85 },
  ],
  frontend: [
    { name: "React.js", level: 85 },
    { name: "Vite", level: 85 },
    { name: "EJS", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML & CSS", level: 95 },
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "Mongoose", level: 90 },
    { name: "Supabase / S3", level: 80 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Docker Compose", level: 80 },
    { name: "Vercel", level: 85 },
    { name: "Git & GitHub", level: 85 },
  ],
  security: [
    { name: "Helmet.js", level: 80 },
    { name: "CORS & Rate Limiting", level: 85 },
    { name: "Bcrypt & CSRF", level: 80 },
    { name: "Input Validation", level: 85 },
  ],
  ai: [
    { name: "Google Gemini", level: 85 },
    { name: "Claude AI", level: 80 },
    { name: "OpenRouter", level: 85 },
    { name: "AI Workflow Automation", level: 85 },
    { name: "Prompt Engineering", level: 85 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "AI Email Campaign Platform",
    category: "AI Full Stack",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Gemini", "OpenRouter"],
    description:
      "AI-powered email campaign platform that generates, reviews, and optimizes marketing emails using LLMs. Integrates Google Gemini and OpenRouter for personalized content, spam detection, and deliverability enhancement. Features async email processing via Redis and BullMQ, campaign/contact management, scheduling, analytics, and multi-provider support (SendGrid, Brevo, Mailgun, Postmark).",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
    liveLink: "https://ai-email-compaign-agent-project-fro.vercel.app",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI WhatsApp & E-Commerce Assistant",
    category: "AI Full Stack",
    techStack: ["Node.js", "Express", "MongoDB", "Gemini", "WhatsApp API", "LLM"],
    description:
      "AI-powered communication platform integrating web chat, WhatsApp Business, and email into a unified customer support solution. Built an intelligent assistant capable of answering queries, retrieving product information, and providing store assistance using LLMs. Features e-commerce integration for AI-powered product search, pricing, inventory lookup, and multi-channel communication.",
    image:
      "https://images.unsplash.com/photo-1682941664177-7920d0e59418?w=800&q=80",
    liveLink: "https://fyp-xi-flame.vercel.app",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "GalleryPro",
    category: "MERN Stack",
    techStack: ["React", "Node.js", "MongoDB", "Redis", "Supabase", "Docker", "JWT"],
    description:
      "Production-ready MERN image management platform with secure authentication, cloud storage, and enterprise-grade backend architecture. Features Redis caching, Supabase Storage, Google OAuth, JWT with refresh token workflow, role-based authorization, drag-and-drop uploads, image optimization, favorites, filtering, and search.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    liveLink: "https://gallery-project-frontend.vercel.app",
    githubLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Google Drive Enterprise",
    category: "MERN Stack",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "Supabase", "JWT", "Docker"],
    description:
      "Full-stack Google Drive clone supporting secure file storage, folder hierarchy, multi-file uploads, and enterprise-grade file management. Built with MongoDB Atlas, Redis caching, and Supabase Storage. Features JWT authentication, refresh token rotation, CSRF protection, recursive folder navigation, bulk downloads, favorites, indexed search, and automated trash lifecycle management.",
    image:
      "https://images.unsplash.com/photo-1649180549324-3e03951391aa?q=80&w=862&auto=format&fit=crop",
    liveLink: "https://google-drive-ecru.vercel.app",
    githubLink: "#",
    featured: true,
  },
  {
    id: 5,
    title: "E-Commerce Platform",
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
    id: 6,
    title: "Authentication System",
    category: "Full Stack",
    techStack: ["Node.js", "Express", "JWT", "MongoDB"],
    description:
      "Secure authentication system with JWT, OAuth 2.0, role-based access control, and session management.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Task Management System",
    category: "Full Stack",
    techStack: ["Node.js", "Express", "MongoDB"],
    description:
      "A backend-driven application for managing tasks with user-specific data handling and API-based architecture.",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Weather Dashboard",
    category: "JavaScript App",
    techStack: ["JavaScript", "REST API"],
    description:
      "A weather forecasting dashboard fetching real-time data from external APIs with responsive UI.",
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&q=80",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 9,
    title: "AI Chatbot Interface",
    category: "JavaScript App",
    techStack: ["JavaScript", "AI API"],
    description:
      "A chatbot interface integrating external AI APIs for conversational responses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
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
    duration: "Feb 2025 - Jul 2025",
    description: [
      "Developed and maintained RESTful APIs and backend services using Node.js and Express.js",
      "Designed MongoDB schemas, implemented CRUD operations, and optimized database queries for performance and scalability",
      "Built authentication and authorization systems using JWT, secure session handling, and role-based access control",
      "Integrated Redis caching to reduce database load and improve application response times",
      "Structured backend applications using modular architecture, reusable services, and middleware-based routing patterns",
      "Collaborated on frontend development using React.js and Tailwind CSS to deliver responsive user interfaces",
    ],
  },
  {
    id: 2,
    role: "Junior Developer",
    company: "SolnetInfo",
    duration: "Aug 2025 - Mar 2026",
    description: [
      "Developed and maintained RESTful APIs and backend services using Node.js and Express.js",
      "Designed MongoDB schemas, implemented CRUD operations, and optimized database queries for performance and scalability",
      "Built authentication and authorization systems using JWT, secure session handling, and role-based access control",
      "Integrated Redis caching to reduce database load and improve application response times",
      "Structured backend applications using modular architecture, reusable services, and middleware-based routing patterns",
      "Collaborated on frontend development using React.js and Tailwind CSS to deliver responsive user interfaces",
      "Performed debugging, testing, validation, and performance optimization across full-stack applications",
      "Contributed to production-level codebases by implementing new features, resolving bugs, and improving maintainability",
      "Dockerized applications to ensure consistent development, testing, and deployment environments",
      "Applied security best practices including input validation, error handling, and API protection mechanisms",
    ],
  },
];
