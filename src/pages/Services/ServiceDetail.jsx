import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import { SERVICES } from '@/constants/services';
import content from '@/json/service-detail.json';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>{content.not_found.title}</h2>
        <Button to="/services" variant="outline" style={{ marginTop: 'var(--space-4)' }}>{content.not_found.btn}</Button>
      </div>
    );
  }

  const Icon = service.icon;
  const technologies = service.technologies || [];
  const process = service.process || [];
  const benefits = service.benefits || [];

  const faqs = [
    { 
      question: content.faqs_templates[0]?.q?.replace('{title}', service.title) || '', 
      answer: (content.faqs_templates[0]?.a || '')
        .replace('{techs}', technologies.length > 0 ? technologies.join(', ') : 'modern industry-standard technologies')
        .replace('{title_lower}', service.title.toLowerCase()) 
    },
    { 
      question: content.faqs_templates[1]?.q || '', 
      answer: content.faqs_templates[1]?.a || '' 
    },
    { 
      question: content.faqs_templates[2]?.q || '', 
      answer: content.faqs_templates[2]?.a || '' 
    },
  ];

  return (
    <>
      <Helmet>
        <title>{service.title} — Surenext</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      <section className="sd-hero">
        <div className="container">
          <Link to="/services" className="sd-hero__back"><ArrowLeft size={16} /> {content.hero.back_link}</Link>
          <AnimatedSection>
            <div className="sd-hero__icon">{Icon && <Icon size={32} />}</div>
            <h1 className="sd-hero__title">{service.title}</h1>
            <p className="sd-hero__desc">{service.shortDesc}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="section">
          <div className="container">
            <AnimatedSection>
              <SectionHeading overline={content.sections.benefits.overline} title={content.sections.benefits.title} align="left" />
            </AnimatedSection>
            <AnimatedSection stagger>
              <div className="sd-benefits">
                {benefits.map((b) => (
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
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <AnimatedSection>
              <SectionHeading overline={content.sections.technologies.overline} title={content.sections.technologies.title} align="left" />
            </AnimatedSection>
            <AnimatedSection>
              <div className="sd-techs">
                {technologies.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Process */}
      {process.length > 0 && (
        <section className="section">
          <div className="container">
            <AnimatedSection>
              <SectionHeading overline={content.sections.process.overline} title={content.sections.process.title} align="left" />
            </AnimatedSection>
            <AnimatedSection stagger>
              <div className="sd-process">
                {process.map((step, i) => (
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
      )}

      {/* FAQ */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading align="center" overline={content.sections.faq.overline} title={content.sections.faq.title} />
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
            <h2>{content.sections.cta.title_start}{service.title}{content.sections.cta.title_end}</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
              {content.sections.cta.desc}
            </p>
            <Button to="/contact" size="lg" iconRight={ArrowRight}>{content.sections.cta.btn}</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
