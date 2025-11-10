import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/service', label: 'Service' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/20 shadow-lg overflow-hidden">
      {/* Neon Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-cyan-500/20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/20 blur-2xl animate-pulse delay-500"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-red-500 rounded-full blur-[1px] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" aria-label="Homepage">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2 select-none relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
            >
              <circle cx="32" cy="32" r="30" stroke="#06b6d4" strokeWidth="4" />
              <path d="M20 32c0-6 5-11 11-11s11 5 11 11-5 11-11 11" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 21c1 3 2 3 4 0" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              <path d="M45 24c-2 4-2 8 0 12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 32h6M10 38h8M14 26h6" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-gradient bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 text-transparent">
              Digiflux Service
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium tracking-wide relative z-10">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative px-1 py-1 hover:text-teal-400 transition-colors ${
                  location.pathname === to
                    ? 'text-teal-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:rounded-full'
                    : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl p-2 rounded-md hover:bg-white/10 transition relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX className="drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" /> : <HiOutlineMenu className="drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        aria-hidden={!isOpen}
        className={`md:hidden bg-black/90 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0'
        } relative z-10`}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-300 font-medium tracking-wide">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded hover:text-teal-400 transition-colors ${
                  location.pathname === to ? 'text-teal-400' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
