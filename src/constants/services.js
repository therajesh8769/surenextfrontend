import {
  Code, Globe, Smartphone, Cloud, Brain, Bot, Zap, Database,
  Server, Layout, ShoppingCart, Search, Gauge, Wrench, Shield,
  Layers, Monitor, Settings, Cpu, PenTool
} from 'lucide-react';

export const SERVICES = [
  {
    slug: "custom-software-development",
    icon: Code,
    title: "Custom Software Development",
    shortDesc:
      "Software designed around your business, workflows, and long-term goals.",
    category: "Software",
    benefits: [
      "Built around your business",
      "Scalable architecture",
      "Modern technology stack",
      "Long-term maintainability"
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Docker"],
    process: [
      "Discovery & Planning",
      "Architecture & Design",
      "Agile Development",
      "Testing & Quality Assurance",
      "Deployment & Maintenance"
    ]
  },

  {
    slug: "web-applications",
    icon: Layout,
    title: "Web Applications",
    shortDesc:
      "Interactive web platforms, dashboards, portals, and internal tools built for performance and reliability.",
    category: "Software",
    benefits: [
      "Role-based access",
      "Real-time functionality",
      "Responsive across devices",
      "Built for scale"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    process: [
      "Requirements Gathering",
      "UI/UX & Wireframing",
      "Frontend & Backend Engineering",
      "Performance Optimization",
      "Launch & Support"
    ]
  },

  {
    slug: "website-development",
    icon: Globe,
    title: "Business Websites",
    shortDesc:
      "Modern websites that are fast, accessible, and designed to build trust with your customers.",
    category: "Software",
    benefits: [
      "Responsive design",
      "SEO-friendly",
      "Fast loading",
      "Easy content management"
    ],
    technologies: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    process: [
      "Brand Strategy & Planning",
      "Visual Design",
      "Development & Content",
      "SEO & Performance Audit",
      "Deployment"
    ]
  },

  {
    slug: "saas-development",
    icon: Layers,
    title: "SaaS Products",
    shortDesc:
      "From MVP to production, we build scalable SaaS platforms ready for growth.",
    category: "Software",
    benefits: [
      "Authentication",
      "Subscriptions",
      "Analytics",
      "Scalable infrastructure"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
    process: [
      "Product Strategy & MVP Definition",
      "System Architecture",
      "Feature Iteration & Development",
      "Security & Billing Integration",
      "Release & Scaling"
    ]
  },

  {
    slug: "ai-solutions",
    icon: Brain,
    title: "AI Solutions",
    shortDesc:
      "Practical AI solutions that automate work, improve decision-making, and create better user experiences.",
    category: "AI",
    benefits: [
      "Workflow automation",
      "AI-powered features",
      "LLM integration",
      "Business intelligence"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "LangChain", "FastAPI"],
    process: [
      "Use Case & Feasibility Analysis",
      "Data Preparation & Pipeline",
      "Model Selection & Fine-Tuning",
      "API & Workflow Integration",
      "Continuous Monitoring & Tuning"
    ]
  },

  {
    slug: "ai-assistants",
    icon: Bot,
    title: "AI Assistants & Chatbots",
    shortDesc:
      "Intelligent assistants that answer questions, automate support, and integrate with your existing systems.",
    category: "AI",
    benefits: [
      "Knowledge assistants",
      "Customer support",
      "Internal copilots",
      "Natural conversations"
    ],
    technologies: ["OpenAI API", "LangChain", "Python", "Pinecone", "Node.js", "React"],
    process: [
      "Requirement Analysis",
      "Knowledge Base Ingestion",
      "Agent & Prompt Engineering",
      "User Interface Integration",
      "Testing & Refinement"
    ]
  },

  {
    slug: "cloud-engineering",
    icon: Cloud,
    title: "Cloud Infrastructure",
    shortDesc:
      "Reliable cloud architecture, deployments, and infrastructure designed for security and scalability.",
    category: "Cloud",
    benefits: [
      "Cloud deployment",
      "Scalable hosting",
      "Monitoring",
      "Infrastructure automation"
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    process: [
      "Infrastructure Audit",
      "Architecture Design",
      "Migration & Deployment",
      "Security & Compliance",
      "Monitoring & Maintenance"
    ]
  },

  {
    slug: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design",
    shortDesc:
      "User experiences that are intuitive, accessible, and designed around real user needs.",
    category: "Design",
    benefits: [
      "User research",
      "Wireframes",
      "Design systems",
      "Interactive prototypes"
    ],
    technologies: ["Figma", "Design Systems", "Wireframing", "Prototyping", "User Testing"],
    process: [
      "User Research & Personas",
      "Wireframing & Information Architecture",
      "UI Design & Component Libraries",
      "Interactive Prototyping",
      "Developer Handoff"
    ]
  },

  {
    slug: "integrations",
    icon: Zap,
    title: "Integrations & Automation",
    shortDesc:
      "Connect your software, automate repetitive work, and simplify business operations.",
    category: "Automation",
    benefits: [
      "API integrations",
      "Workflow automation",
      "Third-party services",
      "Business process optimization"
    ],
    technologies: ["REST APIs", "GraphQL", "Zapier", "Webhooks", "Node.js", "Python"],
    process: [
      "Process & API Mapping",
      "Integration Architecture",
      "Automation Development",
      "End-to-End Testing",
      "Deployment & Monitoring"
    ]
  },

  {
    slug: "maintenance-support",
    icon: Wrench,
    title: "Support & Maintenance",
    shortDesc:
      "Ongoing improvements, security updates, monitoring, and technical support after launch.",
    category: "Support",
    benefits: [
      "Bug fixes",
      "Performance improvements",
      "Security updates",
      "Continuous support"
    ],
    technologies: ["Monitoring Tools", "Git", "CI/CD", "Cloudflare", "Docker"],
    process: [
      "System Audit & SLA Setup",
      "Proactive Health Monitoring",
      "Security Patching & Updates",
      "Issue Resolution",
      "Ongoing Optimization"
    ]
  }
];

export const SERVICE_CATEGORIES = [
  "All",
  "Software",
  "AI",
  "Cloud",
  "Design",
  "Automation",
  "Support"
];
