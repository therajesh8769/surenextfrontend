import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SERVICES, SERVICE_CATEGORIES } from '@/constants/services';
import content from '@/json/services.json';
import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? SERVICES : SERVICES.filter(s => s.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Helmet>

      <section className="services-hero">
        <div className="container">
          <AnimatedSection>
            <span className="services-hero__overline">{content.hero.overline}</span>
            <h1 className="services-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
            <p className="services-hero__desc">{content.hero.desc}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-filter">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`services-filter__btn ${activeCategory === cat ? 'services-filter__btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatedSection stagger>
            <div className="grid grid--3">
              {filtered.map((service) => (
                <AnimatedItem key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="service-card-link">
                    <Card icon={service.icon} hover>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.shortDesc}</CardDescription>
                      <span className="service-card__arrow">
                        {content.link_text} <ArrowUpRight size={14} />
                      </span>
                    </Card>
                  </Link>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2>{content.cta.title}</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
              {content.cta.desc}
            </p>
            <Button to="/contact" size="lg">{content.cta.btn}</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
