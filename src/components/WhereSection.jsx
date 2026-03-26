import { useEffect, useRef } from 'react';
import './WhereSection.css';

export default function WhereSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => el.classList.add('revealed'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="where-section" ref={sectionRef} id="where">
      <div className="container">
        <div className="where-section__inner">
          <div className="where-section__visual reveal-left">
            <div className="where-section__img-frame">
              <img
                src="https://images.unsplash.com/photo-1569413503773-3f40b13a8f78?w=900&q=80&auto=format&fit=crop"
                alt="Biscayne Bay Miami aerial view"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="where-section__pin">
              <i className="ph ph-map-pin" />
              <span>Biscayne Bay, Miami</span>
            </div>
            <div className="where-section__badge">
              <i className="ph ph-sun-horizon" />
              <span>Morning & Sunset Sessions</span>
            </div>
          </div>

          <div className="where-section__content reveal-right">
            <span className="section-eyebrow">Where</span>
            <h2 className="where-section__title">
              Departing from<br />
              <em>Biscayne Bay, Miami</em>
            </h2>
            <div className="section-divider" style={{ margin: '0' }} />
            <p className="where-section__desc">
              Your session begins at a private marina minutes from South Beach.
              Once aboard, we anchor in the calm, protected waters of Biscayne Bay —
              away from the crowds, surrounded by sky and sea.
            </p>

            <div className="where-section__details">
              <div className="where-section__detail">
                <div className="where-section__detail-icon">
                  <i className="ph ph-map-pin" />
                </div>
                <div>
                  <strong>Marina Location</strong>
                  <span>Biscayne Bay Waterway, Miami, FL</span>
                </div>
              </div>
              <div className="where-section__detail">
                <div className="where-section__detail-icon">
                  <i className="ph ph-clock" />
                </div>
                <div>
                  <strong>15 Minutes</strong>
                  <span>from South Beach</span>
                </div>
              </div>
              <div className="where-section__detail">
                <div className="where-section__detail-icon">
                  <i className="ph ph-waves" />
                </div>
                <div>
                  <strong>Protected Waters</strong>
                  <span>Calm bay — no open ocean chop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
