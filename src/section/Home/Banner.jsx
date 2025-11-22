import React from "react";
import { HashLink } from "react-router-hash-link"; // Import HashLink for smooth scrolling

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        {/* Overlay - Increased opacity slightly for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Step Out, Explore More
          <span className="text-yellow-400 block mt-2">Adventure Awaits</span>
          {/* Fixed typo: "Comming" -> "Coming" */}
          {/* Moved animation only to this span */}
          <span className="text-yellow-400 block mt-2 text-2xl sm:text-4xl md:text-5xl animate-pulse font-medium">
            Coming Soon...
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200">
          Explore breathtaking destinations, create unforgettable memories, and
          experience the world like never before.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Changed to HashLink to scroll to the section instead of just being a button */}
          <HashLink
            smooth
            to="/#weekend-trips"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center"
          >
            Explore Trips
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline ml-2 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </HashLink>

          <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;