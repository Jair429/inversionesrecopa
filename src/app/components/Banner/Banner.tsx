import Image from "next/image";
import { BannerButton } from "../BannerButton";
import { Navbar } from '../Navbar/Navbar';
import { Social } from "../Social/Social";

export function Banner() {
  return (
    <>
      <section className=" flex flex-wrap justify-center  gap-5 md:gap-10 xl:gap-70 bg-[url(/assets/banner.jpg)] bg-top xl:bg-cover">
        <div className="flex justify-center flex-wrap pt-20 lg:pt-5 w-[300px] h-[500px] ">
          <h1 className="text-7xl text-green-dark md:text-8xl lg:text-9xl font-bold ">
            <span className="text-2xl md:text-3xl lg:text-4xl">
              Inversiones
              <br />
            </span>
            Recopa
            <span className="block pt-2 lg:pt-7 text-green-light text-2xl md:text-3xl lg:text-4xl">
              Econstruyendo tu futuro
            </span>
          <div >
            <Social />
          </div>
          </h1>
        </div>
      </section>
    </>
  );
}
