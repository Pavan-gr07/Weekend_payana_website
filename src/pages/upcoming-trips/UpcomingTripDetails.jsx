
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
    Info,
    ArrowLeft,
    Star,
    Users
} from "lucide-react";


const TimelineItem = ({ day, title, points }) => (
    <div className="relative pl-8 pb-8 last:pb-0 border-l-2 border-yellow-200 ml-3">
        <div className="absolute -left-[9px] top-0 bg-yellow-500 w-4 h-4 rounded-full border-2 border-white shadow-sm"></div>
        <div className="mb-2">
            <span className="text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
                {day}
            </span>
            <h4 className="text-lg font-bold text-gray-900 mt-1">{title}</h4>
        </div>
        <ul className="space-y-2 mt-2">
            {points.map((point, index) => (
                <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-yellow-500 mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
                    <span>{point}</span>
                </li>
            ))}
        </ul>
    </div>
);


export const UpcomingTripDetails = ({ trip, onBack }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!trip) return null;

    return (
        <div className="bg-white min-h-screen animate-in fade-in zoom-in duration-300">
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[60vh] w-full">
                <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>

                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="absolute top-6 left-4 md:left-8 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full transition-all"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white">
                    <MainContainer>
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 inline-block">
                            {trip.tag}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            {trip.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-200">
                            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                <MapPin className="w-4 h-4 text-yellow-400" /> {trip.location}
                            </div>
                            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                <Mountain className="w-4 h-4 text-yellow-400" /> {trip.elevation}
                            </div>
                            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                <Clock className="w-4 h-4 text-yellow-400" /> {trip.duration}
                            </div>
                        </div>
                    </MainContainer>
                </div>
            </div>

            <MainContainer className="!py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {trip.description}
                            </p>
                        </section>

                        {/* Quick Facts Grid */}
                        <section className="bg-yellow-50/50 rounded-2xl p-6 border border-yellow-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Info className="w-5 h-5 text-yellow-600" /> Quick Facts
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <FactItem label="Difficulty" value={trip.difficulty} />
                                <FactItem label="Trek Dist." value={trip.distance} />
                                <FactItem label="Age Limit" value="12 - 50 Years" />
                                <FactItem label="Best Time" value="Sept - March" />
                                <FactItem label="Food" value="Veg / Non-Veg" />
                                <FactItem label="Stay" value="Homestay / Tent" />
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
                            <div className="space-y-2">
                                {trip.itinerary.map((dayItem, index) => (
                                    <TimelineItem
                                        key={index}
                                        day={dayItem.day}
                                        title={dayItem.title}
                                        points={dayItem.points}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <section className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" /> Inclusions
                                </h3>
                                <ul className="space-y-2">
                                    {trip.inclusions.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                            <span className="text-green-500 font-bold">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" /> Exclusions
                                </h3>
                                <ul className="space-y-2">
                                    {trip.exclusions.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                            <span className="text-red-500 font-bold">×</span> {item}
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
                                {trip.faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
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

                    {/* Right Column: Sticky Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
                                <div className="mb-4">
                                    <span className="text-gray-500 text-sm line-through">₹{trip.originalPrice}</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-gray-900">₹{trip.price}</span>
                                        <span className="text-green-600 font-semibold text-sm">per person</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                        <Calendar className="w-4 h-4 text-blue-500" /> Next Batch: {trip.nextBatch}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                        <AlertTriangle className="w-4 h-4 text-orange-500" /> {trip.required} Slots Left
                                    </div>
                                </div>

                                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
                                    Book Now
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-3">
                                    Instant confirmation • Secure payment
                                </p>
                            </div>

                            {/* Policies Summary */}
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

