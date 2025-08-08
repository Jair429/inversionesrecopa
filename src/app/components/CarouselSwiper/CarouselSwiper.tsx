"use client";

import { dataEcovecinos } from "@/data/dataEcovecinos";
import Image from "next/image";
import Slider from "react-slick";

export function CarouselSwiper() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 10,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    
      <Slider {...settings}>
        {dataEcovecinos.map(({ id, title, image, size }) => (
          <div key={id}>
            <Image
              src={`/assets/ecovecinos/${image}.jpg`}
              alt={title}
              width={size}
              height={size}
              className=" border-white border-4"
            />
          </div>
        ))}
      </Slider>
   
  );
}
