import { useEffect, useRef } from 'react';
import { MapPinIcon, ClockIcon, WavesIcon, SunHorizonIcon } from './Icons';
import MapEmbed from './MapEmbed';
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
            <a
              href="https://maps.app.goo.gl/9Ft3iZ4j1xygTxsh6?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="where-section__img-frame"
              style={{ display: 'block', padding: 0, borderRadius: '16px', overflow: 'hidden', position: 'relative' }}
            >
              <img
                src="/miamarina.jpg"
                alt="MiaMarina aerial view"
                style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(26,26,46,0.3) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                padding: '20px',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                <MapPinIcon size={18} color="#C9A96E" />
                <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>View on Google Maps</span>
              </div>
            </a>
            <div className="where-section__badge">
              <SunHorizonIcon size={16} />
              <span>Morning & Sunset Sessions</span>
            </div>
          </div>

          <div className="where-section__content reveal-right">
            <span className="section-eyebrow">Where</span>
            <h2 className="where-section__title">
              Departing from<br />
              <em>MiaMarina, Key Biscayne</em>
            </h2>
            <div className="section-divider" style={{ margin: '0' }} />
            <p className="where-section__desc">
              Your session begins at MiaMarina — a yacht club minutes from Key Biscayne.
              Once aboard, we anchor in the calm, protected waters of Biscayne Bay —
              away from the crowds, surrounded by sky and sea.
            </p>

            <div className="where-section__details">
              <div className="where-section__detail">
                <div className="where-section__detail-icon">
                  <MapPinIcon size={18} />
                </div>
                <div>
                  <strong>MiaMarina</strong>
                  <span>Key Biscayne, FL</span>
                </div>
              </div>
              <div className="where-section__detail">
                <div className="where-section__detail-icon">
                  <ClockIcon size={18} />
                </div>
                <div>
                  <strong>15 Minutes</strong>
                  <span>from South Beach</span>
                </div>
              </div>
              <div className="where-section__detail">
                <div className="where-section__detail-icon">
                  <WavesIcon size={18} />
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
