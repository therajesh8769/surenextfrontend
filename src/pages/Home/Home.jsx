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
import { STATS, TESTIMONIALS, FAQ_ITEMS, PROCESS_STEPS } from '@/constants/company';
import { INDUSTRIES } from '@/constants/industries';
import { TECHNOLOGIES } from '@/constants/industries';
import { useCounter } from '@/hooks/useAnimations';
import './Home.css';

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
        <title>Surenext — Next-Gen Technology Solutions | Custom Software, AI & Cloud</title>
        <meta name="description" content="Surenext delivers reliable next-generation technology solutions. Custom software development, AI, cloud solutions, and digital transformation for businesses worldwide." />
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
              Software &amp; AI product studio
            </motion.span>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We build the software behind <span className="text-accent">next‑stage</span> companies.
            </motion.h1>

            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Surenext is a small studio of senior engineers and designers who ship custom
              software, AI products, and cloud infrastructure — for founders who need it
              done right the first time.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button to="/contact" size="lg" iconRight={ArrowRight}>
                Start Your Project
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                See Our Work
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
      <section className="section section--alt">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline="What We Do"
              title="Services that drive growth"
              description="From custom software to AI solutions, we deliver end-to-end technology services."
            />
          </AnimatedSection>
          <AnimatedSection stagger animation="fadeUp">
            <div className="grid grid--3">
              {featuredServices.map((service) => (
                <AnimatedItem key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="service-card-link">
                    <Card icon={service.icon} hover>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.shortDesc}</CardDescription>
                      <span className="service-card__arrow">
                        Learn more <ArrowUpRight size={14} />
                      </span>
                    </Card>
                  </Link>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="section__cta">
              <Button to="/services" variant="outline" iconRight={ArrowRight}>View All Services</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline="Why Surenext"
              title="Why companies choose us"
              description="We combine technical excellence with a client-first approach to deliver results."
            />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid--4">
              {[
                { icon: Zap, title: 'Fast Delivery', desc: 'Agile methodology with 2-week sprints. Your project moves forward every day.' },
                { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant processes. Your data and IP are always protected.' },
                { icon: Users, title: 'Dedicated Teams', desc: 'Senior engineers assigned to your project. No juniors, no outsourcing.' },
                { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock monitoring and support. We\'re always here for you.' },
              ].map((item) => (
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
              overline="Our Process"
              title="From idea to launch in 4 steps"
              description="A proven methodology that ensures quality, transparency, and on-time delivery."
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
              overline="Industries"
              title="Solutions for every industry"
              description="We understand the unique challenges of each sector and deliver tailored solutions."
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
              <Button to="/industries" variant="outline" iconRight={ArrowRight}>View All Industries</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline="Technology Stack"
              title="Built with the best technologies"
              description="We use cutting-edge tools and frameworks to build scalable, future-proof solutions."
            />
          </AnimatedSection>
          <AnimatedSection>
            <div className="tech-grid">
              {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
                <div key={category} className="tech-category">
                  <h4 className="tech-category__title">{category}</h4>
                  <div className="tech-category__tags">
                    {techs.map((tech) => (
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
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              overline="Testimonials"
              title="What our clients say"
              description="Don't just take our word for it — hear from the companies we've helped."
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
      </section>

      {/* ===== FAQ ===== */}
      <section className="section">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading
              align="center"
              overline="FAQ"
              title="Frequently asked questions"
              description="Everything you need to know about working with us."
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
