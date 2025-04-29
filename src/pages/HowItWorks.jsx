import React from 'react';

const HowItWorks = () => {
  return (
    <div className="font-sans">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-semibold text-center mb-6">How Mentora Works</h1>
        <p className="text-xl text-center mb-12">Mentora uses advanced AI and psychology principles to analyze your communication patterns and help you develop self-awareness. Here's how it works:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Step 1: Text Analysis</h2>
            <p className="text-lg">Mentora scans your written messages for emotional tone, cognitive biases, and communication style. It understands how your words might impact others.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Step 2: Real-Time Feedback</h2>
            <p className="text-lg">It provides instant feedback, suggesting improvements based on NLP, emotional tone, and biases. This ensures your communication is clearer and more effective.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="/demo" className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">Try the Demo</a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
