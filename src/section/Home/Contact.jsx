"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success / error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-red-50 py-16" id="contact">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
                {/* Left: Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Have questions about our trips, packages, or custom plans? Reach out
                        to us anytime. We’ll be happy to assist you!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <Mail className="text-yellow-500" /> support@weekendpayana.com
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <Phone className="text-yellow-500" /> +91  9449334629
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <MapPin className="text-yellow-500" /> NO. 417 JAKKUR LAYOUT, 11TH CROSS NEAR AYYAPPA TEMPLE YELAHANKA BENGALORE-560064
                            © 2025 Weekend Payana. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-2xl p-8 space-y-5"
                >
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition disabled:opacity-60"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {/* Status Message */}
                    {status === "success" && (
                        <p className="text-green-600 text-sm text-center">
                            ✅ Message sent successfully! We’ll get back soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-600 text-sm text-center">
                            ❌ Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
