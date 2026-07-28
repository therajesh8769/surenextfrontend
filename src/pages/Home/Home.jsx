import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Quote,
  Zap, Shield, Users, Clock
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import CodePanel from '@/components/ui/CodePanel';
import { SERVICES } from '@/constants/services';
import { STATS, FAQ_ITEMS, PROCESS_STEPS } from '@/constants/company';
import { INDUSTRIES } from '@/constants/industries';
import { TECHNOLOGIES } from '@/constants/industries';
import { useCounter } from '@/hooks/useAnimations';
import content from '@/json/home.json';
import './Home.css';

const WHY_US_ICONS = [Zap, Shield, Users, Clock];
const WHY_US_FEATURES = content.why_us.features.map((f, i) => ({ ...f, icon: WHY_US_ICONS[i] }));

function StatItem({ value, label }) {
  const numericPart = value.replace(/[^0-9]/g, '');
  const suffix = value.replace(/[0-9]/g, '');
  const [ref, count] = useCounter(numericPart, 1500);
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-item__value">{count}{suffix}</span>
      <span className="stat-item__label">{label}</span>
    </div>
  );
}

export default function Home() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <motion.span
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {content.hero.eyebrow}
            </motion.span>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span> {content.hero.title_end}
            </motion.h1>

            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.hero.subtitle}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button to="/contact" size="lg" iconRight={ArrowRight}>
                {content.hero.actions.primary}
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                {content.hero.actions.secondary}
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <CodePanel />
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      {/* <section className="section section--alt">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== FEATURED SERVICES ===== */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline={content.services.overline}
              title={content.services.title}
              description={content.services.description}
            />
          </AnimatedSection>
          <AnimatedSection stagger animation="fadeUp">
            <div className="grid grid--3 scroll-mobile">
              {featuredServices.map((service) => (
                <AnimatedItem key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="service-card-link">
                    <Card icon={service.icon} hover>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.shortDesc}</CardDescription>
                      <span className="service-card__arrow">
                        {content.services.link_text} <ArrowUpRight size={14} />
                      </span>
                    </Card>
                  </Link>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="section__cta">
              <Button to="/services" variant="outline" iconRight={ArrowRight}>{content.services.cta}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline={content.why_us.overline}
              title={content.why_us.title}
              description={content.why_us.description}
            />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid--4">
              {WHY_US_FEATURES.map((item) => (
                <AnimatedItem key={item.title}>
                  <Card icon={item.icon} variant="bordered">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline={content.process.overline}
              title={content.process.title}
              description={content.process.description}
            />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="process-grid">
              {PROCESS_STEPS.map((step, i) => (
                <AnimatedItem key={step.step}>
                  <div className="process-card">
                    <span className="process-card__step">{step.step}</span>
                    <h3 className="process-card__title">{step.title}</h3>
                    <p className="process-card__desc">{step.description}</p>
                    {i < PROCESS_STEPS.length - 1 && <div className="process-card__connector" />}
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline={content.industries.overline}
              title={content.industries.title}
              description={content.industries.description}
            />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="industries-grid">
              {INDUSTRIES.slice(0, 8).map((ind) => (
                <AnimatedItem key={ind.title}>
                  <div className="industry-card">
                    <div className="industry-card__icon"><ind.icon size={22} /></div>
                    <h4 className="industry-card__title">{ind.title}</h4>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="section__cta">
              <Button to="/industries" variant="outline" iconRight={ArrowRight}>{content.industries.cta}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline={content.tech_stack.overline}
              title={content.tech_stack.title}
              description={content.tech_stack.description}
            />
          </AnimatedSection>
          <AnimatedSection>
            <div className="tech-grid scroll-mobile">
              {TECHNOLOGIES.map(({ category, items }) => (
                <div key={category} className="tech-category">
                  <h4 className="tech-category__title">{category}</h4>
                  <div className="tech-category__tags">
                    {items.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      {/* <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline={content.testimonials.overline}
              title={content.testimonials.title}
              description={content.testimonials.description}
            />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid--3">
              {TESTIMONIALS.map((t, i) => (
                <AnimatedItem key={i}>
                  <div className="testimonial-card">
                    <Quote size={24} className="testimonial-card__quote" />
                    <p className="testimonial-card__text">{t.quote}</p>
                    <div className="testimonial-card__author">
                      <div className="testimonial-card__avatar">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="testimonial-card__name">{t.name}</div>
                        <div className="testimonial-card__role">{t.role}, {t.company}</div>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* ===== FAQ ===== */}
      <section className="section">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading
              align="center"
              overline={content.faq.overline}
              title={content.faq.title}
              description={content.faq.description}
            />
          </AnimatedSection>
          <AnimatedSection>
            <Accordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
