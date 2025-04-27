import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero hero-bg text-white text-center py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-100 transition-transform duration-300 ease-in-out">Welcome to Mentora</h1>
        <p className="text-xl mb-6 text-gray-100 transition-transform duration-300 ease-in-out">Your AI assistant for improving communication, self-awareness, and emotional intelligence.</p>
        <a href="#cta" className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">Try It Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
