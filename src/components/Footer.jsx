import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Mentora. All rights reserved.</p>
        <div className="space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/about" className="hover:underline">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
