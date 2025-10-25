"use client";

import { dataEcovecinos } from "@/data/dataEcovecinos";
import Image from "next/image";
import Slider from "react-slick";

export function EcoCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 10,
    autoplay: true,
    speed: 40000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="px-5">
            <div className="py-5">
              <h2 className="text-4xl text-green-dark lg:text-6xl font-bold lg:pb-5">
                Ecovecinos
              </h2>
            </div>
            <div>
              <Slider {...settings}>
                {dataEcovecinos.map(({ id, title, image, size }) => (
                  <div key={id}>
                    <Image
                      src={`/assets/ecovecinos/${image}.jpg`}
                      alt={title}
                      width={size}
                      height={size}
                      className="rounded-lg px-1"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
