import { useEffect, useRef } from 'react';
import './ExperienceGallery.css';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80&auto=format&fit=crop',
    alt: 'Morning yoga session on yacht deck at sunrise',
    caption: 'Morning Light',
    sub: 'Sunrise · Reformer Flow · 75 min',
  },
  {
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80&auto=format&fit=crop',
    alt: 'Woman doing yoga on boat deck at golden hour',
    caption: 'Sunset Flow',
    sub: 'Golden Hour · Breathwork · 60 min',
  },
  {
    src: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&q=80&auto=format&fit=crop',
    alt: 'Group wellness retreat on yacht deck',
    caption: 'The Celebration',
    sub: 'Private Group · 90 min · Champagne Toast',
  },
  {
    src: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=80&auto=format&fit=crop',
    alt: 'Calm ocean view from yacht at Biscayne Bay',
    caption: 'The Bay at Dawn',
    sub: 'Biscayne Bay · Open Water · Stillness',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80&auto=format&fit=crop',
    alt: 'Luxury yacht interior with ocean view',
    caption: 'Inner Calm',
    sub: 'Meditation · Breathwork · 45 min',
  },
];

export default function ExperienceGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const imgRefs = useRef([]);

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

  // Parallax effect on images as they scroll into view
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const scrollLeft = track.scrollLeft;
      imgRefs.current.forEach((img, i) => {
        if (!img) return;
        const offset = (scrollLeft - i * 300) * 0.05;
        img.style.transform = `translateX(${offset}px) scale(1.08)`;
      });
    };
    const track = trackRef.current;
    if (track) track.addEventListener('scroll', handleScroll, { passive: true });
    return () => { if (track) track.removeEventListener('scroll', handleScroll); };
  }, []);

  // Drag-to-scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      isDown = true;
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onMouseLeave = () => { isDown = false; track.style.cursor = 'grab'; };
    const onMouseUp = () => { isDown = false; track.style.cursor = 'grab'; };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.8;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mousemove', onMouseMove);
    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="experience-gallery" ref={sectionRef} id="experience">
      <div className="container">
        <div className="experience-gallery__header reveal">
          <span className="section-eyebrow">The Experience</span>
          <h2 className="experience-gallery__title">Life on the Water</h2>
          <div className="section-divider" />
        </div>
      </div>

      {/* Full-bleed track */}
      <div className="experience-gallery__track" ref={trackRef}>
        <div className="experience-gallery__spacer" />
        {photos.map((photo, i) => (
          <div className="experience-gallery__card reveal" key={i}>
            <div className="experience-gallery__img-wrap">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                ref={el => imgRefs.current[i] = el}
              />
              <div className="experience-gallery__overlay">
                <span className="experience-gallery__caption">{photo.caption}</span>
                <span className="experience-gallery__sub">{photo.sub}</span>
              </div>
              <div className="experience-gallery__corner experience-gallery__corner--tl" />
              <div className="experience-gallery__corner experience-gallery__corner--br" />
            </div>
          </div>
        ))}
        <div className="experience-gallery__spacer" />
      </div>

      <div className="container experience-gallery__footer reveal">
        <p className="experience-gallery__note">
          <i className="ph ph-hand-grabbing" />
          Drag to explore
        </p>
        <button className="btn-primary" onClick={scrollToWaitlist}>
          <i className="ph ph-arrow-right" />
          Reserve Your Session
        </button>
      </div>
    </section>
  );
}
