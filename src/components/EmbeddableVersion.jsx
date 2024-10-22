import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';

const EmbeddableVersion = () => {
  return (
    <div className="embeddable-version">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default EmbeddableVersion;