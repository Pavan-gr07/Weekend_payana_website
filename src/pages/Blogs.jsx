// src/pages/blog/index.jsx

import { blogs } from "../data/static_data";
import BlogCard from "../section/blogs/BlogCard";

const BlogPage = () => {
  return (
    <main className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Our <span className="text-yellow-500">Blog</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
