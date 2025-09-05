import { Star } from "lucide-react";

const TestimonialCard = ({ data }) => {
    return (
        <div
            key={data?.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-auto"
        >
            {/* Avatar */}
            <img
                src={data?.image}
                alt={data?.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500 shadow-md mb-4"
            />

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">{data?.name}</h3>
            {/* <p className="text-sm text-gray-500 mb-3">{data?.role}</p> */}

            {/* Rating */}
            <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < data?.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                    />
                ))}
            </div>

            {/* Comment */}
            <p className="text-gray-600 italic leading-relaxed">“{data?.text}”</p>
        </div>
    );
};

export default TestimonialCard;
