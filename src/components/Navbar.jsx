import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 relative">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">Mentora</Link>

        {/* Hamburger Icon (always visible, aligned right) */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl ml-auto"
        >
          ☰
        </button>
      </div>

      {/* Dropdown menu (shown when hamburger clicked) */}
      {isOpen && (
        <ul className="absolute right-4 mt-2 w-48 bg-gray-800 text-white space-y-2 p-4 shadow-lg z-10">
          <li><Link to="/" onClick={toggleMenu} className="block hover:text-gray-400">Home</Link></li>
          <li><Link to="/how-it-works" onClick={toggleMenu} className="block hover:text-gray-400">How It Works</Link></li>
          <li><Link to="/features" onClick={toggleMenu} className="block hover:text-gray-400">Features</Link></li>
          <li><Link to="/demo" onClick={toggleMenu} className="block hover:text-gray-400">Demo</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="block hover:text-gray-400">About</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



