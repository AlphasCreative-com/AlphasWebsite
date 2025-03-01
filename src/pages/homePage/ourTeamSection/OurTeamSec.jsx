import React, { useRef } from "react";
import "./ourTeamSec.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

function OurTeamSec() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  const swiperRef = useRef(null);

  const bgimg =
    "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/team/tm-bg.png";
  const members = [
    {
      id: 1,
      name: "Alexander Carter",
      title: "Web Developer",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/team/tm-1.png",
    },
    {
      id: 2,
      name: "Emma Anderson",
      title: "UX Designer",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/team/tm-2.png",
    },

    {
      id: 3,
      name: "Alexander Carter",
      title: "Web Developer",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/team/tm-1.png",
    },

    {
      id: 4,
      name: "Emma Anderson",
      title: "UX Designer",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/team/tm-2.png",
    },

    {
      id: 5,
      name: "Alexander Carter",
      title: "Web Developer",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/team/tm-1.png",
    },

    {
      id: 6,
      name: "Emma Anderson",
      title: "UX Designer",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/team/tm-2.png",
    },
  ];

  return (
    <section ref={ref} className="ourteam-sec">
      <div className="ourteam-head">
        <h3>TEAM MEMBERS</h3>
        <div className="ourteam-title">
          <h2>Our digital creator</h2>
        </div>
      </div>
      <div className="member-cards-box">
        <div className="member-cards">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            scrollbar={{
              el: ".custom-swiper-scrollbar",
            }}
            loop={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            spaceBetween={20}
            effect="fade"
            speed={800}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 , spaceBetween: 30},
              1536: { slidesPerView: 3, spaceBetween: 35},
              1786: { slidesPerView: 3, spaceBetween: 40},
            }}
          >
            {members.map((member, index) => (
              <SwiperSlide>
                <div key={index} className="member-card">
                  <div
                    className="member-img"
                    style={{ backgroundImage: `url(${bgimg})` }}
                  >
                    <img src={member.img} alt="bg" />
                    <div className="member-img-overlay">
                      <p>Let’s Connect</p>
                      <p>Fb. In. Tw. Be.</p>
                    </div>
                  </div>

                  <div className="member-info">
                    <p>{member.title}</p>
                    <h3>{member.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-buttons">
              <button onClick={() => swiperRef.current.slidePrev()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="40"
                  viewBox="0 0 81 40"
                  fill="none"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="17.5"
                    transform="matrix(-0.993296 0.115598 0.115598 0.993296 35.7588 0)"
                    stroke="#0C0C25"
                    stroke-dasharray="2 2"
                  ></circle>
                  <path d="M81 20L24 20" stroke="#0C0C25"></path>
                  <path
                    d="M20.96 23.96V14.96L13.96 18.96L20.96 23.96Z"
                    fill="#0C0C25"
                  ></path>
                </svg>
              </button>
              <button onClick={() => swiperRef.current.slideNext()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="40"
                  viewBox="0 0 81 40"
                  fill="none"
                >
                  <circle
                    cx="60.9995"
                    cy="19.9601"
                    r="17.5"
                    transform="rotate(6.6381 60.9995 19.9601)"
                    stroke="#0C0C25"
                    stroke-dasharray="2 2"
                  ></circle>
                  <path d="M-0.000244141 19.96H56.9998" stroke="#0C0C25"></path>
                  <path
                    d="M59.9998 23.96V14.96L66.9998 18.96L59.9998 23.96Z"
                    fill="#0C0C25"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="custom-swiper-scrollbar">
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurTeamSec;
