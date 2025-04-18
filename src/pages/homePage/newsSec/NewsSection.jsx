import React, { useRef } from "react";
import "./newsSection.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import Sbutton from "../../../components/Utilize/Secbutton/Sbutton";
import NewsCard from "./newsCard/NewsCard";

function NewsSection() {
  const ref = useRef();
  useIntersectionObserver(ref);

  const card = [
    {
      title: "The Design Chronicles: Crafting User Experiences",
      date: "FEBRUARY 6, 2024",
      tags: ["Design", "User Experience"],
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-1.png",
      path: "/",
    },

    {
      title: "Behind the Pixels Stories of Success",
      date: "FEBRUARY 6, 2024",
      tags: ["Design", "User Experience"],
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-2.png",
      path: "/",
    },

    {
      title: "Web Wonders Exploring Digital Frontiers",
      date: "FEBRUARY 6, 2024",
      tags: ["Design", "User Experience"],
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/blog/blog-3.png",
      path: "/",
    },
  ];

  return (
    <section className="news-sec">
      <div className="news-head">
        <h3>OUR BLOG & NEWS</h3>
        <div ref={ref} className="news-title">
          <h2>Our Latest News</h2>
          <Sbutton text="See Services" />
        </div>
      </div>
      <div className="news-cards">
        <NewsCard card={card[0]} />
        <NewsCard card={card[1]} />
        <NewsCard card={card[2]} />
      </div>
    </section>
  );
}

export default NewsSection;
