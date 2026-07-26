import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { OPENINGS, INTERNSHIPS } from '@/constants/careers';
import { apiPost } from '@/lib/api';
import './Apply.css';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  role: z.string().min(1, 'Please select a role'),
  resumeUrl: z.string().url('Please enter a valid link (Drive, Dropbox, LinkedIn, portfolio, etc.)'),
  message: z.string().min(20, 'Please write at least 20 characters'),
});

export default function Apply() {
  const [searchParams] = useSearchParams();
  const prefillRole = searchParams.get('role') || '';
  const [status, setStatus] = useState(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: prefillRole },
  });

  const onSubmit = async (data) => {
    try {
      await apiPost('/api/applications', data);
      setStatus('success');
      reset({ role: '' });
      setTimeout(() => setStatus(null), 6000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Apply — Surenext Careers</title>
        <meta name="description" content="Apply for a job or internship at Surenext." />
      </Helmet>

      <section className="apply-hero">
        <div className="container container--narrow">
          <Link to="/careers" className="apply-hero__back"><ArrowLeft size={16} /> All Openings</Link>
          <AnimatedSection>
            <span className="apply-hero__overline">Apply</span>
            <h1 className="apply-hero__title">Apply for a <span className="text-accent">job or internship</span></h1>
            <p className="apply-hero__desc">Tell us about yourself and where you'd like to contribute. We review every application and get back to you within a week.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <AnimatedSection>
            <div className="apply-form-wrapper">
              {status === 'success' && (
                <div className="apply-alert apply-alert--success">
                  <CheckCircle2 size={18} />
                  <span>Application received! We'll review it and get back to you within a week.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="apply-alert apply-alert--error">
                  <AlertCircle size={18} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="apply-form" noValidate>
                <div className="apply-form__row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input id="name" type="text" className={`form-input ${errors.name ? 'form-input--error' : ''}`} placeholder="Jane Doe" {...register('name')} />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input id="email" type="email" className={`form-input ${errors.email ? 'form-input--error' : ''}`} placeholder="jane@email.com" {...register('email')} />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="apply-form__row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input id="phone" type="tel" className="form-input" placeholder="+1 (555) 123-4567" {...register('phone')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="role" className="form-label">Role you're applying for *</label>
                    <select id="role" className={`form-input ${errors.role ? 'form-input--error' : ''}`} {...register('role')}>
                      <option value="">Select a role</option>
                      <optgroup label="Jobs">
                        {OPENINGS.map((o) => <option key={o.title} value={o.title}>{o.title}</option>)}
                      </optgroup>
                      <optgroup label="Internships">
                        {INTERNSHIPS.map((o) => <option key={o.title} value={o.title}>{o.title}</option>)}
                      </optgroup>
                      <option value="General Application">General Application</option>
                    </select>
                    {errors.role && <span className="form-error">{errors.role.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="resumeUrl" className="form-label">Resume / Portfolio Link *</label>
                  <input id="resumeUrl" type="text" className={`form-input ${errors.resumeUrl ? 'form-input--error' : ''}`} placeholder="Link to your resume (Drive, Dropbox, LinkedIn, portfolio...)" {...register('resumeUrl')} />
                  {errors.resumeUrl && <span className="form-error">{errors.resumeUrl.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Why are you a good fit? *</label>
                  <textarea id="message" rows={5} className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`} placeholder="Tell us about your experience and why you're interested..." {...register('message')} />
                  {errors.message && <span className="form-error">{errors.message.message}</span>}
                </div>

                <Button type="submit" size="lg" loading={isSubmitting} icon={Send}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
