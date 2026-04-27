// All personal data sourced from resume
import { MapPin, Mail, Calendar,Phone, Github, Linkedin ,User, Briefcase, Rocket, Wrench, Swords, GraduationCap} from "lucide-react";



export const personal = {
  name: 'Om Patel',
  role: 'SoftWare Engineer',
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
  story: `I'm Om Patel, a final-year B.Tech (IT) student at IIIT Vadodara with a strong foundation in Computer Science fundamentals and Data Structures & Algorithms. I have solved 1200+ problems across LeetCode and Codeforces, which has sharpened my problem-solving instincts and built a structured approach to tackling complex challenges. \n\n I'm passionate about backend engineering, distributed systems, and system design — I think deeply about scalability, fault tolerance, and how things fit together at a architectural level.\n\n Currently exploring into Machine Learning, Deep Learning, and Agentic AI — exploring LLMs, RAG pipelines, vector databases, fine-tuning, and prompt engineering — building toward designing intelligent, production-ready AI applications on top of a strong systems and backend engineering foundation.`,
  yearsOfExperience: '0.5',
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
  { label: 'Location', value: 'Ahmedabad, India', icon: MapPin },
  { label: 'Email', value: 'opatel272005@gmail.com', icon: Mail },
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
      'Developed and optimized RESTful APIs with improved response times and better error handling',
      'Constructed robust data validation pipelines integrated with middleware, which validated 100% of API requests, ensuringdata integrity and preventing malicious injections to the system and databases.',
      'Implemented JWT-based authentication and designed different web page views and access levels.',
    ],
  }
]

export const projects = [
  {
    id: 'proj1',
    title: 'NotiFlux',
    subtitle: 'Scalable Notification System',
    github: 'https://github.com/OmPatel272005star/NotiFlux',
    tech: ['React.js','Node.js', 'Kafka', 'Redis', 'BullMQ', 'Docker'],
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
    github: 'https://github.com/OmPatel272005star/Chat_app',
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
    github: 'https://github.com/OmPatel272005star/Ai-Saas-Application',
    tech: ['React', 'Express.js', 'Clerk', 'Neon DB', 'Gemini API'],
    color: '#14b8a6',
    points: [
      'Full-stack SaaS with Clerk auth and Neon PostgreSQL as database.',
      'Features: blog generation, image generation, background removal, resume review,Put your Imagination in Public',
      'Integrated Google Gemini and ClickDrop APIs.',
    ],
  },
]

export const skills = {
  languages: [
    { name: 'C++', color: '#004482', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'JavaScript', color: '#f0db4f', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', color: '#f89820', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  ],
  frameworks: [
    { name: 'React.js', color: '#20232a', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },

    { name: 'Pandas', color: '#150458', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', color: '#013243', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Matplotlib', color: '#11557c', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
  ],
  databases: [
    { name: 'MySQL', color: '#4479a1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', color: '#336791', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', color: '#47a248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', color: '#dc382d', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  ],
  devops: [
    { name: 'Docker', color: '#2496ed', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kafka', color: '#231f20', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'GitHub', color: '#181717', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    // { name: 'BullMQ', color: '#ef4444', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  ],
  concepts: [
    { name: 'DSA', color: '#1a1a2e', icon: null },
    { name: 'OOPS', color: '#2b2d42', icon: null },
    { name: 'DBMS', color: '#16213e', icon: null },
    { name: 'OS ', color: '#0f3460', icon: null },
    { name: 'CN', color: '#0f3460', icon: null },
  ],
}
export const codingProfiles = [
  {
    id: 'lc1',
    platform: 'LeetCode',
    handle: 'om_patel2005',
    rating: null,
    rank: 'Knight',
    color: '#f97316',
    url: 'https://leetcode.com/u/om_patel2005/',
  },
  {
    id: 'lc2',
    platform: 'LeetCode',
    handle: 'om272005patel',
    rating: null,
    rank: null,
    color: '#f97316',
    url: 'https://leetcode.com/u/om272005patel/',
  },
  {
    id: 'cf1',
    platform: 'Codeforces',
    handle: 'om_rajani',
    rating: null,
    rank: null,
    color: '#22c55e',
    url: 'https://codeforces.com/profile/om_rajani',
  },
]

export const achievements = [
  {
    id: 'ach1',
    title: 'Smart India Hackathon 2024',
    detail: 'Finalist — Problem Statement : Data Duplication Alert System',
    color: '#facc15',
    icon: '🏆',
    url: 'https://example.com/sih-certificate', // add link here
  },
  {
    id: 'ach2',
    title: 'LeetCode Knight',
    detail: 'Rating 1850 — Top competitive programmers',
    color: '#f97316',
    icon: '⚔️',
    url: 'https://leetcode.com/u/om_patel2005/', // your profile link
  }
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
  { label: 'About Me', path: '/', icon:User },
  { label: 'Experience', path: '/experience', icon:Briefcase },
  { label: 'Projects', path: '/projects', icon: Rocket},
  { label: 'Skills', path: '/skills', icon: Wrench },
  { label: 'Coding', path: '/coding', icon: Swords },
  { label: 'Education', path: '/education', icon:GraduationCap },
  { label: 'Contact', path: '/contact', icon: Mail },
]
