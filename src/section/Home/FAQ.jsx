// src/sections/FAQ.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/static_data";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-yellow-500">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know before booking your next Weekend Payana adventure
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left"
                            >
                                <span className="text-lg font-medium text-gray-800">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180 text-yellow-500" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-6 pb-4 text-gray-600 text-base transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
