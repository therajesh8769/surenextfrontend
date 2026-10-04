import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import { LogoMark } from '@/components/ui/Logo';
import { COMPANY } from '@/constants/company';
import { FOOTER_LINKS } from '@/constants/navigation';
import { apiPost } from '@/lib/api';
import './Footer.css';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await apiPost('/api/newsletter', { email });
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <p className="footer__newsletter-done"><Check size={14} /> You're subscribed.</p>
    );
  }

  return (
    <form className="footer__newsletter" onSubmit={onSubmit}>
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="footer__newsletter-input"
        aria-label="Email address"
      />
      <button type="submit" className="footer__newsletter-btn" disabled={status === 'loading'} aria-label="Subscribe">
        <ArrowRight size={16} />
      </button>
      {status === 'error' && <span className="footer__newsletter-error">Something went wrong. Try again.</span>}
    </form>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialIcons = { twitter: TwitterIcon, linkedin: LinkedinIcon, github: GithubIcon, instagram: InstagramIcon };

  return (
    <footer className="footer">
      <div className="container">
        {/* CTA Section */}
        <div className="footer__cta">
          <h2 className="footer__cta-title">Ready to build something amazing?</h2>
          <p className="footer__cta-desc">Let's discuss your project and bring your vision to life.</p>
          <div className="footer__cta-actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Start a Project <ArrowUpRight size={16} />
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="btn btn--outline btn--lg">{COMPANY.email}</a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <LogoMark size={32} tone="light" />
              <span className="footer__logo-text">Surenext</span>
            </Link>
            <p className="footer__brand-desc">{COMPANY.description}</p>
            <h4 className="footer__col-title">Stay Updated</h4>
            <NewsletterForm />
            <div className="footer__social">
              {Object.entries(COMPANY.social).map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={key}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="footer__col">
              <h4 className="footer__col-title">{category}</h4>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__col-links">
              <li className="footer__contact-item">
                <Mail size={14} />
                <a href={`mailto:hello.surenext@gmail.com`}>hello.surenext@gmail.com</a>
              </li>
              <li className="footer__contact-item">
                <Phone size={14} />
                <a href={`tel:+918769162900`}>+91-8769162900</a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={14} />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>&copy; {currentYear} Surenext. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
