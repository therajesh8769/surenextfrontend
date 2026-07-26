import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '@/constants/navigation';
import { SERVICES } from '@/constants/services';
import Button from '@/components/ui/Button';
import { LogoMark } from '@/components/ui/Logo';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const featuredServices = SERVICES.slice(0, 6);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <Link to="/" className="navbar__logo" aria-label="Surenext Home">
          <LogoMark size={34} />
          <span className="navbar__logo-text">Surenext</span>
        </Link>

        <ul className="navbar__links" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="navbar__item"
              onMouseEnter={() => item.hasDropdown && setShowServices(true)}
              onMouseLeave={() => item.hasDropdown && setShowServices(false)}
              role="none"
            >
              <Link
                to={item.path}
                className={`navbar__link ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'navbar__link--active' : ''}`}
                role="menuitem"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className={`navbar__dropdown-icon ${showServices ? 'navbar__dropdown-icon--open' : ''}`} />}
              </Link>

              {item.hasDropdown && (
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      className="navbar__mega"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="navbar__mega-grid">
                        {featuredServices.map((s) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className="navbar__mega-item">
                            <div className="navbar__mega-icon"><s.icon size={18} /></div>
                            <div>
                              <div className="navbar__mega-title">{s.title}</div>
                              <div className="navbar__mega-desc">{s.shortDesc.slice(0, 60)}...</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="navbar__mega-footer">
                        <Link to="/services" className="navbar__mega-all">
                          View all services <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <Button to="/contact" size="sm">Get Started</Button>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ul className="navbar__mobile-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`navbar__mobile-link ${location.pathname === item.path ? 'navbar__mobile-link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="navbar__mobile-cta">
              <Button to="/contact" size="lg" style={{ width: '100%' }}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
