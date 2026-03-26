import { useState, useEffect } from 'react';
import { AnchorIcon, LogoMarkIcon } from './Icons';
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

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        <button className="nav__logo" onClick={scrollToTop}>
          <span className="nav__logo-text">Aura Afloat</span>
          <span className="nav__logo-mark">
            <LogoMarkIcon />
          </span>
        </button>

        <button
          className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <a href="#what-it-is" className="nav__link" onClick={scrollTo('what-it-is')}>What Awaits</a>
          <a href="#experience" className="nav__link" onClick={scrollTo('experience')}>Experience</a>
          <a href="#where" className="nav__link" onClick={scrollTo('where')}>Where</a>
          <a href="#pricing" className="nav__link" onClick={scrollTo('pricing')}>Pricing</a>
          <button className="nav__cta btn-accent" onClick={scrollToWaitlist}>
            <AnchorIcon size={16} />
            Book a Session
          </button>
        </div>
      </div>
    </nav>
  );
}
