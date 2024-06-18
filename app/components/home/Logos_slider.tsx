"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const LogosSlider: React.FC = () => {

  let data = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    },
  ];

  return (
    <section className="w-full border-y-2 border-gray-200">
      <div className=" sm:h-[10vw] h-[30vw]">
        <ul className="sm:h-[10vw] h-[30vw] w-full flex items-center">
          <Swiper
            autoplay={{ delay: 3000 }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {data.map(({ id, img }) => (
              <SwiperSlide className="sm:w-[5vw] h-auto flex items-center justify-center" key={id}>
                <Image alt="logo" src={img} width={500} height={500} className=" w-auto sm:h-[3vw] h-[10vw]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default LogosSlider;
