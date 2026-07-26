import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Briefcase, Heart, Zap, GraduationCap, ArrowRight } from 'lucide-react';
import { OPENINGS, INTERNSHIPS } from '@/constants/careers';
import './Careers.css';

const PERKS = [
  { icon: Zap, title: 'Cutting-Edge Projects', desc: 'Work on exciting projects using the latest technologies.' },
  { icon: GraduationCap, title: 'Learning & Growth', desc: 'Conference budgets, online courses, and mentorship programs.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness programs.' },
  { icon: Briefcase, title: 'Flexible Work', desc: 'Remote-first culture with flexible working hours.' },
];

function OpeningRow({ role }) {
  return (
    <AnimatedSection>
      <div className="careers-opening">
        <div>
          <h4 className="careers-opening__title">{role.title}</h4>
          <span className="careers-opening__meta">{role.team} · {role.type} · {role.location}</span>
        </div>
        <Button to={`/careers/apply?role=${encodeURIComponent(role.title)}`} size="sm" variant="outline">Apply</Button>
      </div>
    </AnimatedSection>
  );
}

export default function Careers() {
  return (
    <>
      <Helmet><title>Careers — Surenext | Join Our Team</title></Helmet>

      <section className="careers-hero">
        <div className="container">
          <AnimatedSection>
            <span className="careers-hero__overline">Careers</span>
            <h1 className="careers-hero__title">Join the <span className="text-accent">Surenext team</span></h1>
            <p className="careers-hero__desc">Build the future of technology with a team that values innovation, growth, and impact.</p>
            <Button to="/careers/apply" size="lg" iconRight={ArrowRight}>Apply for a Job or Internship</Button>
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
            <SectionHeading align="center" overline="Open Roles" title="Open positions" />
          </AnimatedSection>
          <div className="careers-openings">
            {OPENINGS.map((o) => <OpeningRow role={o} key={o.title} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <AnimatedSection>
            <SectionHeading align="center" overline="Internships" title="Internship programs" />
          </AnimatedSection>
          <div className="careers-openings">
            {INTERNSHIPS.map((o) => <OpeningRow role={o} key={o.title} />)}
          </div>
        </div>
      </section>
    </>
  );
}
