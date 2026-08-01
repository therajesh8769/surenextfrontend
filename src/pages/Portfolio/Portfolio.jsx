import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import content from '@/json/portfolio.json';
import './Portfolio.css';

const PROJECTS = content.projects;

export default function Portfolio() {
  return (
    <>
      <Helmet><title>{content.meta.title}</title></Helmet>

      <section className="pf-hero">
        <div className="container">
          <AnimatedSection>
            <span className="pf-hero__overline">{content.hero.overline}</span>
            <h1 className="pf-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
            <p className="pf-hero__desc">{content.hero.desc}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection stagger>
            <div className="pf-grid">
              {PROJECTS.map((p) => (
                <AnimatedItem key={p.title}>
                  <a
                    href={p.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-card-link"
                    title={`Visit ${p.title}`}
                  >
                    <article className="pf-card">
                      <div className="pf-card__cover">
                        {p.image && (
                          <img src={p.image} alt={p.title} className="pf-card__img" loading="lazy" />
                        )}
                      </div>
                      <div className="pf-card__content">
                        <div className="pf-card__header">
                          <span className="pf-card__category">{p.category}</span>
                          <ArrowUpRight size={18} className="pf-card__arrow" />
                        </div>
                        <h3 className="pf-card__title">{p.title}</h3>
                        <p className="pf-card__desc">{p.desc}</p>
                      </div>
                    </article>
                  </a>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="pf-cta">
              <p className="pf-cta__text">{content.cta.text}</p>
              <Button to="/contact" size="lg">{content.cta.btn}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
