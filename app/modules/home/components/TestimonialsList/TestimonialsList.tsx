"use client";

import React from "react";
import { Testimonial } from "../../types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IconUserCircle } from "@tabler/icons-react";

export default function TestimonialsList({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <Swiper
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter:true
      }}
      className="mySwiper"
      loop
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-2 items-center">
              <IconUserCircle size={56} color="white" stroke={1.5} />
              <div className="flex flex-col gap-1">
                <h4 className="bg-gradient-to-tl font-extrabold from-cinder via-violet-red to-black-rose text-transparent bg-clip-text">
                  {testimonial.name}
                </h4>
                <span className="text-white text-xs font-edu italic font-bold">
                  {testimonial.job}
                </span>
              </div>
            </div>
            <div
              className="text-white font-medium"
              dangerouslySetInnerHTML={{
                __html: testimonial.review.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
