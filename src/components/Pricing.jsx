import { useEffect, useRef } from 'react';
import { CheckCircleIcon, PaperPlaneTiltIcon } from './Icons';
import './Pricing.css';

const tiers = [
  {
    name: 'Experience',
    price: '250',
    unit: 'one-time',
    badge: null,
    iconColor: 'var(--secondary)',
    desc: 'A single session on the water. Just you and the sea.',
    features: [
      '90 min private session',
      'Reformer-inspired Pilates',
      'Breathwork integration',
      'Yacht charter included',
      'Welcome beverage',
    ],
    cta: 'Book Now',
  },
  {
    name: 'Monthly',
    price: '200',
    unit: '/month',
    badge: 'Most Popular',
    iconColor: 'var(--accent)',
    desc: 'Your monthly escape on the water. One session every month.',
    features: [
      '90 min private session',
      'Reformer-inspired Pilates',
      'Breathwork integration',
      'Yacht charter included',
      'Welcome beverage',
      'Monthly booking',
    ],
    cta: 'Book Now',
    popular: true,
  },
  {
    name: 'VIP',
    price: '360',
    unit: '/month',
    badge: null,
    iconColor: 'var(--secondary)',
    desc: 'Twice a month on the water. For those who want more.',
    features: [
      '90 min private session × 2/month',
      'Reformer-inspired Pilates',
      'Breathwork integration',
      'Yacht charter included',
      'Welcome beverage & champagne',
      'Priority booking',
    ],
    cta: 'Book Now',
  },
];

export default function Pricing() {
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

  const scrollToBookSession = () => {
    document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pricing" ref={sectionRef} id="pricing">
      <div className="container">
        <div className="pricing__header reveal">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="pricing__title">Choose Your Journey</h2>
          <div className="section-divider" />
          <p className="pricing__sub">All sessions include yacht charter, certified instructor, and premium equipment.</p>
        </div>
        <div className="pricing__grid">
          {tiers.map((tier, i) => (
            <div
              className={`pricing__card reveal ${tier.popular ? 'pricing__card--popular' : ''}`}
              key={i}
            >
              {tier.badge && <span className="pricing__badge">{tier.badge}</span>}

              <div className="pricing__card-header">
                <h3 className="pricing__tier-name">{tier.name}</h3>
                <div className="pricing__price">
                  <span className="pricing__currency">$</span>
                  <span className="pricing__amount">{tier.price}</span>
                  <span className="pricing__unit">{tier.unit}</span>
                </div>
                <p className="pricing__desc">{tier.desc}</p>
              </div>

              <div className="pricing__divider" />

              <ul className="pricing__features">
                {tier.features.map((f, j) => (
                  <li key={j}>
                    <CheckCircleIcon size={16} color={tier.iconColor} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`pricing__cta ${tier.popular ? 'btn-accent' : 'btn-outline'}`}
                onClick={scrollToBookSession}
              >
                <PaperPlaneTiltIcon size={16} />
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
