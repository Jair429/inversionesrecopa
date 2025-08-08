import Image from "next/image";

export function Header() {
  return (
    <header>
      <div className="bg-[#fbfcf5] ">
        <div className="flex justify-center py-10">
          <div className="max-w-7xl">
            <div className="flex justify-center flex-wrap">
              <span className="text-2xl pb-2 text-green-light w-[320px] sm:w-[600px] lg:w-[820px] xl:w-full lg:text-3xl font-bold lg:pb-5">
                Sobre nosotros
              </span>
              <h2 className="text-3xl text-green-dark w-[320px] sm:w-[600px] lg:w-[820px] xl:w-full lg:text-5xl font-bold lg:pb-5">
                ¿Quiénes somos?
              </h2>
            </div>
            <div className="flex justify-center flex-wrap gap-10 py-5">
              <div className="w-[320px] sm:w-[600px] lg:w-[380px] xl:w-[450px]">
                <p className=" text-green-dark text-justify leading-8 text-base w-auto md:text-lg">
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
              <div className="w-[320px] md:w-[500px] lg:w-[400px] xl:w-[500px]">
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
        <article className="flex justify-center pb-10">
          <div className="max-w-7xl w-[320px] md:w-[600px] lg:w-[800px] xl:w-[1000px]">
            <Image
              src="/assets/preventa.png"
              alt="Preventa"
              width={1000}
              height={1000}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </article>
      </div>
    </header>
  );
}
