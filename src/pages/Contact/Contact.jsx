import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

import { LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/ui/SocialIcons';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

import { COMPANY } from '@/constants/company';
import { apiPost } from '@/lib/api';

import content from '@/json/contact.json';
import './Contact.css';

const schema = z.object({
  name: z.string().min(2, content.validation.name_min),
  email: z.string().email(content.validation.email_invalid),
  company: z.string().optional(),
  subject: z.string().min(5, content.validation.subject_min),
  message: z.string().min(20, content.validation.message_min),
});

export default function Contact() {

  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await apiPost('/api/contact', data);
      setStatus('success');
      reset();

      setTimeout(() => {
        setStatus(null);
      }, 5000);

    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta
          name="description"
          content={content.meta.description}
        />
      </Helmet>

      {/* Hero */}

      <section className="contact-hero">
        <div className="container">

          <AnimatedSection>

            <span className="contact-hero__overline">
              {content.hero.overline}
            </span>

            <h1 className="contact-hero__title">
              {content.hero.title_start}{' '}
              <span className="text-accent">
                {content.hero.title_accent}
              </span>{' '}
              {content.hero.title_end}
            </h1>

            <p className="contact-hero__desc">
              {content.hero.desc}
            </p>

          </AnimatedSection>

        </div>
      </section>

      {/* What Happens Next */}

      <section className="section section--alt">
        <div className="container">

          <AnimatedSection>

            <SectionHeading
              overline={content.expect.overline}
              title={content.expect.title}
              align="center"
            />

          </AnimatedSection>

          <AnimatedSection stagger>

            <div className="grid grid--3">

              {content.expect.items.map((item) => (

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

      {/* Contact */}

      <section className="section">

        <div className="container">

          <div className="contact-grid">

            {/* Form */}

            <AnimatedSection animation="fadeLeft">

              <div className="contact-form-wrapper">

                <h2 className="contact-form__title">
                  {content.form.title}
                </h2>

                {status === 'success' && (

                  <div className="contact-alert contact-alert--success">
                    <CheckCircle2 size={18} />
                    <span>{content.form.alerts.success}</span>
                  </div>

                )}

                {status === 'error' && (

                  <div className="contact-alert contact-alert--error">
                    <AlertCircle size={18} />
                    <span>{content.form.alerts.error}</span>
                  </div>

                )}

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form"
                  noValidate
                >

                  <div className="contact-form__row">

                    <div className="form-group">

                      <label className="form-label">
                        {content.form.labels.name}
                      </label>

                      <input
                        className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                        placeholder={content.form.placeholders.name}
                        {...register('name')}
                      />

                      {errors.name &&
                        <span className="form-error">
                          {errors.name.message}
                        </span>
                      }

                    </div>

                    <div className="form-group">

                      <label className="form-label">
                        {content.form.labels.email}
                      </label>

                      <input
                        type="email"
                        className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                        placeholder={content.form.placeholders.email}
                        {...register('email')}
                      />

                      {errors.email &&
                        <span className="form-error">
                          {errors.email.message}
                        </span>
                      }

                    </div>

                  </div>

                  <div className="contact-form__row">

                    <div className="form-group">

                      <label className="form-label">
                        {content.form.labels.company}
                      </label>

                      <input
                        className="form-input"
                        placeholder={content.form.placeholders.company}
                        {...register('company')}
                      />

                    </div>

                    <div className="form-group">

                      <label className="form-label">
                        {content.form.labels.subject}
                      </label>

                      <input
                        className={`form-input ${errors.subject ? 'form-input--error' : ''}`}
                        placeholder={content.form.placeholders.subject}
                        {...register('subject')}
                      />

                      {errors.subject &&
                        <span className="form-error">
                          {errors.subject.message}
                        </span>
                      }

                    </div>

                  </div>

                  <div className="form-group">

                    <label className="form-label">
                      {content.form.labels.message}
                    </label>

                    <textarea
                      rows={6}
                      className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                      placeholder={content.form.placeholders.message}
                      {...register('message')}
                    />

                    {errors.message &&
                      <span className="form-error">
                        {errors.message.message}
                      </span>
                    }

                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    loading={isSubmitting}
                    icon={Send}
                  >
                    {isSubmitting
                      ? content.form.submitting
                      : content.form.submit}
                  </Button>

                </form>

              </div>

            </AnimatedSection>

            {/* Contact Info */}

            <AnimatedSection
              animation="fadeRight"
              delay={0.2}
            >

              <div className="contact-info">

                <h3 className="contact-info__title">
                  {content.info.title}
                </h3>

                <p className="contact-info__desc">
                  {content.info.desc}
                </p>

                <div className="contact-info__items">

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <Mail size={20} />
                    </div>

                    <div>
                      <h4>{content.info.labels.email}</h4>
                      <a href={`mailto:hello.surenext@gmail.com`}>
                        hello.surenext@gmail.com
                      </a>
                    </div>
                  </div>

                  {COMPANY.phone && (

                    <div className="contact-info__item">

                      <div className="contact-info__icon">
                        <Phone size={20} />
                      </div>

                      <div>
                        <h4>{content.info.labels.phone}</h4>
                        <a href={`tel:+91-8769162900`}>
                          +91-8769162900
                        </a>
                      </div>

                    </div>

                  )}

                  <div className="contact-info__item">

                    <div className="contact-info__icon">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <h4>{content.info.labels.location}</h4>
                      <span>{content.info.values.location}</span>
                    </div>

                  </div>

                  <div className="contact-info__item">

                    <div className="contact-info__icon">
                      <Clock size={20} />
                    </div>

                    <div>
                      <h4>{content.info.labels.hours}</h4>
                      <span>{content.info.values.hours}</span>
                    </div>

                  </div>

                </div>

                <div className="contact-info__social">

                  <h4>{content.info.follow_us}</h4>

                  <div className="contact-info__social-links">

                    <a
                      href={COMPANY.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedinIcon size={20} />
                    </a>

                    <a
                      href={COMPANY.social.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon size={20} />
                    </a>

                    <a
                      href={COMPANY.social.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GithubIcon size={20} />
                    </a>

                  </div>

                </div>

              </div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* Final CTA */}

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
