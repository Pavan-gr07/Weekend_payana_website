import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { galleryImages } from "../../data/static_data";
import MainContainer from "../../components/MainContainer";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <MainContainer>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                    Photo <span className="text-yellow-500">Gallery</span>
                </h2>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryImages.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full rounded-xl shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition duration-300"
                            onClick={() => setSelectedImage(src)}
                            whileHover={{ y: -5 }}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative max-w-3xl w-full px-4">
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="rounded-xl shadow-lg w-full max-h-[80vh] object-contain"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-6 text-white bg-black/50 p-2 rounded-full hover:bg-black transition"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </MainContainer>
    );
};

export default Gallery;
