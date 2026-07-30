// A single configuration file holding all the text, projects, and skills data
// so it can be easily edited later without touching the UI components.

export const portfolioData = {
  personalInfo: {
    name: "UMAID SHAHZAD MUGHAL",
    shortName: "Umaid Shahzad",
    title: "Junior Full Stack Developer",
    tagline: "Junior Full Stack Developer (MERN)",
    subTagline: "Architecting scalable web platforms with clean code, RESTful APIs, and modern full-stack workflows.",
    status: "Available for Internships & Junior Roles",
    location: "Lahore, Pakistan",
    email: "umaidhamza0@gmail.com",
    phone: "+92 300 0231381",
    github: "https://github.com/umaidshahzad",
    linkedin: "https://www.linkedin.com/in/umaid-shahzad-6b083b347",
    profilePic: "/Pic.png",
    bio: [
      "Motivated junior Full Stack Developer with hands-on experience building production-grade MERN and PERN (MySQL) applications. Proficient in designing RESTful APIs, implementing JWT-based authentication, and structuring scalable backend architectures.",
      "Driven by a systems thinking mindset and a continuous interest in backend engineering, clean code practices, and emerging technologies. Currently expanding my expertise by learning Redis and System Design basics."
    ],
  },

  education: {
    institution: "University of Engineering and Technology (UET) Lahore",
    location: "Pakistan",
    degree: "B.S. in Computer Science",
    cgpa: "3.219 (4 Semesters)",
    graduation: "Expected Graduation: June 2028",
    highlights: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Computer Networks",
      "Software Engineering"
      
    ]
  },

  experience: [
    {
      role: "MERN Stack Developer Intern",
      company: "Al Khawarizmi Institute of Computer Science , UET Lahore",
      period: "June 2026 — August 2026",
      location: "Lahore, Pakistan",
      description: "Designed, architected, and developed the following platforms for KICS alongside core backend engineering contributions:",
      bulletPoints: [
        "AI Chatbot & Customer Relationship Manager",
        "Admission Portal & OCW (Open Courseware) Learning platform",
        "UHC Health Platform",
        "Engineered RESTful APIs with Node.js and Express, enforcing modular MVC architecture and JWT authentication.",
        "Built distributed real-time systems utilizing Socket.io and Redis multi-server state synchronization.",
        "Integrated AI API capabilities including Gemini Embeddings and DeepSeek AI fallback workflows.",
        "Optimized MongoDB Atlas and MySQL database indexes for fast query performance under load."
      ]
    }
  ],

  projects: [
    {
      id: "mh-concepts",
      title: "MH Concepts",
      subtitle: "Full Stack Interior Decor Lead Generation Platform",
      category: "Full Stack / E-Commerce Lead Gen",
      featured: true,
      badge: "Production Ready",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Cloudinary", "WhatsApp Cloud API", "Nodemailer", "CORS"],
      shortDescription: "Engineered a dynamic product showroom with real-time category filtering and keyword search, enabling a mobile-first browsing experience for business clients.",
      bulletPoints: [
        "Engineered a dynamic product showroom with real-time category filtering and keyword search, enabling a mobile-first browsing experience for business clients.",
        "Built a secure admin dashboard with full product CRUD, customer inquiry tracking, and live business analytics — all protected via JWT authentication and HTTP-only cookies.",
        "Integrated WhatsApp Cloud API and Nodemailer SMTP to deliver dual instant notifications to the admin on every new customer lead.",
        "Managed media assets through Cloudinary API for high-resolution image uploads; optimized MongoDB Atlas indexing for fast product retrieval at scale."
      ],
      demoLink: "https://mh-concepts-frontend.onrender.com/",
      githubLink: "https://github.com/umaidshahzad/MH-Concepts-v2",
      architectureNotes: "Uses HTTP-only cookies for JWT token protection against XSS attacks, backed by a resilient dual-notification pipeline using WhatsApp Webhooks and SMTP fallback.",
      stats: [
        { label: "Notification Latency", value: "< 1s" },
        { label: "Image Retrieval", value: "Cloudinary CDN" },
        { label: "Auth Security", value: "JWT + Cookies" }
      ]
    },
    {
      id: "crm-realtime",
      title: "CRM Real-Time Customer Support & AI Fallback",
      subtitle: "Multi-Agent Live Chat & AI Chatbot Platform",
      category: "Real-Time & AI Infrastructure",
      featured: true,
      badge: "Real-Time Engine",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Socket.io", "Deepseek AI API", "Tailwind CSS", "Recharts"],
      shortDescription: "Architected a scalable WebSocket (Socket.io) infrastructure using Redis to enable instant, synchronized live chat between external leads and internal sales agents.",
      bulletPoints: [
        "Architected a scalable WebSocket (Socket.io) infrastructure using Redis to enable instant, synchronized live chat between external leads and internal sales agents across multiple server instances.",
        "Integrated the Deepseek AI API to automatically intercept unassigned chats after a 30-second timeout, acting as a fallback chatbot to parse lead contact details, summarize conversations, and provide instant customer support.",
        "Engineered a global distributed state system using Redis to track real-time agent availability, routing incoming chats into a live queue that instantly syncs across all connected admin and agent consoles.",
        "Built a comprehensive Admin Dashboard using Recharts to visualize real-time CRM data, dynamically rendering formulas for lead sources, conversation statuses, and agent engagement metrics."
      ],
      demoLink: "https://crm-internal-79kc.onrender.com",
      githubLink: "https://github.com/umaidshahzad/CRM-INTERNAL",
      architectureNotes: "Leverages Redis Pub/Sub channels for cross-process WebSocket synchronization and an automated 30-second timer queue that triggers DeepSeek AI interception.",
      stats: [
        { label: "AI Intercept Timeout", value: "30 Sec" },
        { label: "Real-Time Sync", value: "Redis Pub/Sub" },
        { label: "Analytics", value: "Recharts Engine" }
      ]
    },
    {
      id: "rag-study-assistant",
      title: "AI Based RAG Study Assistant",
      subtitle: "Semantic Vector Search & Multi-Language Study Companion",
      category: "AI & Vector Search",
      featured: true,
      badge: "Vector AI Engine",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas Vector Search", "Gemini API", "JWT", "Web Speech API"],
      shortDescription: "Engineered a semantic RAG chat engine using gemini-embedding-001 and MongoDB Atlas Vector Search, converting PDF text into 768-dimensional coordinates queried via Cosine Similarity.",
      bulletPoints: [
        "Engineered a semantic RAG chat engine using gemini-embedding-001 and MongoDB Atlas Vector Search, converting PDF text into 768-dimensional coordinates queried via Cosine Similarity.",
        "Secured document-isolated workspaces using BSON pre-filtering inside the vector search pipeline; generated automated JSON study companions (Summaries, MCQs, Flashcards) cached in MongoDB.",
        "Designed a synchronized presentation slide player utilizing browser-native Web Speech API to stream spoken narrator scripts in multiple languages with native accents, alongside cascading collection deletes."
      ],
      githubLink: "https://github.com/umaidshahzad/RAG-LMS",
      architectureNotes: "Uses BSON workspace pre-filtering before Cosine Similarity ranking to prevent cross-tenant vector data leakage, generating flashcards and audio narration.",
      stats: [
        { label: "Embedding Dim", value: "768 Dim" },
        { label: "Vector Index", value: "MongoDB Atlas" },
        { label: "Narration", value: "Web Speech API" }
      ]
    },
    {
      id: "ai-chatbot-frontend",
      title: "AI Chatbot Frontend",
      subtitle: "Next.js Platform with Role-Based Portals",
      category: "Full Stack / AI Platform",
      featured: true,
      githubLink: "https://github.com/umaidshahzad/KICS-AI-CHATBOT",
      badge: "App Router",
      techStack: ["Next.js", "React.js", "NextAuth", "Tailwind CSS", "Recharts"],
      shortDescription: "A modern Next.js frontend built for an AI Chatbot platform featuring multiple tailored interfaces for Users, Admins, and Super Admins.",
      bulletPoints: [
        "Built tailored Next.js App Router flows for Standard Users, Admins, and Super Admins.",
        "Designed an Admin portal to manage workspaces, user access, and chatbot engagement analytics.",
        "Engineered a Super Admin control center for global platform overview, model configurations, API key management, and detailed revenue charts using Recharts.",
        "Configured secure role-based authentication using NextAuth."
      ],
      architectureNotes: "Uses mock API routes designed for seamless transition to live backends, configuring NextAuth and handling multipart/form-data for avatar uploads.",
      stats: [
        { label: "Roles Supported", value: "3 Roles" },
        { label: "Authentication", value: "NextAuth" },
        { label: "Routing", value: "App Router" }
      ]
    },
    {
      id: "university-admissions-portal",
      title: "University Admissions Portal",
      subtitle: "Role-Based Student Admission Lifecycle Platform",
      category: "Full Stack / Education",
      featured: true,
      githubLink: "https://github.com/umaidshahzad/Admission-Portal",
      badge: "Monolithic",
      techStack: ["React 19", "Vite 6", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose 9", "JWT", "Tailwind CSS 4", "Framer Motion"],
      shortDescription: "A full-stack web application designed to handle the entire student admission lifecycle, from registration to automated merit list generation.",
      bulletPoints: [
        "Developed a robust role-based portal supporting Applicants, Admissions Officers, Department Heads, and System Admins.",
        "Engineered backend REST APIs using Node.js, Express, and MongoDB Atlas with rigid Mongoose schema validation.",
        "Implemented an automated merit list engine that calculates composite scores based on academic history and entry test scores to seamlessly admit top students.",
        "Built a seamless frontend with React 19 and Framer Motion, utilizing a monolithic Vite middleware to eliminate CORS issues during development."
      ],
      architectureNotes: "Employs a monolithic architecture with Vite running directly within Express during development. Uses Multer MemoryStorage for multipart/form-data transcript uploads.",
      stats: [
        { label: "Auth Flow", value: "JWT + RBAC" },
        { label: "Architecture", value: "Monolithic" },
        { label: "Database", value: "MongoDB Atlas" }
      ]
    }
  ],

  skills: {
    languages: ["JavaScript", "C++", "Python", "HTML5", "CSS3"],
    frontend: ["React.js", "Tailwind CSS", "Next.js", "React Router DOM", "Axios"],
    backend: ["Node.js", "Express.js", "REST APIs", "MVC Architecture"],
    databasesTools: ["MongoDB Atlas", "MySQL", "Redis", "Socket.io", "Git", "GitHub", "Postman", "Cloudinary", "MongoDB Compass"],
    certifications: [
      {
        title: "Introduction to Front-End Development",
        issuer: "Meta / Coursera",
        date: "Jul 2025",
        verifyUrl: "https://coursera.org/verify/LTC0NZRIGLF9",
        code: "LTC0NZRIGLF9",
        description: "Verified non-credit course authorized by Meta establishing foundations in modern front-end engineering, HTML5/CSS3 layout structures, and component architecture."
      }
    ],
    concepts: [
      "Backend Architecture",
      "System Design Basics",
      "Auth & Authorization (JWT & Cookies)",
      "CRUD Operations",
      "Relational DB Design",
      "NoSQL Data Modeling (MERN)"
    ]
  },

  contact: {
    email: "umaidhamza0@gmail.com",
    phone: "+92 300 0231381",
    location: "Lahore, Pakistan",
    github: "https://github.com/umaidshahzad",
    linkedin: "https://www.linkedin.com/in/umaid-shahzad-6b083b347"
  }
};
