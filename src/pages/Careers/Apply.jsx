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
import content from '@/json/apply.json';
import './Apply.css';

const schema = z.object({
  name: z.string().min(2, content.validation.name_min),
  email: z.string().email(content.validation.email_invalid),
  phone: z.string().optional(),
  role: z.string().min(1, content.validation.role_req),
  resumeUrl: z.string().url(content.validation.resumeUrl_invalid),
  message: z.string().min(20, content.validation.message_min),
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
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Helmet>

      <section className="apply-hero">
        <div className="container container--narrow">
          <Link to="/careers" className="apply-hero__back"><ArrowLeft size={16} /> {content.hero.back_link}</Link>
          <AnimatedSection>
            <span className="apply-hero__overline">{content.hero.overline}</span>
            <h1 className="apply-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
            <p className="apply-hero__desc">{content.hero.desc}</p>
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
                  <span>{content.alerts.success}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="apply-alert apply-alert--error">
                  <AlertCircle size={18} />
                  <span>{content.alerts.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="apply-form" noValidate>
                <div className="apply-form__row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">{content.form.labels.name}</label>
                    <input id="name" type="text" className={`form-input ${errors.name ? 'form-input--error' : ''}`} placeholder={content.form.placeholders.name} {...register('name')} />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">{content.form.labels.email}</label>
                    <input id="email" type="email" className={`form-input ${errors.email ? 'form-input--error' : ''}`} placeholder={content.form.placeholders.email} {...register('email')} />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="apply-form__row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">{content.form.labels.phone}</label>
                    <input id="phone" type="tel" className="form-input" placeholder={content.form.placeholders.phone} {...register('phone')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="role" className="form-label">{content.form.labels.role}</label>
                    <select id="role" className={`form-input ${errors.role ? 'form-input--error' : ''}`} {...register('role')}>
                      <option value="">{content.form.placeholders.role_default}</option>
                      <optgroup label={content.form.options.optgroup_jobs}>
                        {OPENINGS.map((o) => <option key={o.title} value={o.title}>{o.title}</option>)}
                      </optgroup>
                      <optgroup label={content.form.options.optgroup_internships}>
                        {INTERNSHIPS.map((o) => <option key={o.title} value={o.title}>{o.title}</option>)}
                      </optgroup>
                      <option value={content.form.options.general_app}>{content.form.options.general_app}</option>
                    </select>
                    {errors.role && <span className="form-error">{errors.role.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="resumeUrl" className="form-label">{content.form.labels.resumeUrl}</label>
                  <input id="resumeUrl" type="text" className={`form-input ${errors.resumeUrl ? 'form-input--error' : ''}`} placeholder={content.form.placeholders.resumeUrl} {...register('resumeUrl')} />
                  {errors.resumeUrl && <span className="form-error">{errors.resumeUrl.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">{content.form.labels.message}</label>
                  <textarea id="message" rows={5} className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`} placeholder={content.form.placeholders.message} {...register('message')} />
                  {errors.message && <span className="form-error">{errors.message.message}</span>}
                </div>

                <Button type="submit" size="lg" loading={isSubmitting} icon={Send}>
                  {isSubmitting ? content.form.submitting : content.form.submit}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
