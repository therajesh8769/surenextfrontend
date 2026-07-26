import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Briefcase, Heart, Zap, GraduationCap, ArrowRight } from 'lucide-react';
import { OPENINGS, INTERNSHIPS } from '@/constants/careers';
import content from '@/json/careers.json';
import './Careers.css';

const PERKS_ICONS = [Zap, GraduationCap, Heart, Briefcase];
const PERKS = content.perks.map((p, i) => ({ ...p, icon: PERKS_ICONS[i] }));

function OpeningRow({ role }) {
  return (
    <AnimatedSection>
      <div className="careers-opening">
        <div>
          <h4 className="careers-opening__title">{role.title}</h4>
          <span className="careers-opening__meta">{role.team} · {role.type} · {role.location}</span>
        </div>
        <Button to={`/careers/apply?role=${encodeURIComponent(role.title)}`} size="sm" variant="outline">{content.apply_btn}</Button>
      </div>
    </AnimatedSection>
  );
}

export default function Careers() {
  return (
    <>
      <Helmet><title>{content.meta.title}</title></Helmet>

      <section className="careers-hero">
        <div className="container">
          <AnimatedSection>
            <span className="careers-hero__overline">{content.hero.overline}</span>
            <h1 className="careers-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
            <p className="careers-hero__desc">{content.hero.desc}</p>
            <Button to="/careers/apply" size="lg" iconRight={ArrowRight}>{content.hero.apply_btn}</Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection stagger>
            <div className="grid grid--4">
              {PERKS.map((p) => (
                <AnimatedItem key={p.title}>
                  <Card icon={p.icon} variant="bordered">
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.desc}</CardDescription>
                  </Card>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading align="center" overline={content.sections.openings.overline} title={content.sections.openings.title} />
          </AnimatedSection>
          <div className="careers-openings">
            {OPENINGS.map((o) => <OpeningRow role={o} key={o.title} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading align="center" overline={content.sections.internships.overline} title={content.sections.internships.title} />
          </AnimatedSection>
          <div className="careers-openings">
            {INTERNSHIPS.map((o) => <OpeningRow role={o} key={o.title} />)}
          </div>
        </div>
      </section>
    </>
  );
}
