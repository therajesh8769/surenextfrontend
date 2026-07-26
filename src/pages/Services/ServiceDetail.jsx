import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import { SERVICES } from '@/constants/services';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Button to="/services" variant="outline" style={{ marginTop: 'var(--space-4)' }}>Back to Services</Button>
      </div>
    );
  }

  const Icon = service.icon;
  const faqs = [
    { question: `What technologies do you use for ${service.title}?`, answer: `We primarily use ${service.technologies.join(', ')} for ${service.title.toLowerCase()} projects, selecting the best tools based on your specific requirements.` },
    { question: 'How long does a typical project take?', answer: 'Project timelines vary based on complexity and scope. During our discovery phase, we provide a detailed timeline and milestone plan tailored to your project.' },
    { question: 'Do you provide post-launch support?', answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally after launch.' },
  ];

  return (
    <>
      <Helmet>
        <title>{service.title} — Surenext</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      <section className="sd-hero">
        <div className="container">
          <Link to="/services" className="sd-hero__back"><ArrowLeft size={16} /> All Services</Link>
          <AnimatedSection>
            <div className="sd-hero__icon"><Icon size={32} /></div>
            <h1 className="sd-hero__title">{service.title}</h1>
            <p className="sd-hero__desc">{service.shortDesc}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading overline="Benefits" title="Why choose this service" align="left" />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="sd-benefits">
              {service.benefits.map((b) => (
                <AnimatedItem key={b}>
                  <div className="sd-benefit">
                    <CheckCircle2 size={20} className="sd-benefit__icon" />
                    <span>{b}</span>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading overline="Technologies" title="Tools & frameworks we use" align="left" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="sd-techs">
              {service.technologies.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading overline="Process" title="Our development process" align="left" />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="sd-process">
              {service.process.map((step, i) => (
                <AnimatedItem key={step}>
                  <div className="sd-process__step">
                    <span className="sd-process__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="sd-process__label">{step}</span>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading align="center" overline="FAQ" title="Common questions" />
          </AnimatedSection>
          <AnimatedSection>
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2>Ready to get started with {service.title}?</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
              Let's discuss your project and build something amazing together.
            </p>
            <Button to="/contact" size="lg" iconRight={ArrowRight}>Start Your Project</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
