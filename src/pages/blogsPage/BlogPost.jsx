import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogPost.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const BlogPost = () => {
  const { slug } = useParams();
  const ref = useRef();
  useIntersectionObserver(ref);

  // Dummy blog data - in a real app, this would come from an API or database
  const blogPosts = {
    "design-chronicles-crafting-user-experiences": {
      id: 1,
      title: "The Design Chronicles: Crafting User Experiences",
      subtitle: "A deep dive into the world of user-centered design and creating meaningful digital experiences",
      author: "Sarah Johnson",
      authorRole: "Senior UX Designer",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      date: "February 6, 2024",
      readTime: "8 min read",
      category: "Design",
      tags: ["Design", "User Experience", "UI/UX", "Digital Design"],
      featuredImage: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-1.png",
      content: {
        introduction: "In today's digital landscape, user experience design has become the cornerstone of successful digital products. It's not just about making things look pretty—it's about creating meaningful, intuitive, and delightful experiences that solve real problems for real people.",
        sections: [
          {
            heading: "Understanding User-Centered Design",
            content: "User-centered design is a framework that puts users at the heart of the design process. It involves understanding user needs, behaviors, and pain points through research and testing. This approach ensures that the final product truly serves its intended audience.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
          },
          {
            heading: "The Design Process: From Research to Implementation",
            content: "A successful design process typically follows these key phases: Research and Discovery, where we understand the problem space and user needs; Ideation and Concept Development, where we generate and refine solutions; Prototyping and Testing, where we validate our ideas with real users; and finally, Implementation and Iteration, where we bring the design to life and continuously improve it based on feedback.",
            list: [
              "Conduct thorough user research and analysis",
              "Create user personas and journey maps",
              "Design wireframes and interactive prototypes",
              "Perform usability testing and gather feedback",
              "Iterate and refine based on insights"
            ]
          },
          {
            heading: "Key Principles of Effective UX Design",
            content: "Great user experience design is built on several fundamental principles that guide decision-making throughout the design process.",
            list: [
              "Usability: Make it easy and intuitive to use",
              "Accessibility: Ensure everyone can use your product",
              "Consistency: Maintain familiar patterns and behaviors",
              "Feedback: Provide clear responses to user actions",
              "Error Prevention: Design to prevent mistakes before they happen"
            ]
          },
          {
            heading: "Tools and Technologies Shaping Modern Design",
            content: "The design landscape is constantly evolving with new tools and technologies. From advanced prototyping tools like Figma and Framer to AI-assisted design systems, designers now have unprecedented capabilities to create and iterate on their ideas. Understanding and leveraging these tools can significantly improve both the design process and the final outcome.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop"
          }
        ],
        conclusion: "Creating exceptional user experiences is both an art and a science. It requires empathy, creativity, and analytical thinking. As technology continues to evolve, the fundamental principle remains the same: put users first, and everything else will follow. The best designs are often invisible—they work so well that users never have to think about them."
      }
    },
    "behind-the-pixels-stories-of-success": {
      id: 2,
      title: "Behind the Pixels: Stories of Success",
      subtitle: "Exploring real-world case studies of digital transformation and creative solutions",
      author: "Michael Chen",
      authorRole: "Creative Director",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "February 6, 2024",
      readTime: "12 min read",
      category: "Case Studies",
      tags: ["Design", "Success Stories", "Digital Transformation", "Creative Solutions"],
      featuredImage: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-2.png",
      content: {
        introduction: "Every pixel tells a story. Behind every successful digital product lies a journey of challenges, creativity, and breakthrough moments. Today, we'll explore some remarkable stories that showcase the power of thoughtful design and strategic thinking.",
        sections: [
          {
            heading: "Case Study 1: E-commerce Revolution",
            content: "A traditional retail company approached us with declining sales and an outdated online presence. Their website had a 78% bounce rate and conversion rates below 1%. Through comprehensive user research, we discovered that customers found the navigation confusing and the checkout process overwhelming.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
          },
          {
            heading: "The Transformation Process",
            content: "We redesigned the entire user journey, focusing on simplicity and trust-building elements. The new design featured intuitive navigation, streamlined product pages, and a frictionless checkout process.",
            list: [
              "Reduced checkout steps from 7 to 3",
              "Implemented smart product recommendations",
              "Added real-time inventory updates",
              "Integrated customer reviews and ratings",
              "Optimized for mobile-first experience"
            ]
          },
          {
            heading: "Remarkable Results",
            content: "The results exceeded all expectations. Within six months of launch, the client saw transformative improvements across all key metrics.",
            list: [
              "Conversion rate increased by 340%",
              "Bounce rate decreased to 23%",
              "Average order value increased by 45%",
              "Mobile sales grew by 280%",
              "Customer satisfaction score improved to 4.8/5"
            ]
          },
          {
            heading: "Case Study 2: SaaS Platform Redesign",
            content: "A B2B software company was struggling with user adoption and retention. Despite having powerful features, users found the platform complex and overwhelming. Our challenge was to make enterprise-level functionality accessible to users of all technical levels.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
          }
        ],
        conclusion: "These success stories remind us that behind every pixel is an opportunity to make someone's life easier, more productive, or more enjoyable. Great design isn't just about aesthetics—it's about solving real problems and creating measurable value for businesses and users alike."
      }
    },
    "web-wonders-exploring-digital-frontiers": {
      id: 3,
      title: "Web Wonders: Exploring Digital Frontiers",
      subtitle: "Discovering the latest trends and technologies shaping the future of web development",
      author: "Emma Rodriguez",
      authorRole: "Lead Developer",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "February 6, 2024",
      readTime: "10 min read",
      category: "Technology",
      tags: ["Web Development", "Frontend", "Innovation", "Emerging Technologies"],
      featuredImage: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-3.png",
      content: {
        introduction: "The web development landscape is evolving at breakneck speed. From AI-powered development tools to revolutionary frameworks, we're witnessing a transformation that's reshaping how we build digital experiences. Let's explore the cutting-edge technologies and trends that are defining the future of web development.",
        sections: [
          {
            heading: "The Rise of AI in Web Development",
            content: "Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development process. AI-powered tools are helping developers write better code, optimize performance, and create more personalized user experiences.",
            list: [
              "AI-assisted code generation and completion",
              "Automated testing and bug detection",
              "Intelligent design systems and component generation",
              "Personalized user experience optimization",
              "Advanced analytics and user behavior prediction"
            ]
          },
          {
            heading: "Modern Framework Evolution",
            content: "The JavaScript ecosystem continues to evolve with frameworks that prioritize performance, developer experience, and scalability. From server-side rendering to edge computing, modern frameworks are pushing the boundaries of what's possible on the web.",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
          },
          {
            heading: "Progressive Web Applications (PWAs)",
            content: "PWAs are bridging the gap between web and mobile applications, offering native-like experiences through web technologies. They provide offline functionality, push notifications, and app-like interfaces while maintaining the accessibility and reach of web applications.",
            list: [
              "Offline-first architecture",
              "Push notification support",
              "App-like navigation and interactions",
              "Automatic updates and caching strategies",
              "Cross-platform compatibility"
            ]
          },
          {
            heading: "The Future of Web Performance",
            content: "Performance optimization is becoming increasingly sophisticated with new techniques and tools. From advanced bundling strategies to edge computing, developers have more tools than ever to create lightning-fast web experiences.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
          }
        ],
        conclusion: "The digital frontier is vast and full of possibilities. As we continue to push the boundaries of web technology, the focus remains on creating better, faster, and more accessible experiences for users around the world. The future of web development is bright, and we're excited to be part of this incredible journey."
      }
    }
  };

  // Get the current blog post or show 404
  const currentPost = blogPosts[slug];
  
  if (!currentPost) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-not-found">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="back-to-blogs-btn">
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, post]) => ({ slug: key, ...post }));

  return (
    <div className="blog-post-container">
      {/* Hero Section */}
      <div className="blog-post-hero">
        <div className="blog-post-hero-content">
          <div className="blog-post-breadcrumb">
            <Link to="/">Home</Link>
            <span>→</span>
            <Link to="/blogs">Blog</Link>
            <span>→</span>
            <span>{currentPost.title}</span>
          </div>
          
          <div className="blog-post-category">
            <span>{currentPost.category}</span>
          </div>
          
          <h1 ref={ref} className="blog-post-title animate-on-scroll">
            {currentPost.title}
          </h1>
          
          <p className="blog-post-subtitle">
            {currentPost.subtitle}
          </p>
          
          <div className="blog-post-meta">
            <div className="blog-post-author">
              <img src={currentPost.authorImage} alt={currentPost.author} />
              <div>
                <p className="author-name">{currentPost.author}</p>
                <p className="author-role">{currentPost.authorRole}</p>
              </div>
            </div>
            <div className="blog-post-info">
              <span>{currentPost.date}</span>
              <span>•</span>
              <span>{currentPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="blog-post-featured-image">
        <img src={currentPost.featuredImage} alt={currentPost.title} />
      </div>

      {/* Content */}
      <div className="blog-post-content-wrapper">
        <div className="blog-post-content">
          {/* Introduction */}
          <div className="blog-post-introduction">
            <p>{currentPost.content.introduction}</p>
          </div>

          {/* Content Sections */}
          {currentPost.content.sections.map((section, index) => (
            <section key={index} className="blog-post-section">
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
              
              {section.list && (
                <ul className="blog-post-list">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              
              {section.image && (
                <div className="blog-post-section-image">
                  <img src={section.image} alt={section.heading} />
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="blog-post-conclusion">
            <h2>Conclusion</h2>
            <p>{currentPost.content.conclusion}</p>
          </div>

          {/* Tags */}
          <div className="blog-post-tags">
            <h3>Tags:</h3>
            <div className="tags-container">
              {currentPost.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="blog-post-sidebar">
          <div className="sidebar-section">
            <h3>Share This Post</h3>
            <div className="share-buttons">
              <button className="share-btn facebook">Facebook</button>
              <button className="share-btn twitter">Twitter</button>
              <button className="share-btn linkedin">LinkedIn</button>
              <button className="share-btn copy">Copy Link</button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Table of Contents</h3>
            <ul className="table-of-contents">
              {currentPost.content.sections.map((section, index) => (
                <li key={index}>
                  <a href={`#section-${index}`}>{section.heading}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="related-posts-section">
          <h2>Related Posts</h2>
          <div className="related-posts-grid">
            {relatedPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="related-post-card">
                <div className="related-post-image">
                  <img src={post.featuredImage} alt={post.title} />
                </div>
                <div className="related-post-content">
                  <span className="related-post-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <div className="related-post-tags">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="related-post-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="blog-post-navigation">
        <Link to="/blogs" className="back-to-blogs-btn">
          ← Back to All Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;