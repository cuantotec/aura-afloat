import { useEffect, useRef } from 'react';
import { AnchorSimpleIcon, FloatIcon, WaterIcon } from './Icons';
import './WhatItIs.css';

const features = [
  {
    Icon: AnchorSimpleIcon,
    title: 'The Setting',
    desc: '60–90 minute session aboard a fully-equipped yacht, anchored in the calm waters of Biscayne Bay. Sun, salt air, and open sky — nature\'s finest studio.',
  },
  {
    Icon: FloatIcon,
    title: 'The Practice',
    desc: 'Reformer-inspired Pilates flows adapted for the water, paired with intentional breathwork. The gentle rock of the yacht becomes part of the practice.',
  },
  {
    Icon: WaterIcon,
    title: 'The Sea',
    desc: 'Salt air, horizon lines, and the rhythmic motion of open water. Not just a backdrop — an active participant in your restoration.',
  },
];

export default function WhatItIs() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="what-it-is" ref={sectionRef} id="what-it-is">
      <div className="container">
        <div className="what-it-is__header reveal">
          <span className="section-eyebrow">What Awaits</span>
          <h2 className="what-it-is__title">
            More Than a Workout.<br />
            <em>A Complete Reset.</em>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="what-it-is__grid">
          {features.map((f, i) => (
            <div className={`what-it-is__card reveal reveal-${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
              <div className="what-it-is__card-inner">
                <div className="what-it-is__icon">
                  <f.Icon size={24} />
                </div>
                <div className="what-it-is__card-content">
                  <h3 className="what-it-is__card-title">{f.title}</h3>
                  <p className="what-it-is__card-desc">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
