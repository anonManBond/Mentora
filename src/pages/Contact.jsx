import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitted! I will get back to you soon.');
  };

  return (
    <div className="font-sans">
      <div className="container mx-auto py-12 px-6 max-w-lg">
        <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
        <p className="mb-6">Have a suggestion or want to collaborate? Drop a message!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Your Name" required className="w-full p-3 border rounded" />
          <input type="email" placeholder="Your Email" required className="w-full p-3 border rounded" />
          <textarea rows="5" placeholder="Your Message" required className="w-full p-3 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-green-700">{status}</p>}
        <div className="mt-6">
          <p>Or reach me directly:</p>
          <div className="mt-2 space-x-4">
            <a href="https://linkedin.com" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:you@example.com" className="text-blue-600 hover:underline">Email</a>
            <a href="https://github.com/yourusername" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
