import React from 'react';

const About = () => {
  return (
    <div className="font-sans">
      <div className="container mx-auto py-12 px-6 max-w-3xl">
        <h1 className="text-4xl font-semibold mb-6">About Mentora</h1>
        <p className="text-lg mb-6">
          <strong>Mentora</strong> was born from a desire to go beyond traditional chatbots. While most bots only respond — Mentora listens, learns, and reflects your inner mind. Built with insights from psychology, NLP, cognitive science, and design strategy, Mentora acts as a personal communication mirror.
        </p>
        <p className="text-lg mb-6">
          In an era where digital presence shapes perception, Mentora helps you:
        </p>
        <ul className="list-disc list-inside mb-6 text-lg space-y-2">
          <li>Understand the emotional tone of your writing</li>
          <li>Detect subconscious patterns and cognitive biases</li>
          <li>Craft messages that engage the subconscious mind with sensory cues to evoke deep emotional connections</li>
          <li>Reflect on your mindset over time</li>
        </ul>
        <p className="text-lg">
          The project is built by a multi-disciplinary thinker passionate about behavioral design, communication psychology, and digital tools that enhance human insight. 
          This is just the beginning — Mentora will evolve with AI and you.
        </p>
      </div>
    </div>
  );
};

export default About;
