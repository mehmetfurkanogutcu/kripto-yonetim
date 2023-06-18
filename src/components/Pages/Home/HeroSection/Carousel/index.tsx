"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper";

const HeroSectionCarousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="/images/image-1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image-2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/image-3.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSectionCarousel;
