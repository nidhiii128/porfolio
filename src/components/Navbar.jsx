import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'About Me', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-black via-purple-900 to-purple-700  py-2 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="text-white border-2 border-white px-4 py-2 uppercase text-sm font-medium hover:bg-white hover:text-blue-800 transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
