import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import content from '@/json/blog.json';
import './Blog.css';

const POSTS = content.posts;

export default function Blog() {
  return (
    <>
      <Helmet><title>{content.meta.title}</title></Helmet>

      <section className="blog-hero">
        <div className="container">
          <AnimatedSection>
            <span className="blog-hero__overline">{content.hero.overline}</span>
            <h1 className="blog-hero__title">{content.hero.title_start} <span className="text-accent">{content.hero.title_accent}</span></h1>
            <p className="blog-hero__desc">{content.hero.desc}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection stagger>
            <div className="grid grid--3">
              {POSTS.map((post) => (
                <AnimatedItem key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    <article className="blog-card">
                      <div className="blog-card__cover">
                        {post.image && (
                          <img src={post.image} alt={post.title} className="blog-card__img" loading="lazy" />
                        )}
                      </div>
                      <div className="blog-card__body">
                        <div className="blog-card__meta">
                          <span className="blog-card__category">{post.category}</span>
                          <span>·</span>
                          <span>{post.date}</span>
                          {post.readTime && (
                            <>
                              <span>·</span>
                              <span>{post.readTime}</span>
                            </>
                          )}
                        </div>
                        <h3 className="blog-card__title">{post.title}</h3>
                        <p className="blog-card__excerpt">{post.excerpt}</p>
                        <span className="blog-card__link">{content.read_more} <ArrowRight size={14} /></span>
                      </div>
                    </article>
                  </Link>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
