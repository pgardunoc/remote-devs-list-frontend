export interface Developer {
  id: string
  name: string
  title: string
  location: string
  hourlyRate: number
  avatar: string
  skills: string[]
  experience: number
  availability: "available" | "busy" | "unavailable"
  bio: string
  email: string
  github?: string
  linkedin?: string
  portfolio?: string
  languages: string[]
  timezone: string
  projects: {
    name: string
    description: string
    tech: string[]
  }[]
}

// Mock data - ready to be replaced with API calls
export const mockDevelopers: Developer[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    hourlyRate: 120,
    avatar: "/professional-woman-developer.png",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    experience: 8,
    availability: "available",
    bio: "Passionate full-stack developer with 8 years of experience building scalable web applications. Specialized in React, Node.js, and cloud infrastructure.",
    email: "sarah.chen@example.com",
    github: "sarahchen",
    linkedin: "sarahchen",
    portfolio: "https://sarahchen.dev",
    languages: ["English", "Mandarin"],
    timezone: "PST",
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a scalable e-commerce platform handling 100k+ daily users",
        tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      },
      {
        name: "Real-time Analytics Dashboard",
        description: "Developed real-time analytics dashboard for SaaS product",
        tech: ["React", "WebSocket", "D3.js", "MongoDB"],
      },
    ],
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Backend Engineer",
    location: "Austin, TX",
    hourlyRate: 110,
    avatar: "/professional-man-developer.png",
    skills: ["Python", "Django", "Docker", "Kubernetes", "GCP"],
    experience: 6,
    availability: "available",
    bio: "Backend specialist focused on building robust APIs and microservices. Expert in Python, Django, and containerization technologies.",
    email: "marcus.j@example.com",
    github: "marcusj",
    linkedin: "marcusjohnson",
    languages: ["English", "Spanish"],
    timezone: "CST",
    projects: [
      {
        name: "Microservices Architecture",
        description: "Designed and implemented microservices for fintech startup",
        tech: ["Python", "Docker", "Kubernetes", "RabbitMQ"],
      },
    ],
  },
  {
    id: "3",
    name: "Aisha Patel",
    title: "Frontend Developer",
    location: "London, UK",
    hourlyRate: 95,
    avatar: "/professional-woman-frontend-developer.jpg",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
    experience: 5,
    availability: "busy",
    bio: "Creative frontend developer with a keen eye for design and user experience. Specialized in modern JavaScript frameworks and responsive design.",
    email: "aisha.patel@example.com",
    github: "aishapatel",
    portfolio: "https://aishapatel.com",
    languages: ["English", "Hindi", "Gujarati"],
    timezone: "GMT",
    projects: [
      {
        name: "Design System",
        description: "Created comprehensive design system for enterprise application",
        tech: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
      },
    ],
  },
  {
    id: "4",
    name: "Dmitri Volkov",
    title: "DevOps Engineer",
    location: "Berlin, Germany",
    hourlyRate: 115,
    avatar: "/professional-devops-engineer.png",
    skills: ["AWS", "Terraform", "Jenkins", "Docker", "Kubernetes"],
    experience: 7,
    availability: "available",
    bio: "DevOps engineer with extensive experience in cloud infrastructure and CI/CD pipelines. Passionate about automation and infrastructure as code.",
    email: "dmitri.v@example.com",
    github: "dmitrivolkov",
    linkedin: "dmitrivolkov",
    languages: ["English", "German", "Russian"],
    timezone: "CET",
    projects: [
      {
        name: "Cloud Migration",
        description: "Led cloud migration project for enterprise client",
        tech: ["AWS", "Terraform", "Docker", "Kubernetes"],
      },
    ],
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    title: "Mobile Developer",
    location: "Barcelona, Spain",
    hourlyRate: 100,
    avatar: "/professional-woman-mobile-developer.jpg",
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    experience: 4,
    availability: "available",
    bio: "Mobile developer specializing in cross-platform applications. Experience with both native and React Native development.",
    email: "elena.r@example.com",
    github: "elenarodriguez",
    portfolio: "https://elenarodriguez.dev",
    languages: ["English", "Spanish", "Catalan"],
    timezone: "CET",
    projects: [
      {
        name: "Fitness Tracking App",
        description: "Built cross-platform fitness app with 50k+ downloads",
        tech: ["React Native", "Firebase", "GraphQL"],
      },
    ],
  },
  {
    id: "6",
    name: "James Kim",
    title: "Data Engineer",
    location: "Seoul, South Korea",
    hourlyRate: 105,
    avatar: "/professional-man-data-engineer.jpg",
    skills: ["Python", "Apache Spark", "Airflow", "BigQuery", "Snowflake"],
    experience: 6,
    availability: "unavailable",
    bio: "Data engineer focused on building scalable data pipelines and analytics infrastructure. Expert in big data technologies.",
    email: "james.kim@example.com",
    github: "jameskim",
    linkedin: "jameskim",
    languages: ["English", "Korean"],
    timezone: "KST",
    projects: [
      {
        name: "Data Warehouse",
        description: "Designed data warehouse processing 10TB+ daily",
        tech: ["Python", "Apache Spark", "BigQuery", "Airflow"],
      },
    ],
  },
  {
    id: "7",
    name: "Olivia Martinez",
    title: "UI/UX Developer",
    location: "Toronto, Canada",
    hourlyRate: 90,
    avatar: "/professional-woman-ui-ux-developer.jpg",
    skills: ["Figma", "React", "CSS", "Animation", "Accessibility"],
    experience: 5,
    availability: "available",
    bio: "UI/UX developer bridging design and development. Passionate about creating accessible and delightful user experiences.",
    email: "olivia.m@example.com",
    portfolio: "https://oliviamartinez.design",
    languages: ["English", "French"],
    timezone: "EST",
    projects: [
      {
        name: "Accessible Component Library",
        description: "Created WCAG 2.1 AA compliant component library",
        tech: ["React", "TypeScript", "CSS", "Storybook"],
      },
    ],
  },
  {
    id: "8",
    name: "Ahmed Hassan",
    title: "Security Engineer",
    location: "Dubai, UAE",
    hourlyRate: 125,
    avatar: "/professional-man-security-engineer.jpg",
    skills: ["Penetration Testing", "Python", "Security Audits", "AWS Security", "Compliance"],
    experience: 9,
    availability: "busy",
    bio: "Security engineer with extensive experience in application security and compliance. Specialized in cloud security and penetration testing.",
    email: "ahmed.h@example.com",
    github: "ahmedhassan",
    linkedin: "ahmedhassan",
    languages: ["English", "Arabic"],
    timezone: "GST",
    projects: [
      {
        name: "Security Framework",
        description: "Implemented security framework for financial services",
        tech: ["Python", "AWS", "Terraform", "SIEM"],
      },
    ],
  },
  {
    id: "9",
    name: "Sophie Laurent",
    title: "Full Stack Developer",
    location: "Paris, France",
    hourlyRate: 108,
    avatar: "/professional-woman-fullstack-developer.jpg",
    skills: ["Vue.js", "Node.js", "MongoDB", "Express", "Docker"],
    experience: 5,
    availability: "available",
    bio: "Full-stack developer with a focus on modern JavaScript frameworks. Experience building scalable web applications from concept to deployment.",
    email: "sophie.l@example.com",
    github: "sophielaurent",
    portfolio: "https://sophielaurent.fr",
    languages: ["English", "French"],
    timezone: "CET",
    projects: [
      {
        name: "Social Platform",
        description: "Built social networking platform with real-time features",
        tech: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
      },
    ],
  },
  {
    id: "10",
    name: "Raj Sharma",
    title: "Machine Learning Engineer",
    location: "Bangalore, India",
    hourlyRate: 85,
    avatar: "/professional-man-ml-engineer.jpg",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "AWS SageMaker"],
    experience: 4,
    availability: "available",
    bio: "ML engineer passionate about building intelligent systems. Experience with deep learning, NLP, and deploying ML models at scale.",
    email: "raj.sharma@example.com",
    github: "rajsharma",
    linkedin: "rajsharma",
    languages: ["English", "Hindi", "Tamil"],
    timezone: "IST",
    projects: [
      {
        name: "Recommendation Engine",
        description: "Built ML-powered recommendation system",
        tech: ["Python", "TensorFlow", "AWS SageMaker", "FastAPI"],
      },
    ],
  },
  {
    id: "11",
    name: "Isabella Costa",
    title: "Frontend Developer",
    location: "São Paulo, Brazil",
    hourlyRate: 80,
    avatar: "/professional-woman-frontend-developer.jpg",
    skills: ["React", "Next.js", "TypeScript", "GraphQL", "Styled Components"],
    experience: 4,
    availability: "available",
    bio: "Frontend developer focused on performance and user experience. Specialized in React ecosystem and modern web technologies.",
    email: "isabella.c@example.com",
    github: "isabellacosta",
    languages: ["English", "Portuguese", "Spanish"],
    timezone: "BRT",
    projects: [
      {
        name: "E-learning Platform",
        description: "Developed interactive e-learning platform",
        tech: ["React", "Next.js", "GraphQL", "TypeScript"],
      },
    ],
  },
  {
    id: "12",
    name: "Liam O'Brien",
    title: "Backend Developer",
    location: "Dublin, Ireland",
    hourlyRate: 98,
    avatar: "/professional-backend-developer.png",
    skills: ["Go", "PostgreSQL", "Redis", "gRPC", "Microservices"],
    experience: 6,
    availability: "busy",
    bio: "Backend developer specializing in high-performance systems. Expert in Go and distributed systems architecture.",
    email: "liam.o@example.com",
    github: "liamobrien",
    linkedin: "liamobrien",
    languages: ["English", "Irish"],
    timezone: "GMT",
    projects: [
      {
        name: "Payment Gateway",
        description: "Built high-throughput payment processing system",
        tech: ["Go", "PostgreSQL", "Redis", "gRPC"],
      },
    ],
  },
]

// Function to simulate API call - replace with actual API call later
export async function fetchDevelopers(
  page = 1,
  perPage = 9,
): Promise<{
  developers: Developer[]
  total: number
  page: number
  perPage: number
  totalPages: number
}> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const start = (page - 1) * perPage
  const end = start + perPage
  const developers = mockDevelopers.slice(start, end)

  return {
    developers,
    total: mockDevelopers.length,
    page,
    perPage,
    totalPages: Math.ceil(mockDevelopers.length / perPage),
  }
}

// Function to simulate fetching single developer - replace with actual API call later
export async function fetchDeveloper(id: string): Promise<Developer | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return mockDevelopers.find((dev) => dev.id === id) || null
}
