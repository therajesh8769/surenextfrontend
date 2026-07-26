import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { TECHNOLOGIES } from '@/constants/industries';
import content from '@/json/technologies.json';
import './Technologies.css';

export default function Technologies() {
  const [active, setActive] = useState('Frontend');
  const categories = Object.keys(TECHNOLOGIES);
  return (
    <>
      <Helmet><title>Technologies — Surenext</title></Helmet>
      <section className="tech-hero"><div className="container"><AnimatedSection>
        <span className="tech-hero__overline">{content.hero.overline}</span>
        <h1 className="tech-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
        <p className="tech-hero__desc">{content.hero.desc}</p>
      </AnimatedSection></div></section>
      <section className="section"><div className="container">
        <div className="tech-tabs">
          {categories.map(cat => (
            <button key={cat} className={`tech-tabs__btn ${active === cat ? 'tech-tabs__btn--active' : ''}`} onClick={() => setActive(cat)}>{cat}</button>
          ))}
        </div>
        <AnimatedSection key={active}>
          <div className="tech-list">
            {TECHNOLOGIES[active].map(t => (
              <div key={t} className="tech-list__item">{t}</div>
            ))}
          </div>
        </AnimatedSection>
      </div></section>
    </>
  );
}
