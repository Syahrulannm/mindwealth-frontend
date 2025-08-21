import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const touchStartX = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  // Mulai swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Swipe close
  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (diffX > 50) {
      // Swipe ke kiri lebih dari 50px → tutup sidebar
      setIsMenuOpen(false);
      touchStartX.current = null;
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`sticky top-0 z-50 py-2 font-sans bg-slate-900 shadow-md`}>
      <div className="container mx-auto px-4 md:px-6  flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-custom flex items-center justify-center">
            <FontAwesomeIcon icon={faBrain} className="w-5 h-5 text-slate-50" />
          </div>
          <h1 className="text-2xl font-bold gradient-text bg-gradient-custom">
            <span className="text-slate-100">Mind</span>Wealth
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-100 text-sm flex justify-center items-center hover:text-sky-600 transition">
            Home
          </Link>
          <Link to="/articles" className="text-gray-100 text-sm flex justify-center items-center hover:text-sky-600 transition">
            Articles
          </Link>
          <Link to="/about" className="text-gray-100 text-sm flex justify-center items-center hover:text-sky-600 transition">
            About
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className=" flex items-center px-3 py-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl transition-smooth">
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden flex items-center dark:text-gray-100 text-gray-800 hover:scale-105 transition-smooth">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>}

      {/* Mobile Navigation */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-primary-800 to-primary-600 px-2 py-4 gap-10 rounded-2xl shadow-lg z-50 transform transition-smooth ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between text-gray-100  px-4 py-2 border-b">
          <h2 className="text-lg font-bold dark:text-gray-200">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>✖</button>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl transition-smooth">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-[8px]">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6l2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>
          <Link to="/articles" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl transition-smooth">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-[8px]">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M16 7h3v4h-3zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17" />
            </svg>
            Article
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl transition-smooth">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mr-[8px]">
              <path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z" />
            </svg>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
