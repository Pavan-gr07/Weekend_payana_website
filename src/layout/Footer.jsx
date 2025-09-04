import logo from "../assets/weekend_payana_logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg> */}
                <img src={logo} alt="Weekend Payana" className="w-12 h-12 mr-3" />
                <span className="text-2xl font-bold text-yellow-400">Weekand Payana</span>
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
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Mysore</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Gokarna</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Otty</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Goa</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:weekendpayana@gmail.com"
                    className="text-yellow-500 hover:underline"
                  >
                    weekendpayana@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+919108560381"
                    className="text-yellow-500 hover:underline"
                  >
                    +91 91085 60381
                  </a>
                </li>
                <li>
                 Alternate Phone:{" "}
                  <a
                    href="tel:+917406887985"
                    className="text-yellow-500 hover:underline"
                  >
                    +91 74068 87985
                  </a>
                </li>
                <li>
                  Address:{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=NO.+417+JAKKUR+LAYOUT,+11TH+CROSS+NEAR+AYYAPPA+TEMPLE+YELAHANKA+BENGALORE-560064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:underline"
                  >
                    NO. 417 JAKKUR LAYOUT, 11TH CROSS NEAR AYYAPPA TEMPLE YELAHANKA
                    BENGALORE-560064
                  </a>
                </li>
              </ul>

            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Weekend Payana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
