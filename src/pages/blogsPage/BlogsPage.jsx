import React from "react";
import Hero from "../../components/Bloghero/Hero";

const BlogPost = ({ title, content, author, date }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">By {author} | {date}</p>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

const BlogsPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business",
      content: "Artificial Intelligence is transforming industries at an unprecedented rate. From automation to deep learning, businesses are leveraging AI for competitive advantage.",
      author: "John Doe",
      date: "March 1, 2025"
    },
    {
      title: "Understanding Data Analytics",
      content: "Data analytics helps businesses make informed decisions by uncovering trends and insights within large datasets.",
      author: "Jane Smith",
      date: "February 20, 2025"
    },
    {
      title: "How to Improve Cybersecurity in 2025",
      content: "With increasing cyber threats, companies must adopt robust security measures to protect sensitive data and ensure compliance.",
      author: "Alice Johnson",
      date: "February 10, 2025"
    }
  ];

  return (
    <div className="mx-auto space-y-6">
      <Hero />
      <div className="mx-auto max-w-screen-2xl py-16 space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
      <section className="space-y-6">
        {blogPosts.map((post, index) => (
          <BlogPost 
            key={index} 
            title={post.title} 
            content={post.content} 
            author={post.author} 
            date={post.date} 
          />
        ))}
      </section>
      </div>
    </div>
  );
};

export default BlogsPage;
