// src/components/BlogCard.jsx

import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-gray-500 text-xs">
                    <span>{blog.author}</span>
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-4 text-yellow-500 font-medium hover:underline text-sm"
                >
                    <button>
                        Read More →
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
