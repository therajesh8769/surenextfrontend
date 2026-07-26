import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { INDUSTRIES } from '@/constants/industries';
import './Industries.css';

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries — Surenext | Solutions Across Sectors</title>
        <meta name="description" content="Surenext serves startups, healthcare, education, ecommerce, manufacturing, logistics, and more with tailored technology solutions." />
      </Helmet>
      <section className="ind-hero"><div className="container"><AnimatedSection>
        <span className="ind-hero__overline">Industries</span>
        <h1 className="ind-hero__title">Technology for <span className="text-accent">every industry</span></h1>
        <p className="ind-hero__desc">We understand the unique challenges of each sector and deliver tailored solutions that drive real results.</p>
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
          <Button to="/contact" size="lg">Discuss Your Industry</Button>
        </div></AnimatedSection>
      </div></section>
    </>
  );
}
