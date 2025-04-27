import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto py-12">
        <h2 className="text-4xl text-center font-semibold mb-8">Key Features of Mentora</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Real-Time Feedback" description="Instant analysis of your writing tone and suggestions to improve clarity and emotional impact." />
          <FeatureCard title="Cognitive Bias Alerts" description="Identifies and helps you correct common cognitive biases that affect communication." />
          <FeatureCard title="Emotion & Mindset Awareness" description="Recognizes emotional cues in your messages and helps refine your communication for better outcomes." />
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Home;
