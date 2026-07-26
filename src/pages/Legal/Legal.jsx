import { Helmet } from 'react-helmet-async';
import jsonContent from '@/json/legal.json';

const content = (title, lastUpdated) => (
  <>
    <Helmet><title>{title} — Surenext</title></Helmet>
    <section style={{ padding: 'var(--space-32) 0 var(--space-16)', background: 'var(--color-bg-alt)' }}>
      <div className="container"><h1 style={{ fontFamily: 'var(--font-family-display)', fontSize: 'var(--font-size-4xl)', fontWeight: 600 }}>{title}</h1>
        <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>{jsonContent.last_updated_prefix} {lastUpdated}</p>
      </div>
    </section>
    <section className="section"><div className="container container--narrow" style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-base)' }}>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>{jsonContent.sections[0].title}</h2>
      <p style={{ marginBottom: 'var(--space-6)' }}>{jsonContent.sections[0].content}</p>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>{jsonContent.sections[1].title}</h2>
      <p style={{ marginBottom: 'var(--space-6)' }}>{jsonContent.sections[1].content}</p>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>{jsonContent.sections[2].title}</h2>
      <p style={{ marginBottom: 'var(--space-6)' }}>{jsonContent.sections[2].content}</p>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>{jsonContent.sections[3].title}</h2>
      <p>{jsonContent.sections[3].content_start}<a href={`mailto:${jsonContent.sections[3].email}`}>{jsonContent.sections[3].email}</a>{jsonContent.sections[3].content_end}</p>
    </div></section>
  </>
);

export function PrivacyPolicy() { return content('Privacy Policy', 'January 1, 2024'); }
export function Terms() { return content('Terms of Service', 'January 1, 2024'); }
