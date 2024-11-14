import React from "react";

import { heroImages } from "./consts/consts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motions";

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
            <div className="c-hero_content_text_container w-[50%] max-md:w-[80%]">
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                className="text-8xl max-md:text-4xl"
                viewport={{ once: true }}
              >
                God's Word
              </motion.h1>
              <motion.h3
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                className="text-3xl max-md:text-xl"
                viewport={{ once: true }}
              >
                For Every Person
              </motion.h3>
              <hr className="w-full my-4 border-white" />
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                className="text-lg max-md:text-sm"
                viewport={{ once: true }}
              >
                The Bible is the ultimate source of truth and guidance for every
                person. It offers profound insights into the nature of God, the
                human experience, and the purpose of life.
              </motion.p>
              <button className="font-bold border-2 rounded-full px-4 py-2 mt-2 hover:border-orange-500 duration-300">
                參與我們
              </button>
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

// framer motion check on another project
