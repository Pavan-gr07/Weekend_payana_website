import React, { useState } from "react";
import logo from "../assets/weekend_payana_logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 1. Add state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Added 'to' prop to Link to prevent errors */}
          <Link to="/" onClick={closeMobileMenu}>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src={logo}
                  alt="Weekend Payana"
                  className="w-12 h-12 mr-3"
                />
                <div className="text-black font-bold text-xxl">
                  Weekend Payana
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <HashLink
                to="/#banner"
                smooth
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                Home
              </HashLink>

              <Link
                to="/blogs"
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                Blogs
              </Link>

              {/* Changed 'a' to HashLink for smooth scrolling if these are on the same page, 
                  otherwise keep as 'a' or Link */}
              <HashLink
                to="/#about"
                smooth
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                About Us
              </HashLink>

              <HashLink
                to="/#contact"
                smooth
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                Contact Us
              </HashLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:text-white p-2 focus:outline-none"
            >
              {/* Icon changes based on open/closed state */}
              {isMobileMenuOpen ? (
                // Close (X) Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Area */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-yellow-500 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <HashLink
              to="/#banner"
              smooth
              onClick={closeMobileMenu}
              className="text-black hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              Home
            </HashLink>

            <Link
              to="/blogs"
              onClick={closeMobileMenu}
              className="text-black hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              Blogs
            </Link>

            <HashLink
              to="/#about"
              smooth
              onClick={closeMobileMenu}
              className="text-black hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              About Us
            </HashLink>

            <HashLink
              to="/#contact"
              smooth
              onClick={closeMobileMenu}
              className="text-black hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300"
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;