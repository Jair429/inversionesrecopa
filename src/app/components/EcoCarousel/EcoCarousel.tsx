"use client";

import { dataEcovecinos } from "@/data/dataEcovecinos";
import Image from "next/image";
import Slider from "react-slick";

export function EcoCarousel() {
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
    <>
      <div className="flex justify-center pb-15 bg-[#fbfcf5]">
        <div className="max-w-7xl w-[330px] sm:w-[600px] lg:w-[800px] xl:w-[1000px]">
          <div className="border-b-1 border-green-dark my-2">
            <h2 className="text-4xl text-green-dark lg:text-6xl font-bold lg:pb-5">
              Ecovecinos
            </h2>
          </div>
          <div className="w-full">
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
          </div>
        </div>
      </div>
    </>
  );
}
