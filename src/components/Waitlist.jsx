import { useState, useEffect, useRef } from 'react';
import './Waitlist.css';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
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

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setStatus('loading');

    const FORM_ID = 'YOUR_FORM_ID';
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json();
        setErrorMsg(data?.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setStatus('success');
    }
  };

  return (
    <section className="waitlist" ref={sectionRef} id="waitlist">
      {/* Decorative elements */}
      <div className="waitlist__deco waitlist__deco--1" aria-hidden="true" />
      <div className="waitlist__deco waitlist__deco--2" aria-hidden="true" />
      <div className="waitlist__deco waitlist__deco--3" aria-hidden="true" />

      <div className="container">
        <div className="waitlist__inner">
          <div className="waitlist__text reveal-left">
            <span className="waitlist__eyebrow">Coming Spring 2026</span>
            <h2 className="waitlist__title">
              Be First to Sail<br />
              <em>Into Stillness.</em>
            </h2>
            <div className="waitlist__rule" />
            <p className="waitlist__sub">
              Join the waitlist for early access, exclusive launch pricing,
              and priority booking when we set sail.
            </p>

            <div className="waitlist__perks">
              {[
                'Early access booking',
                'Launch pricing discount',
                'Priority session times',
              ].map((perk, i) => (
                <div className="waitlist__perk" key={i}>
                  <i className="ph ph-sparkle" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="waitlist__form-wrap reveal-right">
            {status === 'success' ? (
              <div className="waitlist__success">
                <div className="waitlist__success-icon">
                  <i className="ph ph-paper-plane-tilt" />
                </div>
                <h3>You're on the list.</h3>
                <p>We'll reach out when Aura Afloat launches. Until then — stay wavy.</p>
              </div>
            ) : (
              <>
                <div className="waitlist__form-header">
                  <h3 className="waitlist__form-title">Join the Waitlist</h3>
                  <p className="waitlist__form-sub">No spam. Unsubscribe anytime.</p>
                </div>
                <form className="waitlist__form" onSubmit={handleSubmit} noValidate>
                  <div className="waitlist__field">
                    <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                    <input
                      id="waitlist-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                      className={`waitlist__input ${errorMsg ? 'waitlist__input--error' : ''}`}
                      disabled={status === 'loading'}
                      autoComplete="email"
                    />
                    {errorMsg && <p className="waitlist__error">{errorMsg}</p>}
                  </div>
                  <button
                    type="submit"
                    className="waitlist__submit btn-accent"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="waitlist__spinner" />
                        Joining...
                      </>
                    ) : (
                      <>
                        <i className="ph ph-paper-plane-tilt" />
                        Join Waitlist
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
