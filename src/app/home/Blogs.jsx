"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/data/blogs.json");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to load blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const trimText = (text, length = 100) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xl primaryText uppercase tracking-wider font-semibold">
          Recent Articles
        </p>
        {/* <h2 className="text-4xl font-semibold secondaryText leading-tight">
          Client’s Feedback & Reviews
        </h2> */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 rounded-xl shadow p-4 text-left"
            >
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {trimText(blog.description, 120)}
              </p>
              <button className="primary-btn px-3 py-1 rounded-lg transition-all flex items-center gap-2 group">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
