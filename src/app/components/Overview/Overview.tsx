import { dataSocialNetworks } from "@/data/dataSocialNetworks";
import Image from "next/image";
import Link from "next/link";

export function Overview() {
  return (
    <>
      <div id="overview" className="px-5 py-10 md:px-24 md:py-10">
        <div className=" md:grid md:grid-cols-2 md:gap-10">
          <div>
            {/* <h1 className="uppercase text-green-dark text-6xl font-bold md:leading-snug md:text-7xl">
               Inversiones <br /> Recopa
            </h1>
            <span className=" text-green-light text-5xl font-bold md:leading-snug md:text-5xl">
              Econstruyendo <br /> tu futuro
            </span> */}
            <span className="uppercase text-green-light text-6xl font-bold md:leading-snug md:text-4xl">
               Sobre nosotros
            </span>
            <br />
            <span className="uppercase text-green-dark text-5xl font-bold md:leading-snug md:text-6xl">
              ¿Quíenes Somos?
            </span>
            <p className=" text-green-dark text-[19px] mt-5 w-[700px]">
              {" "}
              <span className="uppercase"><b>Inversiones Recopa SAC</b></span> es una empresa dedicada al desarrollo de proyectos de{" "}
              <b>viviendas eco-sostenibles</b> y comercialización de terrenos
              ubicados a <a>10 minutos antes de Huacho</a>, a la altura del{" "}
              <b>KM 136</b> de la <b>Panamericana Norte</b>, y a 10 minutos de
              Playa El Paraíso y el Humedal Lagunas El Paraíso.
            </p>
            <div className="flex justify-start gap-6 my-10 py-3 rounded-xl">
              {dataSocialNetworks.map(({ id, icon, name, link }) => (
                <Link href={link} key={id} target="_blank" rel="noreferrer">
                  <Image
                    src={`/svg/${icon}.svg`}
                    alt={name}
                    width={40}
                    height={40}
                  />
                </Link>
              ))}
            </div>
            <div>
              <button className="px-8 py-3 mr-10 mb-5 text-white bg-green-dark rounded-xl">
                Contactar con un asesor
              </button>
            </div>
          </div>
          <div className="flex justify-center w-145 md:w-auto lg:w-auto">
            <Image
              src="/assets/preventa.png"
              alt="Overview"
              width={1200}
              height={400}
              className="shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
