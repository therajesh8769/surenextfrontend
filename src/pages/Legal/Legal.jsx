import { Helmet } from 'react-helmet-async';

const content = (title, lastUpdated) => (
  <>
    <Helmet><title>{title} — Surenext</title></Helmet>
    <section style={{ padding: 'var(--space-32) 0 var(--space-16)', background: 'var(--color-bg-alt)' }}>
      <div className="container"><h1 style={{ fontFamily: 'var(--font-family-display)', fontSize: 'var(--font-size-4xl)', fontWeight: 600 }}>{title}</h1>
        <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-2)' }}>Last updated: {lastUpdated}</p>
      </div>
    </section>
    <section className="section"><div className="container container--narrow" style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-base)' }}>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>1. Introduction</h2>
      <p style={{ marginBottom: 'var(--space-6)' }}>At Surenext, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and protect your data when you interact with our services.</p>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>2. Information We Collect</h2>
      <p style={{ marginBottom: 'var(--space-6)' }}>We collect information you provide directly, such as contact details, project requirements, and communication preferences. We also collect usage data through cookies and analytics tools to improve our services.</p>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>3. How We Use Your Information</h2>
      <p style={{ marginBottom: 'var(--space-6)' }}>We use your information to provide and improve our services, communicate with you about projects, send relevant updates, and ensure the security of our platform.</p>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text)', marginBottom: 'var(--space-4)' }}>4. Contact Us</h2>
      <p>If you have any questions about this policy, please contact us at <a href="mailto:hello@surenext.com">hello@surenext.com</a>.</p>
    </div></section>
  </>
);

export function PrivacyPolicy() { return content('Privacy Policy', 'January 1, 2024'); }
export function Terms() { return content('Terms of Service', 'January 1, 2024'); }
