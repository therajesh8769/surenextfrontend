import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import './Portfolio.css';

const PROJECTS = [
  { title: 'TechFlow Platform', category: 'SaaS', desc: 'Enterprise SaaS platform serving 10,000+ users with real-time collaboration.', pattern: 'diagonal' },
  { title: 'MediCare App', category: 'Healthcare', desc: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers.', pattern: 'dots' },
  { title: 'ShopNest', category: 'Ecommerce', desc: 'Multi-vendor marketplace processing $2M+ monthly transactions.', pattern: 'arcs' },
  { title: 'LogiTrack', category: 'Logistics', desc: 'Real-time fleet management and route optimization for 500+ vehicles.', pattern: 'grid' },
  { title: 'EduLearn LMS', category: 'Education', desc: 'Learning management system used by 50+ institutions worldwide.', pattern: 'dots' },
  { title: 'FinanceAI', category: 'Finance', desc: 'AI-powered financial analytics dashboard for investment firms.', pattern: 'diagonal' },
];

export default function Portfolio() {
  return (
    <>
      <Helmet><title>Portfolio — Surenext | Our Work</title></Helmet>

      <section className="pf-hero">
        <div className="container">
          <AnimatedSection>
            <span className="pf-hero__overline">Portfolio</span>
            <h1 className="pf-hero__title">Selected <span className="text-accent">work</span></h1>
            <p className="pf-hero__desc">A selection of projects that showcase our expertise across industries — from early-stage MVPs to enterprise-scale platforms.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection stagger>
            <div className="pf-grid">
              {PROJECTS.map((p, i) => (
                <AnimatedItem key={p.title}>
                  <article className="pf-card">
                    <div className={`pf-card__cover pf-card__cover--${p.pattern}`}>
                      <span className="pf-card__index">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="pf-card__category">{p.category}</span>
                    <h3 className="pf-card__title">{p.title}</h3>
                    <p className="pf-card__desc">{p.desc}</p>
                  </article>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="pf-cta">
              <p className="pf-cta__text">Have a project in mind? We'd love to hear about it.</p>
              <Button to="/contact" size="lg">Start a Conversation</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
