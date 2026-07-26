import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/ui/SocialIcons';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/constants/company';
import { apiPost } from '@/lib/api';
import './Contact.css';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

export default function Contact() {
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await apiPost('/api/contact', data);
      setStatus('success');
      reset();
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Surenext | Start Your Project</title>
        <meta name="description" content="Get in touch with Surenext. Let's discuss your project requirements and build something amazing together." />
      </Helmet>

      <section className="contact-hero">
        <div className="container">
          <AnimatedSection>
            <span className="contact-hero__overline">Contact Us</span>
            <h1 className="contact-hero__title">Let's build something <span className="text-accent">great together</span></h1>
            <p className="contact-hero__desc">Tell us about your project and we'll get back to you within 24 hours.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <AnimatedSection animation="fadeLeft">
              <div className="contact-form-wrapper">
                <h2 className="contact-form__title">Send us a message</h2>

                {status === 'success' && (
                  <div className="contact-alert contact-alert--success">
                    <CheckCircle2 size={18} />
                    <span>Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="contact-alert contact-alert--error">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input id="name" type="text" className={`form-input ${errors.name ? 'form-input--error' : ''}`} placeholder="John Doe" {...register('name')} />
                      {errors.name && <span className="form-error">{errors.name.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input id="email" type="email" className={`form-input ${errors.email ? 'form-input--error' : ''}`} placeholder="john@company.com" {...register('email')} />
                      {errors.email && <span className="form-error">{errors.email.message}</span>}
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company</label>
                      <input id="company" type="text" className="form-input" placeholder="Your company" {...register('company')} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input id="subject" type="text" className={`form-input ${errors.subject ? 'form-input--error' : ''}`} placeholder="Project inquiry" {...register('subject')} />
                      {errors.subject && <span className="form-error">{errors.subject.message}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea id="message" rows={5} className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`} placeholder="Tell us about your project..." {...register('message')} />
                    {errors.message && <span className="form-error">{errors.message.message}</span>}
                  </div>
                  <Button type="submit" size="lg" loading={isSubmitting} icon={Send}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="contact-info">
                <h3 className="contact-info__title">Get in touch</h3>
                <p className="contact-info__desc">Prefer to reach out directly? Here's how you can contact us.</p>

                <div className="contact-info__items">
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><Mail size={20} /></div>
                    <div>
                      <h4>Email</h4>
                      <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><Phone size={20} /></div>
                    <div>
                      <h4>Phone</h4>
                      <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon"><MapPin size={20} /></div>
                    <div>
                      <h4>Office</h4>
                      <span>{COMPANY.address}</span>
                    </div>
                  </div>
                </div>

                <div className="contact-info__social">
                  <h4>Follow us</h4>
                  <div className="contact-info__social-links">
                    <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
                    <a href={COMPANY.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon size={20} /></a>
                    <a href={COMPANY.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="contact-map">
                  <div className="contact-map__placeholder">
                    <MapPin size={32} />
                    <span>Google Maps</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
