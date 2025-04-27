import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-3xl font-bold">Mentora</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/how-it-works" className="hover:text-gray-400">How It Works</Link></li>
          <li><Link to="/features" className="hover:text-gray-400">Features</Link></li>
          <li><Link to="/demo" className="hover:text-gray-400">Demo</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
