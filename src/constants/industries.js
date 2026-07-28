import {
  Factory, GraduationCap, HeartPulse, ShoppingBag, Truck,
  Building2, Rocket, Briefcase, Landmark, Stethoscope
} from 'lucide-react';

export const INDUSTRIES = [
  {
    title: "Startups",
    icon: Rocket,
    description:
      "From MVPs to scalable products, we help startups build quickly, validate ideas, and grow with confidence."
  },

  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Learning platforms, student portals, online courses, and educational tools designed for modern learning experiences."
  },

  {
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Digital healthcare platforms, appointment systems, patient portals, and healthcare management solutions."
  },

  {
    title: "Ecommerce",
    icon: ShoppingBag,
    description:
      "Modern ecommerce experiences with secure payments, inventory management, customer portals, and analytics."
  },

  {
    title: "Manufacturing",
    icon: Factory,
    description:
      "Internal software, inventory systems, production workflows, reporting dashboards, and operational tools."
  },

  {
    title: "Logistics",
    icon: Truck,
    description:
      "Fleet management, shipment tracking, logistics dashboards, and operational software that improves visibility."
  },

  {
    title: "Finance",
    icon: Landmark,
    description:
      "Financial dashboards, reporting platforms, payment integrations, and secure business applications."
  },

  {
    title: "Professional Services",
    icon: Briefcase,
    description:
      "Custom business software, client portals, workflow automation, and internal tools for service-based businesses."
  }
];

export const TECHNOLOGIES = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ]
  },

  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "NestJS"
    ]
  },

  {
    category: "Database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis"
    ]
  },

  {
    category: "Cloud",
    items: [
      "AWS",
      "Google Cloud",
      "Vercel",
      "Docker"
    ]
  },

  {
    category: "AI",
    items: [
      "OpenAI",
      "LangChain",
      "Vector Databases",
      "Python"
    ]
  }
];
