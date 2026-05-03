import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewsCard } from "./ReviewsCard";

export const Reviews = ({ reviewsPromise }) => {
  const Reviews = use(reviewsPromise);
  console.log(Reviews);
  return (
    <div className="my-24">
        <div className="text-center mb-4">
            <h3 class="text-3xl text-center font-bold my-8">Review</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit harum, alias sed tenetur magni itaque amet suscipit, adipisci minima, facere vero quae blanditiis voluptas perferendis nulla deserunt laudantium porro.</p>
        </div>
      <Swiper
      loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '100%',
          depth: 600,
          modifier: 0.30,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
        Reviews.map(review => <SwiperSlide key={review.id}>
            <ReviewsCard review={review}></ReviewsCard>
        </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};
