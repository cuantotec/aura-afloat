import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      // Parallax — slower scroll on background
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.00015})`;
      // Fade content on scroll
      if (contentRef.current) {
        const opacity = Math.max(0, 1 - scrollY / 600);
        const translateY = scrollY * 0.25;
        contentRef.current.style.opacity = opacity;
        contentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Hero Background — ocean gradient with Ken Burns effect */}
      <div className="hero__bg" ref={bgRef}>
        <div className="hero__bg-gradient" />
        <div className="hero__bg-rays" />
      </div>

      {/* Dark cinematic overlay */}
      <div className="hero__overlay" />

      {/* Decorative grain on hero */}
      <div className="hero__grain" />

      {/* Hero content */}
      <div className="hero__content container" ref={contentRef}>
        <div className="hero__meta">
          <span className="hero__meta-dot" />
          <span className="hero__meta-text">Biscayne Bay · Miami, FL</span>
        </div>

        <h1 className="hero__heading">
          <span className="hero__heading-line">Sail Into</span>
          <span className="hero__heading-line hero__heading-line--italic">Stillness.</span>
        </h1>

        <div className="hero__rule" />

        <p className="hero__sub">
          Private Pilates sessions aboard a luxury yacht.<br />
          The sea, the breeze, and the movement — all to yourself.
        </p>

        <div className="hero__actions">
          <button className="hero__cta btn-accent" onClick={scrollToWaitlist}>
            <i className="ph ph-anchor" />
            Reserve Your Session
          </button>
          <a href="#what-it-is" className="hero__link">
            Discover More
            <i className="ph ph-arrow-down" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <div className="hero__scroll-line" />
        <i className="ph ph-caret-double-down" />
      </button>

      {/* Bottom fade */}
      <div className="hero__bottom-fade" />
    </section>
  );
}
