import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

// Eager load Home for fastest FCP
import Home from '@/pages/Home/Home';

// Lazy load other pages for code splitting
const About = lazy(() => import('@/pages/About/About'));
const Services = lazy(() => import('@/pages/Services/Services'));
const ServiceDetail = lazy(() => import('@/pages/Services/ServiceDetail'));
const Contact = lazy(() => import('@/pages/Contact/Contact'));
const Industries = lazy(() => import('@/pages/Industries/Industries'));
const Technologies = lazy(() => import('@/pages/Technologies/Technologies'));
const Portfolio = lazy(() => import('@/pages/Portfolio/Portfolio'));
const Blog = lazy(() => import('@/pages/Blog/Blog'));
const BlogPost = lazy(() => import('@/pages/Blog/BlogPost'));
const Careers = lazy(() => import('@/pages/Careers/Careers'));
const Apply = lazy(() => import('@/pages/Careers/Apply'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

// Legal pages
const LegalModule = lazy(() => import('@/pages/Legal/Legal'));
const PrivacyPolicy = lazy(() => import('@/pages/Legal/Legal').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('@/pages/Legal/Legal').then(m => ({ default: m.Terms })));

function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        width: 36, height: 36, border: '3px solid var(--color-border)',
        borderTopColor: 'var(--color-primary)', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/apply" element={<Apply />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
