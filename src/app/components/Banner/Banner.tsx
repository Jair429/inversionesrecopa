import Image from "next/image";
import { BannerButton } from "../BannerButton";
import { Navbar } from "../Navbar/Navbar";

export function Banner() {
  return (
    <>
      <section className="py-10 flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-70 bg-[url(/assets/banner.jpg)] bg-top xl:bg-cover">
        <div className="w-[300px] lg:w-[450px]">
          <Image
            src="/assets/Logo-Fundo-Alto-Color.png"
            alt="Overview"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex justify-center flex-wrap w-[300px]">
          <p className="text-justify leading-8 text-green-dark md:text-lg lg:text-xl  pt-5 pb-10">
            Vive en un condominio 100% ecológico con vista al <br />
            <b>Humedal Paraíso y la Campiña de Huacho.</b>
          </p>
          <div className="flex flex-wrap justify-center gap-5 md:flex md:justify-start ">
            <button className="px-8 py-3 lg:my-0 font-semibold text-white bg-green-dark rounded-4xl">
              Contactar a un asesor
            </button>
            <button className="px-8 py-3 font-semibold text-white bg-green-light rounded-4xl">
              Ver mas información
            </button>
          </div>
        </div>
      </section>
      {/* <div className="flex justify-center">
        <BannerButton />
      </div> */}
    </>
  );
}
