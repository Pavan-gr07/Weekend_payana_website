import React from 'react'

const CTASection = () => {
  return (
    <div>  
    <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-xl text-black mb-8 opacity-90">
          Join thousands of travelers who have discovered amazing destinations with TripVibe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black hover:bg-gray-800 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Start Planning
            <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8C4 4.8 7.5 2 12 2s8 2.8 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </button>
          <button className="border-2 border-black hover:bg-black hover:text-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section></div>
  )
}

export default CTASection