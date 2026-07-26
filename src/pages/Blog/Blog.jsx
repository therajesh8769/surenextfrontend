import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import './Blog.css';

const POSTS = [
  { slug: 'building-scalable-saas', title: 'Building Scalable SaaS Applications in 2024', excerpt: 'Best practices for architecture, multi-tenancy, and performance in modern SaaS development.', category: 'Engineering', date: 'Jan 15, 2024', pattern: 'diagonal' },
  { slug: 'ai-in-business', title: 'How AI is Transforming Business Operations', excerpt: 'From automation to predictive analytics, discover how AI creates competitive advantage.', category: 'AI', date: 'Feb 8, 2024', pattern: 'dots' },
  { slug: 'cloud-migration-guide', title: 'The Complete Cloud Migration Guide', excerpt: 'A step-by-step approach to migrating your infrastructure to the cloud safely and efficiently.', category: 'Cloud', date: 'Mar 3, 2024', pattern: 'grid' },
  { slug: 'react-performance', title: 'React Performance Optimization Techniques', excerpt: 'Advanced strategies for building blazing-fast React applications at scale.', category: 'Frontend', date: 'Apr 12, 2024', pattern: 'arcs' },
  { slug: 'api-design-best-practices', title: 'API Design Best Practices', excerpt: 'How to design RESTful APIs that are intuitive, scalable, and easy to maintain.', category: 'Backend', date: 'May 20, 2024', pattern: 'dots' },
  { slug: 'devops-ci-cd', title: 'Setting Up CI/CD Pipelines with GitHub Actions', excerpt: 'Automate your deployment workflow with modern CI/CD pipelines.', category: 'DevOps', date: 'Jun 5, 2024', pattern: 'diagonal' },
];

export default function Blog() {
  return (
    <>
      <Helmet><title>Blog — Surenext | Technology Insights</title></Helmet>

      <section className="blog-hero">
        <div className="container">
          <AnimatedSection>
            <span className="blog-hero__overline">Blog</span>
            <h1 className="blog-hero__title">Notes from the <span className="text-accent">studio</span></h1>
            <p className="blog-hero__desc">Insights, guides, and best practices from our engineering team.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection stagger>
            <div className="grid grid--3">
              {POSTS.map((post) => (
                <AnimatedItem key={post.slug}>
                  <article className="blog-card">
                    <div className={`blog-card__cover blog-card__cover--${post.pattern}`} />
                    <div className="blog-card__body">
                      <div className="blog-card__meta">
                        <span className="blog-card__category">{post.category}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="blog-card__title">{post.title}</h3>
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                      <span className="blog-card__link">Read more <ArrowRight size={14} /></span>
                    </div>
                  </article>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
