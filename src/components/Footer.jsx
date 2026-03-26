import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Decorative wave top */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" fill="#0B1F2E" />
        </svg>
      </div>

      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__brand">
              <div className="footer__logo-wrap">
                <span className="footer__logo">Aura Afloat</span>
                <div className="footer__logo-mark">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18 L12 6 L21 18 Z" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </div>
              </div>
              <p className="footer__tagline">Private Pilates on Biscayne Bay, Miami</p>
            </div>

            <div className="footer__links">
              <div className="footer__links-col">
                <span className="footer__links-title">Experience</span>
                <a href="#what-it-is" className="footer__link">What Awaits</a>
                <a href="#who-its-for" className="footer__link">Who It's For</a>
                <a href="#experience" className="footer__link">Gallery</a>
                <a href="#where" className="footer__link">Location</a>
              </div>
              <div className="footer__links-col">
                <span className="footer__links-title">Book</span>
                <a href="#pricing" className="footer__link">Pricing</a>
                <a href="#waitlist" className="footer__link">Waitlist</a>
              </div>
              <div className="footer__links-col">
                <span className="footer__links-title">Connect</span>
                <a href="https://instagram.com/auraafloat" target="_blank" rel="noopener noreferrer" className="footer__link">
                  <i className="ph ph-instagram-logo" /> Instagram
                </a>
                <a href="mailto:hello@auraafloat.com" className="footer__link">
                  <i className="ph ph-envelope" /> Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">© 2026 Aura Afloat · Miami, FL · All rights reserved.</p>
            <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">Privacy</a>
              <span className="footer__dot" />
              <a href="#" className="footer__bottom-link">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
