import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import content from '@/json/blog.json';
import './BlogPost.css';

const POSTS = content.posts;

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>Post not found</h2>
        <Button to="/blog" variant="outline" style={{ marginTop: 'var(--space-4)' }}>Back to Blog</Button>
      </div>
    );
  }

  // Find related posts
  let related = POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 2);
  if (related.length < 2) {
    const extras = POSTS.filter(p => p.slug !== slug && !related.find(r => r.slug === p.slug)).slice(0, 2 - related.length);
    related = [...related, ...extras];
  }

  return (
    <>
      <Helmet>
        <title>{post.title} — Surenext Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="bp">
        {/* Back link */}
        <div className="bp-nav">
          <div className="container">
            <Link to="/blog" className="bp-nav__back"><ArrowLeft size={16} /> All Articles</Link>
          </div>
        </div>

        {/* Cover Image — Full width */}
        {post.image && (
          <div className="bp-cover">
            <div className="container">
              <div className="bp-cover__wrap">
                <img src={post.image} alt={post.title} className="bp-cover__img" />
              </div>
            </div>
          </div>
        )}

        {/* Article Header + Body */}
        <div className="bp-main">
          <div className="container">
            <div className="bp-article">
              <AnimatedSection>
                <header className="bp-header">
                  <div className="bp-header__meta">
                    <span className="bp-header__category">{post.category}</span>
                    <span className="bp-header__sep" />
                    <span className="bp-header__detail"><Calendar size={13} /> {post.date}</span>
                    {post.readTime && <span className="bp-header__detail"><Clock size={13} /> {post.readTime}</span>}
                  </div>
                  <h1 className="bp-header__title">{post.title}</h1>
                  <p className="bp-header__lead">{post.excerpt}</p>
                </header>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bp-body">
                  {post.content && post.content.map((block, i) => {
                    if (block.startsWith('## ')) {
                      return <h2 key={i}>{block.replace('## ', '')}</h2>;
                    }
                    return <p key={i}>{block}</p>;
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="bp-related">
            <div className="container">
              <h2 className="bp-related__heading">Continue Reading</h2>
              <div className="bp-related__grid">
                {related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="bp-related__card">
                    {r.image && (
                      <div className="bp-related__img-wrap">
                        <img src={r.image} alt={r.title} className="bp-related__img" loading="lazy" />
                      </div>
                    )}
                    <div className="bp-related__info">
                      <span className="bp-related__cat">{r.category} · {r.date}</span>
                      <h3 className="bp-related__title">{r.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
