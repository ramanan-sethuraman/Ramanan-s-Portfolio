export const portfolioData = {
  personal: {
    name: "Ramanan S",
    title: "Full-Stack Developer",
    subtitle: "Enthusiastic learner with a passion for full stack development",
    email: "ramanans.master@gmail.com",
    phone: "+91 9080173002",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/ramanan-sethuraman",
    github: "https://github.com/ramanan-sethuraman",
    aboutBio1: "My name is Ramanan S, an Information Technology undergraduate at Agni College of Technology, Chennai (2024 – 2028). I am driven by a deep curiosity for building innovative software solutions, modern user experiences, and solving real-world challenges through technology.",
    aboutBio2: "Alongside web development, I am active in competitive hackathons such as Smart India Hackathon (SIH 2025), exploring AI/ML architectures, and learning cybersecurity fundamentals. I am fluent in English and Tamil (with conversational Japanese), and I thrive in collaborative, fast-paced technical workflows.",
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
      period: "June 2026 – July 2026",
      points: [
        "Completed hands-on cybersecurity training covering network reconnaissance, vulnerability assessments, and ethical hacking fundamentals.",
        "Conducted security audits, vulnerability scanning, and practical remediation assessments."
      ]
    },
    {
      role: "Full Stack Development Intern",
      company: "CodeAlpha",
      period: "Dec 2025 – Jan 2026",
      points: [
        "Developed full-stack web applications and completed comprehensive development tasks.",
        "Gained hands-on experience in modern web technologies, API integrations, and collaborative Git workflows."
      ]
    },
    {
      role: "AI/ML Intern",
      company: "InternPe",
      period: "Jul 2025 – Aug 2025",
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
      demoUrl: "https://github.com/ramanan-sethuraman",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "farming-platform",
      name: "Gamified Sustainable Farming Platform",
      headline: "Smart India Hackathon (SIH 2025)",
      category: "both",
      tags: ["coded", "designed"],
      shortDesc: "AR-powered gamified platform to promote sustainable farming through rewards, challenges, and community learning.",
      fullDesc: "Built for Smart India Hackathon (SIH 2025), this innovative platform combines ARCore visual guidance with game mechanics to incentivize farmers and communities to adopt sustainable ecological farming practices.",
      techStack: ["React.js", "Node.js", "Firebase", "Python", "ARCore"],
      features: [
        "Augmented Reality (ARCore) for crop disease detection and soil guidance",
        "Community learning quests, daily challenges, and eco-reward points",
        "Real-time weather and localized agricultural alerts via Python analytics",
        "Firebase real-time backend syncing community leaderboards"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "vehicle-leasing",
      name: "Vehicle Leasing & Land Utilization",
      headline: "IPD - Innovation & Product Development",
      category: "both",
      tags: ["coded", "designed"],
      shortDesc: "Mobile & web platform connecting landowners and vehicle owners for secure vehicle storage and land monetization.",
      fullDesc: "An end-to-end product designed for the IPD initiative. It solves urban vehicle parking and land under-utilization by matching landowners with verified vehicle owners seeking secure short or long-term parking spaces.",
      techStack: ["Figma", "React", "Node.js", "AI Fraud Detection", "GPS API"],
      features: [
        "Real-time GPS tracking and geofenced land boundary verification",
        "Digital smart contracts & automated recurring payment gateways",
        "Complete KYC onboarding with AI-assisted document fraud detection",
        "User rating, host management, and slot reservation dashboard"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman",
      repoUrl: "https://github.com/ramanan-sethuraman",
    },
    {
      id: "enersense-ai",
      name: "Enersense AI",
      headline: "Smart Energy Analytics & Optimization",
      category: "coded",
      tags: ["coded"],
      shortDesc: "AI-driven energy monitoring and analytics system designed to track consumption patterns and reduce energy waste.",
      fullDesc: "A machine learning and IoT data processing application that ingests energy metrics to forecast peak loads, pinpoint inefficiencies, and recommend automated power-saving interventions.",
      techStack: ["Python", "Machine Learning", "React", "Tailwind CSS"],
      features: [
        "Predictive power consumption time-series modeling",
        "Dynamic anomaly detection for energy surges",
        "Actionable carbon footprint reduction insights",
        "Interactive dashboard with visual trend graphs"
      ],
      demoUrl: "https://github.com/ramanan-sethuraman",
      repoUrl: "https://github.com/ramanan-sethuraman",
    }
  ]
};
