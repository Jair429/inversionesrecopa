import Image from "next/image";

export function Header() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-10 bg-[#fbfcf5] ">
      {/* <div className="flex flex-wrap justify-center gap-20 py-20 bg-left bg-[url(/assets/banner.jpg)] "> */}
      <div>
        <h1 className=" text-4xl text-green-dark lg:text-7xl xl:text-8xl font-bold ">
          <span className="text-text-xl lg:text-2xl xl:text-3xl">
            Inversiones
            <br />
          </span>
          Recopa
          <span className="block pt-2 text-green-light text-xl xl:text-2xl">
            Econstruyendo tu futuro
          </span>
        </h1>
        <div className="w-[320px] sm:w-[600px] lg:w-[800px]">
          <p className="text-base text-justify leading-8 text-green-dark pt-10 md:text-lg">
            {" "}
            <span className="uppercase">
              <b>Inversiones Recopa SAC</b>
            </span>{" "}
            es una empresa dedicada al desarrollo de proyectos de{" "}
            <b>viviendas eco-sostenibles</b> y comercialización de terrenos
            ubicados a <a>10 minutos antes de Huacho</a>, a la altura del{" "}
            <b>KM 136</b> de la <b>Panamericana Norte</b>, y a 10 minutos de
            Playa El Paraíso y el Humedal Lagunas El Paraíso.
          </p>
        </div>
      </div>
      <div className="w-[320px] md:w-[600px] lg:w-[800px] ">
        <Image
          src="/assets/overview.jpg"
          alt="Overview"
          width={1500}
          height={1500}
        />
      </div>
    </div>
  );
}
