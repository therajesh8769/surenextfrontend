import { Helmet } from 'react-helmet-async';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Home } from 'lucide-react';
import content from '@/json/notfound.json';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Helmet><title>{content.meta.title}</title></Helmet>
      <section className="not-found">
        <div className="container">
          <AnimatedSection>
            <span className="not-found__eyebrow">{content.content.eyebrow}</span>
            <span className="not-found__code">{content.content.code}</span>
            <h1 className="not-found__title">{content.content.title}</h1>
            <p className="not-found__desc">{content.content.desc}</p>
            <Button to="/" size="lg" icon={Home}>{content.content.btn}</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
