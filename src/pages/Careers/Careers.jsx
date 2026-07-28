import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Code2,
  Monitor,
  Server,
  Brain,
  Palette,
  ArrowRight
} from 'lucide-react';
import content from '@/json/careers.json';
import './Careers.css';

const ROLE_ICONS = [
  Code2,
  Monitor,
  Server,
  Brain,
  Palette,
  Code2
];

const FUTURE_ROLES = content.future_roles.items.map((role, index) => ({
  title: role,
  icon: ROLE_ICONS[index] || Code2
}));

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Helmet>

      {/* Hero */}

      <section className="careers-hero">
        <div className="container">
          <AnimatedSection>
            <span className="careers-hero__overline">
              {content.hero.overline}
            </span>

            <h1 className="careers-hero__title">
              {content.hero.title_start}{' '}
              <span className="text-accent">
                {content.hero.title_accent}
              </span>{' '}
              {content.hero.title_end}
            </h1>

            <p className="careers-hero__desc">
              {content.hero.desc}
            </p>

            <div className="careers-hero__actions">
              {/* <Button
                to="/contact"
                size="lg"
                iconRight={ArrowRight}
              >
                {content.hero.primary_btn}
              </Button> */}

              <Button
                to="/contact"
                size="lg"
                variant="outline"
              >
                {content.hero.secondary_btn}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* No openings */}

      <section className="section">
        <div className="container container--narrow">

          <AnimatedSection>

            <SectionHeading
              align="center"
              title={content.message.title}
            />

            <p className="section-description text-center">
              {content.message.desc}
            </p>

          </AnimatedSection>

        </div>
      </section>

      {/* Future Roles */}

      <section className="section section--alt">
        <div className="container">

          <AnimatedSection>

            <SectionHeading
              overline={content.future_roles.overline}
              title={content.future_roles.title}
              align="center"
            />

          </AnimatedSection>

          <AnimatedSection stagger>

            <div className="grid grid--3">

              {FUTURE_ROLES.map((role) => (
                <AnimatedItem key={role.title}>

                  <Card
                    icon={role.icon}
                    variant="bordered"
                  >
                    <CardTitle>
                      {role.title}
                    </CardTitle>

                  </Card>

                </AnimatedItem>
              ))}

            </div>

          </AnimatedSection>

        </div>
      </section>

      {/* Culture */}

      <section className="section">
        <div className="container">

          <AnimatedSection>

            <SectionHeading
              overline={content.culture.overline}
              title={content.culture.title}
              align="center"
            />

          </AnimatedSection>

          <AnimatedSection stagger>

            <div className="grid grid--2">

              {content.culture.items.map((item) => (
                <AnimatedItem key={item.title}>

                  <Card variant="bordered">

                    <CardTitle>
                      {item.title}
                    </CardTitle>

                    <CardDescription>
                      {item.desc}
                    </CardDescription>

                  </Card>

                </AnimatedItem>
              ))}

            </div>

          </AnimatedSection>

        </div>
      </section>

      {/* CTA */}

      <section className="section section--alt">
        <div className="container container--narrow">

          <AnimatedSection>

            <SectionHeading
              align="center"
              title={content.cta.title}
            />

            <p className="section-description text-center">
              {content.cta.desc}
            </p>

            <div className="text-center mt-32">

              <Button
                to="/contact"
                size="lg"
                iconRight={ArrowRight}
              >
                {content.cta.button}
              </Button>

            </div>

          </AnimatedSection>

        </div>
      </section>

    </>
  );
}