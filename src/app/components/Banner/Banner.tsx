import Image from "next/image";
import { BannerButton } from "../BannerButton";
import { Navbar } from '../Navbar/Navbar';

export function Banner() {
  return (
    <>
      <section className="flex justify-center bg-[url(/assets/banner2.jpg)] bg-no-repeat bg-top bg-cover">
        <div className=" max-w-7xl py-10">
      <Navbar/>
          <div className=" lg:w-7xl flex justify-between pb-5">
            <div>
              <span className="text-green-light text-3xl">Proyecto</span>
              <h1 className="text-green-dark text-6xl font-bold">
                Fundo Alto <br />{" "}
                <span className="text-green-light">Paraíso</span>
              </h1>
              <p className="text-[#475b63] text-base w-[500px] pt-5 pb-10">
                Vive en un condominio 100% ecológico con vista al <br />
                <b>Humedal Paraíso y la Campiña de Huacho.</b>
              </p>
              <div className="flex gap-10">
                <button className="px-8 py-3 font-semibold text-white bg-green-dark rounded-4xl">
                  Contactar a un asesor
                </button>
                <button className="px-8 py-3 font-semibold text-green-dark bg-green-light rounded-4xl">
                  Ver mas información
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/assets/Logo-Fundo-Alto-Color.png"
                alt="Overview"
                width={300}
                height={300}
              />
            </div>
          </div>
            <BannerButton />
        </div>
      </section>
    </>
  );
}

{
  /* <div className="">
  <div className="">
    <div className="">
      {/* <Image
      src="/assets/bannerHome.jpg"
      alt="Overview"
      width={1280}
      height={700}
    /> */
}
{
  /* <div className="bg-[url(/assets/overview.jpg)] bg-cover pt-50"> */
}
{
  /* <div className="bg-linear-to-r from-green-light via-lime-200 to-white pt-50 ">
        <div className="max-w-7xl">

        <div className="flex flex-col">
          <span className="text-green-dark text-4xl font-bold">Proyecto</span>
          <h1 className="text-green-dark text-6xl font-bold">Fundo Paraíso</h1>
          <p className="text-[#475b63] text-base w-[500px]">
            Vive en un condominio 100% ecológico con vista al <b>Humedal Paraíso y la Campiña de Huacho.</b>
          </p>
          <BannerButton />
        </div>
        </div>
      </div>
    </div>
  </div>
  <BannerButton />
</div> */
}
{
  /* <section className="bannerImg bg-repeat bg-cover bg-center">
  <div className="blackOverlay w-full h-screen flex items-end">
    <div className="container mx-auto mb-40">
      <h1 className="text-white uppercase font-bold text-7xl">Never Stop
        <br />
        Exploring World
      </h1>
      <p className="text-white w-full max-w-2xl my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro animi enim impedit corrupti, nobis fugit maxime quam voluptas consequatur praesentium cupiditate excepturi quia nostrum temporibus amet alias quis. Laboriosam?</p>
      
     
      <a href="" className="bg-green-dark text-white uppercase font-semibold px-6 py-3 rounded-md transition-all inline-block hover:scale-105 ">
        Get Started
      </a>
    </div>
    <BannerButton />
  </div>
</section> */
}
