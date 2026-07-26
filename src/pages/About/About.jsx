import { Helmet } from 'react-helmet-async';
import { Target, Eye, Heart, Award, Users, Lightbulb, Handshake, TrendingUp } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import { VALUES, PROCESS_STEPS } from '@/constants/company';
import './About.css';

const TIMELINE = [
  { year: '2019', title: 'Founded', desc: 'Surenext was born with a vision to deliver reliable, next-generation technology solutions.' },
  { year: '2020', title: 'First Major Client', desc: 'Secured our first enterprise contract and grew the team to 10 engineers.' },
  { year: '2021', title: 'AI Division Launched', desc: 'Expanded into AI/ML services, delivering intelligent automation solutions.' },
  { year: '2022', title: '100 Projects Milestone', desc: 'Celebrated 100+ successful project deliveries across 8 industries.' },
  { year: '2023', title: 'Global Expansion', desc: 'Opened operations in 3 countries, serving clients across North America, Europe, and Asia.' },
  { year: '2024', title: 'Innovation Award', desc: 'Recognized as a top emerging technology services company.' },
];

const TEAM = [
  { name: 'Alex Johnson', role: 'CEO & Co-Founder', initial: 'AJ' },
  { name: 'Priya Sharma', role: 'CTO & Co-Founder', initial: 'PS' },
  { name: 'David Kim', role: 'VP of Engineering', initial: 'DK' },
  { name: 'Sarah Mitchell', role: 'Head of Design', initial: 'SM' },
];

const valueIcons = [Lightbulb, Handshake, Heart, Award];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Surenext — Our Mission, Vision & Team</title>
        <meta name="description" content="Learn about Surenext's mission to deliver reliable next-gen technology. Meet our team, explore our values, and discover our journey." />
      </Helmet>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <AnimatedSection>
            <span className="about-hero__overline">About Us</span>
            <h1 className="about-hero__title">We build technology that <span className="text-accent">moves business forward</span></h1>
            <p className="about-hero__desc">Surenext is a team of engineers, designers, and strategists passionate about delivering technology solutions that create real business impact.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <AnimatedSection stagger>
            <div className="grid grid--2 mv-grid">
              <AnimatedItem>
                <div className="mv-card">
                  <div className="mv-card__icon"><Target size={28} /></div>
                  <h3>Our Mission</h3>
                  <p>To empower businesses with reliable, scalable, and innovative technology solutions that drive growth and create competitive advantage in the digital era.</p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="mv-card">
                  <div className="mv-card__icon"><Eye size={28} /></div>
                  <h3>Our Vision</h3>
                  <p>To be the most trusted technology partner for businesses worldwide, known for delivering excellence, innovation, and measurable results.</p>
                </div>
              </AnimatedItem>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading overline="Our Values" title="What we stand for" description="These principles guide every decision we make and every solution we build." />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid--4">
              {VALUES.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <AnimatedItem key={v.title}>
                    <Card icon={Icon} variant="bordered">
                      <CardTitle>{v.title}</CardTitle>
                      <CardDescription>{v.description}</CardDescription>
                    </Card>
                  </AnimatedItem>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading overline="Our Journey" title="Building the future, one year at a time" />
          </AnimatedSection>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <AnimatedSection key={item.year} animation={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={i * 0.1}>
                <div className="timeline__item">
                  <div className="timeline__marker" />
                  <div className="timeline__content">
                    <span className="timeline__year">{item.year}</span>
                    <h4 className="timeline__title">{item.title}</h4>
                    <p className="timeline__desc">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading overline="Leadership" title="Meet our team" description="Experienced leaders driving innovation and excellence." />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid--4">
              {TEAM.map((member) => (
                <AnimatedItem key={member.name}>
                  <div className="team-card">
                    <div className="team-card__avatar">{member.initial}</div>
                    <h4 className="team-card__name">{member.name}</h4>
                    <p className="team-card__role">{member.role}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
