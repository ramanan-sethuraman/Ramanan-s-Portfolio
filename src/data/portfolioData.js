export const portfolioData = {
  personal: {
    name: "Ramanan S",
    title: "Full-Stack Developer",
    subtitle: "Enthusiastic learner with a passion for full-stack developement",
    email: "ramanans.master@gmail.com",
    phone: "+91 9080173002",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/ramanan-sethuraman",
    github: "https://github.com/ramanan-sethuraman",
    aboutBio1: "My name is Ramanan S, an Information Technology undergraduate at Agni College of Technology, Chennai (2024 – 2028). I am driven by a deep curiosity for building innovative software solutions, modern user experiences, and solving real-world challenges through technology.",
    aboutBio2: "Alongside web development, I actively participate in hackathons including Smart India Hackathon (SIH 2025 - Pachil Yuva & SIH 2026 - Uyirva), build AI-powered platforms like Enersense AI and Respire, and implement full-stack ERP systems. Fluent in English and Tamil, I thrive in collaborative, fast-paced technical workflows.",
    objective: "I'm a motivated undergraduate student specializing in Information Technology, passionate about developing innovative software solutions and solving real-world problems through technology. Skilled in programming, problem-solving, analytical thinking, teamwork, and continuous learning. Seeking opportunities to apply technical knowledge, project experience, and IT skills in practical and professional environments while contributing to organizational growth and technological advancement."
  },

  services: [
    {
      id: "design",
      title: "DESIGN",
      icon: "Figma",
      description: "Crafting intuitive user interfaces and user experiences with Figma. Translating complex problem statements into clean, modern wireframes, interactive prototypes, and responsive web layouts."
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      icon: "Code",
      description: "Building scalable, end-to-end full-stack applications with React.js, Node.js, Express.js, MySQL, Firebase, and Python. Writing clean, maintainable code optimized for performance."
    },
    {
      id: "maintenance",
      title: "MAINTENANCE & SECURITY",
      icon: "ShieldCheck",
      description: "Continuous maintenance, bug fixes, performance tuning, and ethical vulnerability assessments to keep applications robust, secure, and up-to-date."
    }
  ],

  education: [
    {
      institution: "Agni College of Technology, Chennai",
      period: "2024 – 2028",
      degree: "B.Tech in Information Technology",
      score: "CGPA: 7.8 (pursuing)",
      details: "Focusing on data structures, full stack web systems, software engineering, and applied computer science."
    },
    {
      institution: "Nirmala Matriculation Higher Secondary School, Chidambaram",
      period: "2010 – 2024",
      degree: "Higher Secondary (HSC) & Secondary (SSLC)",
      score: "HSC: 70.5% (2024) | SSLC: 76.3% (2022)",
      details: "Solid foundation in mathematics, physics, and computer fundamentals."
    }
  ],

  internships: [
    {
      role: "Cybersecurity & Ethical Hacking Intern",
      company: "Tamizhan Skills (RISE 5.0 Program)",
      period: "June 2026 – July 2026 (Online-Remote)",
      points: [
        "Completed hands-on cybersecurity training covering network reconnaissance, vulnerability assessments, and ethical hacking fundamentals.",
        "Conducted security audits, vulnerability scanning, and practical remediation assessments."
      ]
    },
    {
      role: "Full Stack Development Intern",
      company: "CodeAlpha",
      period: "Dec 2025 – Jan 2026 (Online-Remote)",
      points: [
        "Developed full-stack web applications and completed comprehensive development tasks.",
        "Gained hands-on experience in modern web technologies, API integrations, and collaborative Git workflows."
      ]
    },
    {
      role: "AI/ML Intern",
      company: "InternPe",
      period: "Jul 2025 – Aug 2025 (Online-Remote)",
      points: [
        "Worked on AI/ML projects involving structured data analysis, preprocessing, and model development.",
        "Strengthened problem-solving, algorithmic research, and teamwork skills."
      ]
    }
  ],

  skills: {
    usingNow: [
      { name: "React.js", category: "Frontend" },
      { name: "JavaScript", category: "Language" },
      { name: "HTML5 / CSS3", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "Python", category: "Language" },
      { name: "Git / GitHub", category: "Version Control" }
    ],
    learning: [
      { name: "Cybersecurity & Ethical Hacking", category: "Security" },
      { name: "Machine Learning & AI", category: "AI/ML" },
      { name: "ARCore (Augmented Reality)", category: "Spatial" },
      { name: "Next.js", category: "Framework" }
    ],
    different: [
      { name: "UI/UX Design (Figma)", category: "Design" },
      { name: "Java", category: "Language" },
      { name: "Firebase", category: "BaaS / Cloud" },
      { name: "Video & Photo Editing", category: "Media" },
      { name: "Photoshop & After Effects", category: "Adobe Suite" },
      { name: "Canva & InShot", category: "Creative Tools" }
    ]
  },

  projects: [
    {
      id: "tenlea",
      name: "Tenlea",
      headline: "Vehicle Leasing & Land Utilization Platform",
      category: "both",
      tags: ["coded", "designed"],
      shortDesc: "Built a secure land and vehicle leasing platform with GPS, KYC, digital contracts, payments, and AI fraud detection.",
      fullDesc: "Tenlea is an innovative dual-sided mobility and real estate platform connecting landowners with vehicle owners seeking secure parking, storage, and land leasing. Built with automated KYC verification, geofenced GPS tracking, encrypted digital leasing agreements, and AI-assisted fraud detection.",
      techStack: ["React.js", "Node.js", "Express.js", "GPS API", "AI Fraud Detection", "Stripe/Razorpay"],
      features: [
        "Automated KYC onboarding with AI-assisted document validation",
        "Geofenced real-time GPS tracking and lot space management",
        "Tamper-proof digital lease contracts & automated milestone billing",
        "Interactive host reservation console with analytics"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman/Ramanan-s-Portfolio",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "enersense-ai",
      name: "Enersense AI",
      headline: "Intelligent Energy Management Platform",
      category: "coded",
      tags: ["coded", "ai/ml"],
      shortDesc: "Built an AI-powered platform for electricity bill estimation, meter OCR, consumption analysis, and energy optimization.",
      fullDesc: "Enersense AI is an intelligent sustainability and energy forecasting platform. It utilizes computer vision and OCR to extract live readings from utility meters, calculates predictive monthly bills, detects consumption anomalies, and prescribes automated power-reduction optimizations.",
      techStack: ["Python", "Machine Learning", "Computer Vision / OCR", "React.js", "Tailwind CSS"],
      features: [
        "Computer vision meter OCR for automated bill readings",
        "Time-series ML forecasting for peak-load and tariff estimation",
        "Real-time consumption anomaly alerts and waste detection",
        "Automated recommendations for energy savings and carbon reduction"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman/Ramanan-s-Portfolio",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "stockledger",
      name: "StockLedger",
      headline: "Manufacturing & Inventory Management ERP",
      category: "coded",
      tags: ["coded", "full-stack"],
      shortDesc: "Developed an ERP system for inventory, stock tracking, production, and supplier management.",
      fullDesc: "StockLedger is an industrial-grade ERP system built for small-to-medium manufacturing enterprises. It synchronizes raw material intake, multi-stage production lifecycles, real-time inventory reorder triggers, and supplier communication in one high-performance dashboard.",
      techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      features: [
        "Multi-warehouse inventory stock tracking with automated reorder levels",
        "End-to-end production stage tracking from raw material to finished goods",
        "Supplier lifecycle, purchase order generation, and invoice tracking",
        "Real-time analytics reports with exportable audit logs"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman/Ramanan-s-Portfolio",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "respire",
      name: "Respire",
      headline: "Urban Heat Intelligence Platform",
      category: "both",
      tags: ["coded", "designed"],
      shortDesc: "Built a climate intelligence platform to identify urban heat anomalies and thermal vulnerabilities across 200 GCC wards in Chennai.",
      fullDesc: "Respire is an urban geospatial intelligence platform that models thermal vulnerabilities across 200 Greater Chennai Corporation (GCC) wards. It integrates satellite thermal bands, ambient sensor feeds, and vegetative index data to detect localized heat islands and recommend micro-climate urban cooling interventions.",
      techStack: ["Python", "Geospatial Analytics", "React.js", "Leaflet/Mapbox", "Data Science"],
      features: [
        "Ward-level thermal vulnerability indexing across 200 GCC wards",
        "Urban Heat Island (UHI) anomaly detection with geospatial visualization",
        "Cool roof and tree canopy mitigation impact simulation",
        "Public health advisory indicators for vulnerable demographic zones"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman/Ramanan-s-Portfolio",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "pachil-yuva",
      name: "Pachil Yuva",
      headline: "Gamified Sustainable Farming Platform (SIH 2025)",
      category: "both",
      tags: ["coded", "designed"],
      shortDesc: "AR-powered gamified platform to promote sustainable farming through rewards, challenges, and community learning.",
      fullDesc: "Built for Smart India Hackathon (SIH 2025), Pachil Yuva integrates ARCore spatial guidance with gamification mechanics to encourage sustainable organic farming, soil rejuvenation, and peer-to-peer knowledge sharing among rural and youth farmers.",
      techStack: ["React.js", "Node.js", "Firebase", "Python", "ARCore"],
      features: [
        "ARCore augmented reality crop pest detection and soil guidance",
        "Eco-challenges, daily sustainable quests, and redeemable points",
        "Localized agro-weather alerts powered by Python prediction models",
        "Real-time leaderboards and community knowledge exchange"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman/Ramanan-s-Portfolio",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "uyirva",
      name: "Uyirva",
      headline: "Smart Farm-to-Market Platform (SIH 2026)",
      category: "both",
      tags: ["coded", "designed"],
      shortDesc: "Next-gen direct farm-to-market marketplace cutting middlemen with dynamic pricing and optimized logistics.",
      fullDesc: "Developed for Smart India Hackathon (SIH 2026), Uyirva is an intelligent agricultural trade platform connecting cultivators directly to wholesale buyers, institutions, and consumers. It features fair-pricing prediction algorithms, collective transportation aggregation, and digital escrow payouts.",
      techStack: ["React.js", "Node.js", "MySQL", "Python ML", "Figma"],
      features: [
        "Direct farmer-to-buyer bidding engine eliminating unneeded intermediaries",
        "Dynamic market price recommendation based on mandis trends",
        "Shared logistics routing reducing post-harvest transit losses",
        "Bilingual audio-visual interface tailored for regional farmers"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman/Ramanan-s-Portfolio",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "meetflow",
      name: "MeetFlow",
      headline: "Meeting Management System",
      category: "coded",
      tags: ["coded", "full-stack"],
      shortDesc: "Developed a full-stack meeting management system using MySQL, Node.js, Express.js, and React.",
      fullDesc: "MeetFlow is a centralized corporate and academic meeting management platform designed to eliminate scheduling conflicts. It features automated attendance tracking, room reservation management, and calendar synchronization with real-time slot availability.",
      techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      features: [
        "Intelligent calendar scheduling & conflict resolution",
        "Automated attendance tracking & participant notifications",
        "Physical & virtual room capacity management",
        "Role-based access control for organizers & attendees"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman/Ramanan-s-Portfolio",
      repoUrl: "https://github.com/ramanan-sethuraman",
    }
  ]
};
