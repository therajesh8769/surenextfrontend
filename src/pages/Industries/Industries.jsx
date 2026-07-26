import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { INDUSTRIES } from '@/constants/industries';
import content from '@/json/industries.json';
import './Industries.css';

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Helmet>
      <section className="ind-hero"><div className="container"><AnimatedSection>
        <span className="ind-hero__overline">{content.hero.overline}</span>
        <h1 className="ind-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
        <p className="ind-hero__desc">{content.hero.desc}</p>
      </AnimatedSection></div></section>
      <section className="section"><div className="container">
        <AnimatedSection stagger>
          <div className="ind-grid">
            {INDUSTRIES.map((ind) => (
              <AnimatedItem key={ind.title}>
                <div className="ind-card">
                  <div className="ind-card__icon"><ind.icon size={28} /></div>
                  <h3 className="ind-card__title">{ind.title}</h3>
                  <p className="ind-card__desc">{ind.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection><div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
          <Button to="/contact" size="lg">{content.cta}</Button>
        </div></AnimatedSection>
      </div></section>
    </>
  );
}
