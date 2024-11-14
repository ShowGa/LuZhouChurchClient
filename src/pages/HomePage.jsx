import React from "react";

import { heroImages } from "./consts/consts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import "./css/pagesCSS.css";

const HomePage = () => {
  SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="c-hero_section_container h-[50rem] max-md:h-[35rem]">
          {/* swiper container */}
          <div className="c-hero_swiper-container">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              effect="fade"
            >
              {heroImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={image.image} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* content container */}
          <div className="c-hero_content_container">
            <div>
              <h1></h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

// swiper suit the container height

// swiper should be absolutely positioned

// create the Biblical scriptures cards component later

// create the  cards component later
