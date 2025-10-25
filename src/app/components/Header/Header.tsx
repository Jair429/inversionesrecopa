import Image from "next/image";

export function Header() {
  return (
    <header>
      <div>
        <div className="flex justify-center py-10">
          <div className="max-w-7xl w-full">
            <div className="flex justify-center flex-wrap">
              <div className="pb-10 lg:pb-20">
              <video width={1280} controls playsInline className="rounded-2xl border-gray-50 border-1 p-5">
                  <source src="/assets/video/banner.mp4" type="video/mp4" />
                </video>
              </div>
              <span className="text-2xl pb-2 text-green-light w-[320px] sm:w-[600px] lg:w-[820px] xl:w-full lg:text-3xl font-bold lg:pb-5">
                Sobre nosotros
              </span>
              <h2 className="text-3xl text-green-dark w-[320px] sm:w-[600px] lg:w-[820px] xl:w-full lg:text-5xl font-bold lg:pb-5">
                ¿Quiénes somos?
              </h2>
            </div>
            <div className="flex justify-center flex-wrap lg:flex lg:justify-between px-5 lg:px-0 py-5 gap-5">
              <div className=" lg:w-[500px] xl:w-[450px] rounded-2xl border-gray-50 border-1 p-5 ">
                <p className=" text-green-dark text-justify text-base w-auto md:text-lg  leading-7">
                  <span className="uppercase">
                    <b>Inversiones Recopa SAC</b>
                  </span>{" "}
                  es una empresa dedicada al desarrollo de proyectos de{" "}
                  <b>viviendas eco-sostenibles</b> y comercialización de
                  terrenos ubicados a <a>10 minutos antes de Huacho</a>, a la
                  altura del <b>KM 136</b> de la <b>Panamericana Norte</b>, y a
                  10 minutos de Playa El Paraíso y el Humedal Lagunas El
                  Paraíso.
                </p>
              </div>
              <div className="w-[320px] lg:w-[440px] lg:h-[120px] rounded-2xl border-gray-50 border-1 p-5">
                <Image
                  src="/assets/logo3.png"
                  alt="Overview"
                  width={1919}
                  height={1078}
                />
              </div>
            </div>
          </div>
        </div>
        <article className="flex justify-center px-5 pb-10">
          <div className="max-w-7xl w-full">
            <div className="w-full">
              <Image
                src="/assets/Fundo-Alto-Banner.jpg"
                alt="Preventa"
                width={1500}
                height={1500}
                className=" rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </article>
      </div>
    </header>
  );
}
