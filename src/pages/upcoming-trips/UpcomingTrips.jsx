import { useState } from "react";
import {
    MapPin,
    Clock,

    Mountain,

} from "lucide-react";

// --- MOCK DATA (The "Database") ---
const TRIPS_DATA = [
    {
        id: 1,
        title: "Netravathi Peak Trek",
        tag: "Best Seller",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070&auto=format&fit=crop", // Placeholder image
        location: "Chikmagalur, Karnataka",
        elevation: "1,500m",
        duration: "2 Days / 1 Night",
        price: 3499,
        originalPrice: 4500,
        description: "Discover the untouched beauty of the Western Ghats with the Netravathi Peak Trek. Nestled near the Kudremukh range, this moderate trail takes you through shola forests and misty meadows.",
        nextBatch: "This Weekend",
        required: 10,
        difficulty: "Easy to Moderate",
        distance: "12–14 km",
        itinerary: [
            {
                day: "Day 0",
                title: "Departure from Bangalore",
                points: [
                    "08:30 PM – Indiranagar: Karachi Bakery",
                    "09:30 PM – Yeshwanthpur: Metro Station",
                    "Overnight journey to Chikmagalur."
                ]
            },
            {
                day: "Day 1",
                title: "Trek, Off-Road & Campfire",
                points: [
                    "Reach homestay, fresh up & breakfast.",
                    "Start trek through shola forests.",
                    "Reach summit (1,500m), lunch with views.",
                    "Evening campfire & dinner."
                ]
            },
            {
                day: "Day 2",
                title: "Waterfalls & Heritage",
                points: [
                    "Visit Soormane Falls.",
                    "Visit Belur Temple.",
                    "Return to Bangalore by 11:00 PM."
                ]
            }
        ],
        inclusions: ["Transport", "Meals (2B, 1L, 1D)", "Guide", "Stay", "Permits"],
        exclusions: ["Lunch on Day 2", "Personal expenses"],
        faqs: [
            { question: "How difficult is it?", answer: "Easy to Moderate, good for beginners." },
            { question: "Is it safe for solo travelers?", answer: "Yes, absolutely safe and fun." }
        ]
    },
    {
        id: 2,
        title: "Gokarna Beach Trek",
        tag: "Trending",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb5689?q=80&w=2070&auto=format&fit=crop",
        location: "Gokarna, Karnataka",
        elevation: "Sea Level",
        duration: "2 Days / 1 Night",
        price: 4299,
        originalPrice: 5500,
        description: "Experience the unique combination of trekking and beaches. Walk across 5 beautiful beaches (Belekan, Paradise, Half Moon, Om, and Kudle) and witness a stunning sunset.",
        nextBatch: "Next Friday",
        required: 12,
        difficulty: "Easy",
        distance: "8 km",
        itinerary: [
            {
                day: "Day 0",
                title: "Departure",
                points: ["08:00 PM – Pickups start in Bangalore.", "Overnight journey."]
            },
            {
                day: "Day 1",
                title: "The 5 Beach Trek",
                points: [
                    "Freshen up at campsite.",
                    "Trek from Belekan to Om Beach.",
                    "Water activities (Self Sponsored).",
                    "Campfire by the beach."
                ]
            },
            {
                day: "Day 2",
                title: "Vibhooti Falls & Fort",
                points: [
                    "Visit Vibhooti Waterfalls.",
                    "Explore Mirjan Fort.",
                    "Return to Bangalore."
                ]
            }
        ],
        inclusions: ["Transport", "Beachside Tents", "Meals", "Guide"],
        exclusions: ["Water sports", "Sunday Lunch"],
        faqs: [
            { question: "Can we swim?", answer: "Yes, at designated safe zones." },
            { question: "Is alcohol allowed?", answer: "No, strictly no alcohol during the trek/commute." }
        ]
    },
    {
        id: 3,
        title: "Kudremukh Peak Trek",
        tag: "Adventure",
        image: "https://images.unsplash.com/photo-1623868615155-70365b210214?q=80&w=1964&auto=format&fit=crop",
        location: "Chikmagalur, Karnataka",
        elevation: "1,894m",
        duration: "2 Days / 1 Night",
        price: 3999,
        originalPrice: 4800,
        description: "Known as the 'Horse Face' peak, this is the 3rd highest peak in Karnataka. A strict eco-zone, this trek offers rolling green hills as far as the eye can see.",
        nextBatch: "Sat-Sun",
        required: 8,
        difficulty: "Moderate to Difficult",
        distance: "22 km",
        itinerary: [
            {
                day: "Day 0",
                title: "Departure",
                points: ["09:00 PM – Start from Bangalore."]
            },
            {
                day: "Day 1",
                title: "Summit Day",
                points: [
                    "Early morning forest office entry.",
                    "Trek 22km up and down.",
                    "Pack lunch at the peak.",
                    "Return to homestay."
                ]
            },
            {
                day: "Day 2",
                title: "Sightseeing",
                points: ["Visit Samse Tea Estate.", "Belur Temple.", "Return journey."]
            }
        ],
        inclusions: ["Transport", "Forest Permits", "Homestay", "Meals"],
        exclusions: ["Personal expenses", "Insurance"],
        faqs: [
            { question: "Is it tough?", answer: "Yes, endurance is required for 22km." },
            { question: "Are leeches there?", answer: "Yes, especially during monsoon/post-monsoon." }
        ]
    }
];

// --- REUSABLE COMPONENTS ---

const MainContainer = ({ children, className = "" }) => (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </section>
);

const FactItem = ({ label, value }) => (
    <div className="flex flex-col bg-white p-3 rounded-lg border border-yellow-100 shadow-sm">
        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
            {label}
        </span>
        <span className="text-sm font-medium text-gray-900 line-clamp-1">{value}</span>
    </div>
);



// --- COMPONENT 1: TRIP CARD (Used in the Listing) ---
const TripCard = ({ trip, onClick }) => {
    return (
        <div
            onClick={() => onClick(trip)}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer flex flex-col h-full"
        >
            {/* Image Area */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {trip.tag}
                    </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center text-white text-xs gap-3">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {trip.duration}</span>
                        <span className="flex items-center gap-1"><Mountain className="w-3 h-3" /> {trip.difficulty}</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {trip.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-1 text-yellow-500" />
                        {trip.location}
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {trip.description}
                    </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-gray-400 line-through">₹{trip.originalPrice}</span>
                        <div className="text-lg font-bold text-gray-900">₹{trip.price}</div>
                    </div>
                    <button className="bg-yellow-50 text-yellow-700 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENT 2: REUSABLE TRIP DETAILS (The generic page) ---


// --- MAIN APP COMPONENT (The Orchestrator) ---
const UpcomingTrips = () => {
    // State to manage views: 'listing' or 'details'
    const [view, setView] = useState('listing');
    const [selectedTrip, setSelectedTrip] = useState(null);

    // Handler to open a trip
    const handleTripSelect = (trip) => {
        setSelectedTrip(trip);
        setView('details');
    };

    // Handler to go back to list
    const handleBack = () => {
        setSelectedTrip(null);
        setView('listing');
        window.scrollTo(0, 0);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
            {/* Conditional Rendering based on View State */}
            {view === 'listing' ? (
                <>
                    {/* Listing Header / Hero */}
                    <div className="bg-slate-900 text-white py-16 px-4 mb-8">
                        <div className="max-w-7xl mx-auto text-center">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Explore the Unexplored</h1>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Join our community of travelers and experience the best trekking destinations
                                in Karnataka. Curated experiences, expert guides, and memories for a lifetime.
                            </p>
                        </div>
                    </div>

                    {/* Listing Grid */}
                    <MainContainer className="pb-16">
                        <div className="flex items-center gap-2 mb-8">
                            <Mountain className="text-yellow-500 w-6 h-6" />
                            <h2 className="text-2xl font-bold text-gray-800">Upcoming Trips</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {TRIPS_DATA.map((trip) => (
                                <TripCard
                                    key={trip.id}
                                    trip={trip}
                                    onClick={handleTripSelect}
                                />
                            ))}
                        </div>
                    </MainContainer>
                </>
            ) : (
                <TripDetails
                    trip={selectedTrip}
                    onBack={handleBack}
                />
            )}
        </div>
    );
};

export default UpcomingTrips;