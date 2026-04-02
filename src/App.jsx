import Nav from './components/Nav';
import Hero from './components/Hero';
import WaveDivider from './components/WaveDivider';
import WhatItIs from './components/WhatItIs';
import WhoItsFor from './components/WhoItsFor';
import ExperienceGallery from './components/ExperienceGallery';
import WhereSection from './components/WhereSection';
import Pricing from './components/Pricing';
import BookSession from './components/BookSession';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WaveDivider variant="ivory" />
        <WhatItIs />
        <WhoItsFor />
        <WaveDivider variant="teal" />
        <ExperienceGallery />
        <WaveDivider variant="ivory" flip />
        <WhereSection />
        <WaveDivider variant="navy" flip />
        <Pricing />
        <WaveDivider variant="ivory" />
        <BookSession />
      </main>
      <Footer />
    </>
  );
}
