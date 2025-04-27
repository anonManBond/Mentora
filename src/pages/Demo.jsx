import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Demo = () => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleAnalyze = () => {
    // Fake analysis logic (can be connected to real AI backend later)
    if (input.toLowerCase().includes('hate') || input.toLowerCase().includes('angry')) {
      setFeedback("⚠️ Emotional Alert: Try softening your tone for better reception.");
    } else {
      setFeedback("✅ Balanced: Your tone and wording seem clear and positive.");
    }
  };

  return (
    <div className="font-sans">
      <Navbar />
      <div className="container mx-auto py-12 px-4 max-w-2xl">
        <h1 className="text-3xl font-semibold text-center mb-6">Mentora Live Demo</h1>
        <p className="text-center mb-8">Enter a sentence to see Mentora’s AI feedback on your communication tone and bias.</p>
        <textarea
          rows={4}
          className="w-full p-4 border border-gray-300 rounded mb-4"
          placeholder="Type something you'd post or message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Analyze Message
        </button>
        {feedback && <div className="mt-6 p-4 bg-yellow-100 text-yellow-900 rounded">{feedback}</div>}
      </div>
    </div>
  );
};

export default Demo;
