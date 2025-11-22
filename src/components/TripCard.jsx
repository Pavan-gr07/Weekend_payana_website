import { ChevronRight, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  return (
    <Link to="/trip-details" className="block h-full">
      <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 relative top-0 hover:-top-1">
        <div className="relative h-56 overflow-hidden">
          <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
            <Clock className="w-3 h-3 text-yellow-500" />
            {trip.duration}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-yellow-600 transition-colors mb-2">{trip.title}</h3>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
            {trip.location}
          </div>
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase font-semibold">Starts at</span>
              <span className="text-lg font-bold text-gray-900">{trip.price}</span>
            </div>
            <div className="bg-yellow-400 group-hover:bg-yellow-500 text-black p-2 rounded-full transition-colors shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;