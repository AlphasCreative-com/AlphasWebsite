import React from "react";
import "./newsCard.css";

function NewsCard({card}) {
  return (
    <div className="news-card ">
      <div className="news-card-content ">
        <div className="news-card-img">
          <img src={card.img} alt="" />
        </div>

        <p className="news-card-date">{card.date}</p>

        <h3 className="news-card-title">
          <a href={card.path}>{card.title}</a>
        </h3>

        <div className="news-card-tags">
          {card.tags.map((tag, index) => (
            <p key={index} className="news-card-tag">{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
