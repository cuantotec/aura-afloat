import { useState, useEffect } from 'react';
import { AnchorIcon } from './Icons';
import { Logo } from './Logo';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  return (
    <>
      {/* Backdrop — visible when mobile menu is open */}
      <div
        className={`nav__backdrop ${menuOpen ? 'nav__backdrop--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="nav__inner container">
          {/* Logo */}
          <button className="nav__logo" onClick={scrollToTop} aria-label="Aura Afloat — home">
            <Logo size={36} />
          </button>

          {/* Hamburger */}
          <button
            className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

          {/* Mobile menu drawer */}
          <div
            className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}
            aria-hidden={!menuOpen}
          >
            {/* Close (X) button */}
            <button
              className="nav__close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <a href="#" className="nav__link" onClick={scrollTo('what-it-is')}>What Awaits</a>
            <a href="#" className="nav__link" onClick={scrollTo('experience')}>Experience</a>
            <a href="#" className="nav__link" onClick={scrollTo('where')}>Where</a>
            <a href="#" className="nav__link" onClick={scrollTo('pricing')}>Pricing</a>
            <button className="nav__cta btn-accent" onClick={scrollToWaitlist}>
              <AnchorIcon size={16} />
              Book a Session
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
