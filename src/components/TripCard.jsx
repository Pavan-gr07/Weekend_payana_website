import React from "react";

const TripCard = ({ trip }) => {
  return (
    <div
      key={trip.id}
      className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-64">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
          {trip.price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-black">{trip.title}</h3>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="ml-1 text-gray-600">{trip.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{trip.duration}</span>
        </div>
        <button className="w-full bg-black hover:bg-gray-800 cursor-pointer text-yellow-400 py-3 rounded-lg font-semibold transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TripCard;
