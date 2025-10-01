import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Bloghero/Hero";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import usePageTitle from "../../hooks/usePageTitle";
import "./BlogsPage.css";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-content">
        <div className="blog-card-category">
          <span>{post.category}</span>
        </div>
        <p className="blog-card-date">{post.date}</p>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-author">
          <img src={post.authorImage} alt={post.author} />
          <div>
            <p className="author-name">{post.author}</p>
            <p className="author-role">{post.authorRole}</p>
          </div>
        </div>
        <div className="blog-card-tags">
          {post.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="blog-card-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const BlogsPage = () => {
  usePageTitle("Blogs");
  const ref = useRef();
  useIntersectionObserver(ref);

  const blogPosts = [
    {
      slug: "design-chronicles-crafting-user-experiences",
      title: "The Design Chronicles: Crafting User Experiences",
      excerpt: "A deep dive into the world of user-centered design and creating meaningful digital experiences that solve real problems for real people.",
      author: "Sarah Johnson",
      authorRole: "Senior UX Designer",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      date: "February 6, 2024",
      category: "Design",
      tags: ["Design", "User Experience", "UI/UX", "Digital Design"],
      image: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-1.png"
    },
    {
      slug: "behind-the-pixels-stories-of-success",
      title: "Behind the Pixels: Stories of Success",
      excerpt: "Exploring real-world case studies of digital transformation and creative solutions that drove remarkable business results.",
      author: "Michael Chen",
      authorRole: "Creative Director",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "February 6, 2024",
      category: "Case Studies",
      tags: ["Design", "Success Stories", "Digital Transformation", "Creative Solutions"],
      image: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-2.png"
    },
    {
      slug: "web-wonders-exploring-digital-frontiers",
      title: "Web Wonders: Exploring Digital Frontiers",
      excerpt: "Discovering the latest trends and technologies shaping the future of web development and digital experiences.",
      author: "Emma Rodriguez",
      authorRole: "Lead Developer",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "February 6, 2024",
      category: "Technology",
      tags: ["Web Development", "Frontend", "Innovation", "Emerging Technologies"],
      image: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-3.png"
    },
    {
      slug: "future-of-ai-in-business",
      title: "The Future of AI in Business",
      excerpt: "Artificial Intelligence is transforming industries at an unprecedented rate. Discover how businesses are leveraging AI for competitive advantage.",
      author: "David Park",
      authorRole: "AI Specialist",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "March 1, 2024",
      category: "Technology",
      tags: ["Artificial Intelligence", "Machine Learning", "Business Strategy"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
      slug: "understanding-data-analytics",
      title: "Understanding Data Analytics",
      excerpt: "Data analytics helps businesses make informed decisions by uncovering trends and insights within large datasets. Learn the fundamentals.",
      author: "Lisa Wang",
      authorRole: "Data Analyst",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      date: "February 20, 2024",
      category: "Analytics",
      tags: ["Data Analytics", "Business Intelligence", "Data Science"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      slug: "cybersecurity-best-practices-2024",
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "With increasing cyber threats, companies must adopt robust security measures to protect sensitive data and ensure compliance with regulations.",
      author: "Robert Kim",
      authorRole: "Security Expert",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      date: "February 10, 2024",
      category: "Security",
      tags: ["Cybersecurity", "Data Protection", "Security Best Practices"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
    },
    {
      slug: "mobile-app-design-trends",
      title: "Mobile App Design Trends for 2024",
      excerpt: "Explore the latest mobile app design trends that are shaping user experiences and defining the future of mobile interfaces.",
      author: "Maria Santos",
      authorRole: "Mobile Designer",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      date: "January 25, 2024",
      category: "Mobile Design",
      tags: ["Mobile Design", "App Development", "UI Trends"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
    },
    {
      slug: "building-scalable-web-applications",
      title: "Building Scalable Web Applications",
      excerpt: "Learn the essential principles and best practices for creating web applications that can grow with your business needs.",
      author: "James Wilson",
      authorRole: "Full-Stack Developer",
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      date: "January 15, 2024",
      category: "Development",
      tags: ["Web Development", "Scalability", "Architecture"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="blogs-page">
      <Hero />
      <div className="blogs-content">
        <div className="blogs-header">
          <div ref={ref} className="blogs-title animate-on-scroll">
            <h1>Latest Blog Posts</h1>
            <p>Discover insights, trends, and expert knowledge from our team</p>
          </div>
        </div>
        
        <div className="blogs-grid">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        <div className="blogs-pagination">
          <button className="pagination-btn">← Previous</button>
          <div className="pagination-numbers">
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
          </div>
          <button className="pagination-btn">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
