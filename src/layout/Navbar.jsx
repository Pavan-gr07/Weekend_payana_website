import React, { useState, useEffect } from "react";
import logo from "../assets/weekend_payana_logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const weekendTrips = [
    { name: "Mountain Retreats", href: "#mountain" },
    { name: "Beach Getaways", href: "#beach" },
    { name: "City Escapes", href: "#city" },
    { name: "Adventure Tours", href: "#adventure" },
  ];

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link>
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src={logo} alt="Weekend Payana" className="w-12 h-12 mr-3" />
                <div className="text-black font-bold text-xxl">
                  Weekend Payana
                </div>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* <a
                href="#home"
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                Home
              </a> */}
              <HashLink to="./#banner" smooth className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black">
                Home
              </HashLink>

              {/* Weekend Trips Dropdown */}
              {/* <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold flex items-center transition-all duration-300 hover:bg-black"
                >
                  Weekend Trips
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                    <div className="py-2">
                      {weekendTrips.map((trip, index) => (
                        <a
                          key={index}
                          href={trip.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-black transition-colors duration-200"
                        >
                          {trip.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div> */}

              <a
                href="#blogs"
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                Blogs
              </a>
              <a
                href="#about"
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-black"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-black hover:text-white p-2">
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
