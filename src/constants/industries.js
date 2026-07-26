import {
  Factory, GraduationCap, HeartPulse, ShoppingBag, Truck,
  Building2, Rocket, Briefcase, Landmark, Stethoscope
} from 'lucide-react';

export const INDUSTRIES = [
  { title: 'Startups', icon: Rocket, description: 'MVP development, rapid prototyping, and scalable architecture for fast-growing startups.' },
  { title: 'Healthcare', icon: HeartPulse, description: 'HIPAA-compliant healthcare solutions, telemedicine platforms, and patient management systems.' },
  { title: 'Education', icon: GraduationCap, description: 'Learning management systems, EdTech platforms, and virtual classroom solutions.' },
  { title: 'Ecommerce', icon: ShoppingBag, description: 'Custom online stores, marketplace platforms, and omnichannel retail solutions.' },
  { title: 'Manufacturing', icon: Factory, description: 'IoT integration, supply chain management, and smart manufacturing solutions.' },
  { title: 'Logistics', icon: Truck, description: 'Fleet management, route optimization, and real-time tracking solutions.' },
  { title: 'Enterprise', icon: Building2, description: 'Enterprise resource planning, business intelligence, and digital transformation.' },
  { title: 'Agencies', icon: Briefcase, description: 'White-label solutions, project management tools, and client portals.' },
  { title: 'Finance', icon: Landmark, description: 'FinTech solutions, payment processing, and regulatory compliance systems.' },
  { title: 'Wellness', icon: Stethoscope, description: 'Wellness apps, fitness platforms, and mental health solutions.' },
];

export const TECHNOLOGIES = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'Python', 'Django', 'Go', 'NestJS'],
  Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  Database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
  Cloud: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'DigitalOcean'],
  DevOps: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Jenkins'],
  AI: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face'],
};
