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
