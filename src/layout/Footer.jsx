const Footer = () => {
  return (
    <div>
       <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-2xl font-bold text-yellow-400">TripVibe</span>
              </div>
              <p className="text-gray-400">
                Creating unforgettable travel experiences for adventurers worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#trips" className="hover:text-yellow-400 transition-colors">Weekend Trips</a></li>
                <li><a href="#blogs" className="hover:text-yellow-400 transition-colors">Blogs</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Europe</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Asia</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Americas</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Africa</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@tripvibe.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Travel St, Adventure City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TripVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
