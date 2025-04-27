import React from 'react';

const CTASection = () => {
  return (
    <section id="cta" className="bg-gray-900 text-white text-center py-16">
      <h2 className="text-4xl font-semibold mb-4 text-gray-100 transition-transform duration-300 ease-in-out">Ready to Level Up Your Communication?</h2>
      <p className="text-xl mb-8 text-gray-100 transition-transform duration-300 ease-in-out">Let Mentora guide you towards better self-awareness and more effective interactions.</p>
      <a href="/demo" className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">Get Started</a>
    </section>
  );
};

export default CTASection;
