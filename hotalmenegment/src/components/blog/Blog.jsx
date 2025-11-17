import React, { useEffect, useState } from "react";
import "./blog.css"; // Reuse styles

function HotelBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // For now, using dummy static data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // If using JSON server later: fetch("http://localhost:3000/blogs")
        const data = [
          {
            id: 1,
            title: "Welcome to Luxe Hotel",
            date: "2025-11-17",
            content: "Our hotel provides luxury rooms, 24/7 service, and spa facilities."
          },
          {
            id: 2,
            title: "New Spa Opening",
            date: "2025-11-15",
            content: "Relax with our brand-new spa treatments, now available in all packages."
          },
          {
            id: 3,
            title: "Gourmet Dining Experience",
            date: "2025-11-10",
            content: "Enjoy delicious meals prepared by top chefs in our fine dining restaurant."
          }
        ];
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blog posts...</p>;

  return (
    <div className="hotel-management-wrapper">
      <h1>Hotel Management Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelBlog;
