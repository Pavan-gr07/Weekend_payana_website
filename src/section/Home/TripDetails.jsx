import React, { useEffect, useState } from "react";
import {
    MapPin,
    Clock,
    Calendar,
    CheckCircle,
    XCircle,
    ChevronDown,
    ChevronUp,
    Mountain,
    AlertTriangle,
    Info
} from "lucide-react";
import natravati_banner from "../../assets/Netravati-Peak.jpeg"

// Embedded MainContainer to ensure no missing dependency errors
const MainContainer = ({ children, className = "" }) => {
    return (
        <section
            className={`py-12 bg-gray-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </section>
    );
};

const TripDetails = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    useEffect(() => {
        window.scroll(0, 0);
        return () => window.scroll(0, 0);
    }, []);
    return (
        <div className="bg-white">
            {/* Hero Section with Background Image */}
            <div className="relative h-[50vh] md:h-[60vh] w-full">
                <img
                    src={natravati_banner}
                    alt="Netravathi Peak"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white">
                    <div className="max-w-7xl mx-auto">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 inline-block">
                            Best Seller
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">
                            Netravathi Peak Trek
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-200">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-yellow-400" /> Chikmagalur, Karnataka
                            </div>
                            <div className="flex items-center gap-1">
                                <Mountain className="w-4 h-4 text-yellow-400" /> 1,500m Elevation
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-yellow-400" /> 2 Days / 1 Night
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MainContainer className="!py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Discover the untouched beauty of the Western Ghats with the
                                Netravathi Peak Trek from Bangalore — one of Karnataka’s most
                                scenic and offbeat weekend treks. Nestled near the Kudremukh range
                                in Chikmagalur, this moderate 12–14 km trail takes you through
                                dense shola forests, misty meadows, and crystal-clear streams
                                before revealing breathtaking 360° views from the summit.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Unlike crowded treks, Netravathi Peak remains peaceful and
                                unspoiled. With Weekend Payana, everything is seamlessly arranged —
                                comfortable transport, authentic stays, guides, permits, and meals.
                            </p>
                        </section>

                        {/* Quick Facts Grid */}
                        <section className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FactItem label="Difficulty" value="Easy to Moderate" />
                                <FactItem label="Trek Distance" value="12–14 km (Round Trip)" />
                                <FactItem label="Distance from Blr" value="~330 km (One Way)" />
                                <FactItem label="Age Limit" value="12 - 50 Years" />
                                <FactItem label="Best Time" value="Sept - March (Post Monsoon)" />
                                <FactItem label="Food" value="Veg & Non-Veg Provided" />
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-yellow-200 ml-3 pl-8 relative">
                                <TimelineItem
                                    day="Day 0"
                                    title="Departure from Bangalore"
                                    details={[
                                        "08:30 PM – Indiranagar: Karachi Bakery",
                                        "08:45 PM – Domlur: Domlur Skywalk",
                                        "09:30 PM – Yeshwanthpur: Metro Station",
                                        "10:00 PM – Goraguntepalya: People Tree Hospital",
                                        "Overnight journey to Chikmagalur in Non-AC Tempo Traveller/Mini Bus."
                                    ]}
                                />
                                <TimelineItem
                                    day="Day 1"
                                    title="Trek, Off-Road & Campfire"
                                    details={[
                                        "Arrive at homestay, freshen up & breakfast.",
                                        "Off-road jeep ride to trek base.",
                                        "Start trek through shola forests & meadows.",
                                        "Reach summit (1,500m), lunch with views.",
                                        "Descend back to homestay.",
                                        "Evening campfire, dinner, music & stargazing."
                                    ]}
                                />
                                <TimelineItem
                                    day="Day 2"
                                    title="Waterfalls & Heritage Visit"
                                    details={[
                                        "Visit Soormane Falls or Kodige Falls.",
                                        "Breakfast & checkout.",
                                        "Stop for self-sponsored lunch (Malnad cuisine).",
                                        "Visit the stunning Belur Temple (Hoysala Architecture).",
                                        "Return to Bangalore by ~11:00 PM."
                                    ]}
                                />
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <section className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" /> Inclusions
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Transport (Tempo Traveller/Mini Bus)",
                                        "Meals: 2 Breakfast, 1 Lunch, 1 Dinner",
                                        "Trip Captain & Guide",
                                        "Shared Homestay/Tent Accommodation",
                                        "Trek Permits & Off-road Jeep Ride",
                                        "First Aid Support"
                                    ].map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" /> Exclusions
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Meals during travel",
                                        "Personal expenses & snacks",
                                        "Jeep for Waterfalls visits",
                                        "Travel/Medical Insurance",
                                        "Any emergency expenses"
                                    ].map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                            <span className="text-red-500 mt-1">×</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* FAQs */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                                        >
                                            <span className="font-semibold text-gray-800">
                                                {faq.question}
                                            </span>
                                            {openFaq === index ? (
                                                <ChevronUp className="w-5 h-5 text-gray-500" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            )}
                                        </button>
                                        {openFaq === index && (
                                            <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-200">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sticky Booking Card & Policies */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Booking Card */}
                            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
                                <div className="mb-4">
                                    <span className="text-gray-500 text-sm line-through">₹4,500</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-gray-900">₹3,499</span>
                                        <span className="text-green-600 font-semibold text-sm">
                                            per person
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                        <Calendar className="w-4 h-4" /> Next Batch: This Weekend
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                        <AlertTriangle className="w-4 h-4" /> 10 Travellers Required
                                    </div>
                                </div>

                                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
                                    Book Now
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-3">
                                    Instant confirmation • Secure payment
                                </p>
                            </div>

                            {/* Things to Carry (Mini List) */}
                            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-blue-500" /> Essentials
                                </h4>
                                <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                                    <li>Backpack (20-30L)</li>
                                    <li>Trekking Shoes (Good Grip)</li>
                                    <li>Water Bottle</li>
                                    <li>Rain Jacket / Poncho</li>
                                    <li>Valid ID Proof</li>
                                </ul>
                            </div>

                            {/* Cancellation Policy */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-3 text-sm">Cancellation Policy</h4>
                                <ul className="text-xs text-gray-600 space-y-2">
                                    <li className="flex justify-between">
                                        <span>&gt; 30 Days</span>
                                        <span className="font-semibold text-green-600">100% Refund</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>15-29 Days</span>
                                        <span className="font-semibold text-yellow-600">50% Refund</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>&lt; 14 Days</span>
                                        <span className="font-semibold text-red-600">No Refund</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </div>
    );
};

// --- Helper Components ---

const FactItem = ({ label, value }) => (
    <div className="flex flex-col">
        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            {label}
        </span>
        <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
);

const TimelineItem = ({ day, title, details }) => (
    <div className="relative">
        <div className="absolute -left-[41px] bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
        <div className="mb-6">
            <span className="text-yellow-600 font-bold text-sm uppercase tracking-wide">
                {day}
            </span>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
            <ul className="list-disc list-outside ml-4 space-y-1">
                {details.map((point, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const faqs = [
    {
        question: "How difficult is the Netravathi Peak Trek?",
        answer:
            "The Netravathi Peak Trek is easy to moderate, ideal for beginners with basic fitness levels. The total trekking distance is around 12–14 km (round trip).",
    },
    {
        question: "What is the best time to do the trek?",
        answer:
            "The best time to trek is from September to March when the weather is cool, the skies are clear, and the surroundings are lush green.",
    },
    {
        question: "Are washrooms available during the trek?",
        answer:
            "Washrooms are available only at the base camp and homestay — not along the trekking trail.",
    },
    {
        question: "Can solo travelers join the trek?",
        answer:
            "Absolutely! Weekend Payana welcomes solo travelers, and many participants join solo to meet new people and make friends.",
    },
    {
        question: "What happens if the trek is canceled due to weather?",
        answer:
            "In case of cancellation due to bad weather or safety concerns, you’ll receive a 100% refund or option to reschedule to another trek.",
    },
];

export default TripDetails;