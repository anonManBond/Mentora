import React from 'react';
import Navbar from '../components/Navbar';

const featuresList = [
  {
    title: 'Emotion Detection',
    description: 'Mentora identifies emotional undertones in your writing and provides empathy-based communication tips.',
  },
  {
    title: 'Cognitive Bias Detection',
    description: 'Mentora flags logical fallacies and bias in language to help you stay objective.',
  },
  {
    title: 'Subconscious Nudges Awareness',
    description: 'Mentora reveals how words, colors, and formatting may affect others psychologically.',
  },
  {
    title: 'Social Media Filter',
    description: 'Preview how your message may be interpreted by diverse audiences before posting.',
  },
  {
    title: 'Daily Mind Snapshot',
    description: 'A dashboard reflecting your recent tone, mindset shifts, and personal growth suggestions.',
  },
  {
    title: 'Custom Style Coaching',
    description: 'Tailored tone and style suggestions based on your personality and communication goals.',
  },
];

const Features = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-semibold text-center mb-10">Mentora’s Advanced Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
