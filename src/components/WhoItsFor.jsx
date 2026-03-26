import { useEffect, useRef } from 'react';
import { StarFourIcon, ChampagneIcon, BuildingsIcon } from './Icons';
import './WhoItsFor.css';

const personas = [
  {
    Icon: StarFourIcon,
    title: 'Luxury Seekers',
    desc: 'Women who invest in elevated wellness experiences that restore rather than deplete.',
  },
  {
    Icon: ChampagneIcon,
    title: 'Bachelorette Groups',
    desc: 'Celebrate your tribe on the water — movement, mimosas, and memories that last a lifetime.',
  },
  {
    Icon: BuildingsIcon,
    title: 'Corporate Retreats',
    desc: 'Reward your team with a unique wellness experience that blends connection and calm.',
  },
];

export default function WhoItsFor() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => el.classList.add('revealed'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="who-its-for" ref={sectionRef} id="who-its-for">
      {/* Subtle background pattern */}
      <div className="who-its-for__bg-pattern" aria-hidden="true" />

      <div className="container">
        <div className="who-its-for__inner">
          <div className="who-its-for__left reveal-left">
            <span className="section-eyebrow">The Experience</span>
            <blockquote className="who-its-for__quote">
              <span className="who-its-for__quote-mark">"</span>
              For women who want to feel <em>restored</em>, not exhausted.
            </blockquote>
            <div className="who-its-for__rule" />
            <p className="who-its-for__body">
              Aura Afloat is designed for those who seek depth over intensity.
              Whether you're celebrating a milestone, escaping the city, or simply
              craving stillness — the bay awaits.
            </p>
            <div className="who-its-for__signature">
              <span className="who-its-for__sig-text">Aura Afloat</span>
            </div>
          </div>

          <div className="who-its-for__right">
            {personas.map((p, i) => (
              <div className="who-its-for__card reveal" key={i}>
                <div className="who-its-for__card-icon">
                  <p.Icon size={22} />
                </div>
                <div className="who-its-for__card-body">
                  <h4 className="who-its-for__card-title">{p.title}</h4>
                  <p className="who-its-for__card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
