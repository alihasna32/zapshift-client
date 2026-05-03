import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import amazon from "../../../assets/brands/amazon.png"
import amazon_vector from "../../../assets/brands/amazon_vector.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import star from "../../../assets/brands/star.png"
import start_people from "../../../assets/brands/start_people.png"
import { Autoplay } from 'swiper/modules';
export const Brands = () => {
  return (
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src={amazon} alt=""/></SwiperSlide>
        <SwiperSlide><img src={amazon_vector} alt=""/></SwiperSlide>
        <SwiperSlide><img src={casio} alt=""/></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt=""/></SwiperSlide>
        <SwiperSlide><img src={star} alt=""/></SwiperSlide>
        <SwiperSlide><img src={start_people} alt=""/></SwiperSlide>
      </Swiper>
  )
}
