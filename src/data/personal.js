// All personal data sourced from resume
import { MapPin, Mail, Calendar } from "lucide-react";



export const personal = {
  name: 'Om Patel',
  role: 'Full Stack Developer',
  email: 'opatel272005@gmail.com',
  phone: '+91 9624477474',
  location: 'Ahmedabad, India',
  availability: 'Available for Work',
  cgpa: '8.35 / 10.00',
  college: 'IIIT Vadodara',
  degree: 'B.Tech in Information Technology',
  batch: '2022 – 2026',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  bio: 'CS undergrad passionate about backend systems, scalability, and clean architecture. Currantly Exploring Machine Learning &  Deep Learning. Focuses on building creative,innovative & efficient solutions.',
  story: `I'm a final-year IT student at IIIT Vadodara with a CGPA of 8.35. I've interned as a Web Developer at Virtual Coders Pvt. Ltd. where I built RESTful APIs, data validation pipelines, and JWT-based authentication systems.\n\nI love building things that scale — from Kafka-backed notification systems to real-time chat applications. Whether it's architecting microservices or shipping a full-stack SaaS product, I bring a system-design mindset to everything I build.`,
  yearsOfExperience: '2+',
}

export const whatIDo = [
  {
    id: 'wd1',
    icon: '⚡',
    color: '#f97316',
    title: 'Backend Systems',
    description: 'Scalable REST APIs, message queues (Kafka, Redis), microservices with Node.js & Express.',
  },
  {
    id: 'wd2',
    icon: '🖥',
    color: '#22c55e',
    title: 'Frontend Interfaces',
    description: 'React.js apps with clean state management, real-time features via Socket.io.',
  },
  {
    id: 'wd3',
    icon: '🐳',
    color: '#3b82f6',
    title: 'DevOps & Infra',
    description: 'Docker, containerised architectures, database design (MySQL, PostgreSQL, MongoDB).',
  },
  {
    id: 'wd4',
    icon: '🏆',
    color: '#facc15',
    title: 'Competitive Coding',
    description: 'LeetCode Knight (1850 rating), Codeforces Pupil (1255). Strong DSA foundations.',
  },
]

export const infoCards = [
  // { label: 'Experience', value: '6 month', icon:Calendar},
  { label: 'Location', value: 'Ahmedabad, India', icon:MapPin },
  { label: 'Email', value: 'opatel272005@gmail.com', icon: Mail},
]

export const experience = [
  {
    id: 'exp1',
    order: 1,
    color: '#facc15',
    role: 'Web Developer Intern',
    company: 'Virtual Coders Pvt. Ltd.',
    duration: 'May 2024 – July 2024',
    points: [
      'Developed and optimised RESTful APIs with improved response times and better error handling.',
      'Built robust data validation pipelines integrated with middleware — validated 100% of API requests.',
      'Implemented JWT-based authentication and designed different web page views and access levels.',
    ],
  },
  {
    id: 'exp2',
    order: 2,
    color: '#f97316',
    role: 'Committee Member – SSIP Cell',
    company: 'IIIT Vadodara',
    duration: 'Jan 2024 – Jan 2025',
    points: [
      'Contributed to planning and organising SSIP Cell workshop sessions.',
      'Coordinated and invited guest speakers for innovation and startup events.',
    ],
  },
  {
    id: 'exp3',
    order: 3,
    color: '#22c55e',
    role: 'Committee Member – Enigma Club',
    company: 'IIIT Vadodara',
    duration: 'Jul 2024 – Mar 2025',
    points: [
      'Organised club events and proposed interactive challenges for new students.',
      'Increased student participation through structured engagement activities.',
    ],
  },
]

export const projects = [
  {
    id: 'proj1',
    title: 'NotiFlux',
    subtitle: 'Scalable Notification System',
    github: 'https://github.com',
    tech: ['Node.js', 'Kafka', 'Redis', 'BullMQ', 'Docker'],
    color: '#ef4444',
    points: [
      'Production-grade system for Email, SMS, and WhatsApp delivery — 1,000+ concurrent notifications.',
      'High-throughput Apache Kafka + Redis-backed BullMQ pipeline for job queuing.',
      'Dockerised, fault-tolerant architecture with Kafka partitioning and automated retries.',
    ],
  },
  {
    id: 'proj2',
    title: 'PingWave',
    subtitle: 'Real-time Chat Application',
    github: 'https://github.com',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Redis'],
    color: '#3b82f6',
    points: [
      'Secure JWT authentication + Socket.io for real-time bi-directional communication.',
      'Redis Pub/Sub with Socket.IO adapter for horizontal scalability.',
      'Arcjet rate limiting (100 req/60s) for reliability and security.',
    ],
  },
  {
    id: 'proj3',
    title: 'AI SaaS Platform',
    subtitle: 'Full-Stack AI Application',
    github: 'https://github.com',
    tech: ['React', 'Express.js', 'Clerk', 'Neon DB', 'Gemini API'],
    color: '#14b8a6',
    points: [
      'Full-stack SaaS with Clerk auth and Neon PostgreSQL as database.',
      'Features: blog generation, image generation, background removal, resume review.',
      'Integrated Google Gemini and ClickDrop APIs.',
    ],
  },
]

export const skills = {
  languages: [
    { name: 'C++', color: '#3b82f6', icon: '💙' },
    { name: 'Java', color: '#ef4444', icon: '☕' },
    { name: 'JavaScript', color: '#facc15', icon: '🟨' },
    { name: 'TypeScript', color: '#3b82f6', icon: '🔷' },
  ],
  frameworks: [
    { name: 'React.js', color: '#14b8a6', icon: '⚛️' },
    { name: 'Node.js', color: '#22c55e', icon: '🟢' },
    { name: 'Express.js', color: '#111111', icon: '🚂' },
    { name: 'HTML/CSS', color: '#f97316', icon: '🌐' },
  ],
  databases: [
    { name: 'MySQL', color: '#3b82f6', icon: '🐬' },
    { name: 'PostgreSQL', color: '#3b82f6', icon: '🐘' },
    { name: 'MongoDB', color: '#22c55e', icon: '🍃' },
    { name: 'Redis', color: '#ef4444', icon: '🔴' },
  ],
  devops: [
    { name: 'Docker', color: '#3b82f6', icon: '🐳' },
    { name: 'Kafka', color: '#111111', icon: '📨' },
    { name: 'Git', color: '#f97316', icon: '🔀' },
    { name: 'BullMQ', color: '#ef4444', icon: '🐂' },
  ],
  concepts: [
    { name: 'DSA', color: '#facc15', icon: '🧮' },
    { name: 'OOPS', color: '#f97316', icon: '📦' },
    { name: 'DBMS', color: '#22c55e', icon: '🗄️' },
    { name: 'OS / CN', color: '#14b8a6', icon: '🖥️' },
  ],
}

export const codingProfiles = [
  {
    id: 'lc1',
    platform: 'LeetCode',
    handle: 'om_patel',
    rating: 1850,
    rank: 'Knight',
    color: '#f97316',
    url: 'https://leetcode.com',
  },
  {
    id: 'lc2',
    platform: 'LeetCode',
    handle: 'om_rajani',
    rating: null,
    rank: 'Knight',
    color: '#f97316',
    url: 'https://leetcode.com',
  },
  {
    id: 'cf1',
    platform: 'Codeforces',
    handle: 'om_rajani',
    rating: 1255,
    rank: 'Pupil',
    color: '#22c55e',
    url: 'https://codeforces.com',
  },
]

export const achievements = [
  {
    id: 'ach1',
    title: 'Smart India Hackathon 2024',
    detail: 'Finalist — Problem Statement 1659: Data Duplication Alert System',
    color: '#facc15',
    icon: '🏆',
  },
  {
    id: 'ach2',
    title: 'LeetCode Knight',
    detail: 'Rating 1850 — Top competitive programmers',
    color: '#f97316',
    icon: '⚔️',
  },
  {
    id: 'ach3',
    title: 'Codeforces Pupil',
    detail: 'Rating 1255 — Active competitive coder',
    color: '#22c55e',
    icon: '💻',
  },
]

export const education = [
  {
    id: 'edu1',
    institution: 'IIIT Vadodara',
    degree: 'B.Tech – Information Technology',
    duration: '2022 – 2026',
    score: 'CGPA: 8.35 / 10.00',
    color: '#facc15',
  },
  {
    id: 'edu2',
    institution: 'Aradhana Vidhya Vihar',
    degree: 'GSEB Class XII',
    duration: '2022',
    score: '85.75%',
    color: '#3b82f6',
  },
]

export const navLinks = [
  { label: 'About Me', path: '/', icon: '👤' },
  { label: 'Experience', path: '/experience', icon: '💼' },
  { label: 'Projects', path: '/projects', icon: '🚀' },
  { label: 'Skills', path: '/skills', icon: '🛠' },
  { label: 'Coding', path: '/coding', icon: '⚔️' },
  { label: 'Education', path: '/education', icon: '🎓' },
  { label: 'Contact', path: '/contact', icon: '📬' },
]
