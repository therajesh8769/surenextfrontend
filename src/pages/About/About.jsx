import { Helmet } from 'react-helmet-async';
import { Target, Eye, Heart, Award, Users, Lightbulb, Handshake, TrendingUp } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import { VALUES, PROCESS_STEPS } from '@/constants/company';
import content from '@/json/about.json';
import './About.css';

const TIMELINE = content.timeline;
const TEAM = content.team;

const valueIcons = [Lightbulb, Handshake, Heart, Award];

export default function About() {
  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Helmet>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <AnimatedSection>
            <span className="about-hero__overline">{content.hero.overline}</span>
            <h1 className="about-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
            <p className="about-hero__desc">{content.hero.desc}</p>
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
                  <h3>{content.mission.title}</h3>
                  <p>{content.mission.desc}</p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="mv-card">
                  <div className="mv-card__icon"><Eye size={28} /></div>
                  <h3>{content.vision.title}</h3>
                  <p>{content.vision.desc}</p>
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
            <SectionHeading overline={content.values.overline} title={content.values.title} description={content.values.desc} />
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
      {/* <section className="section">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading overline={content.journey.overline} title={content.journey.title} />
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
      </section> */}

      {/* Team */}
      {/* <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading overline={content.leadership.overline} title={content.leadership.title} description={content.leadership.desc} />
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
      </section> */}
    </>
  );
}
