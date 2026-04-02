import { useEffect, useRef } from 'react';
import { InstagramLogoIcon } from './Icons';
import './BookSession.css';

export default function BookSession() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="book-session" ref={sectionRef} id="book-session">
      <div className="book-session__deco book-session__deco--1" aria-hidden="true" />
      <div className="book-session__deco book-session__deco--2" aria-hidden="true" />
      <div className="book-session__deco book-session__deco--3" aria-hidden="true" />

      <div className="container">
        <div className="book-session__inner">
          <div className="book-session__icon-wrap reveal-scale" aria-hidden="true">
            <InstagramLogoIcon size={36} />
          </div>

          <p className="book-session__eyebrow reveal">Book a Session</p>

          <h2 className="book-session__handle reveal">
            <a
              href="https://instagram.com/auraafloat"
              target="_blank"
              rel="noopener noreferrer"
              className="book-session__handle-link"
            >
              @auraafloat
            </a>
          </h2>

          <p className="book-session__text reveal">
            Reach out on Instagram for the most prompt response!
          </p>

          <a
            href="https://instagram.com/auraafloat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent book-session__cta reveal"
          >
            <InstagramLogoIcon size={18} />
            DM on Instagram
          </a>

          <div className="book-session__rule reveal" />
        </div>
      </div>
    </section>
  );
}
