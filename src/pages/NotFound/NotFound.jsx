import { Helmet } from 'react-helmet-async';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 — Page Not Found | Surenext</title></Helmet>
      <section className="not-found">
        <div className="container">
          <AnimatedSection>
            <span className="not-found__eyebrow">Error</span>
            <span className="not-found__code">404</span>
            <h1 className="not-found__title">Page not found</h1>
            <p className="not-found__desc">Sorry, the page you're looking for doesn't exist or has been moved.</p>
            <Button to="/" size="lg" icon={Home}>Back to Home</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
