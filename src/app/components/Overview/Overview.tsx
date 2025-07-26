import { dataSocialNetworks } from "@/data/dataSocialNetworks";
import Image from "next/image";
import Link from "next/link";

export function Overview() {
  return (
    <>
      <div id="overview" className="p-5 md:px-24 md:py-20 bg-[#f4f6f5]">
        <div className="items-center md:grid md:grid-cols-2 md:gap-10">
          <div>
            <h1 className="uppercase text-green-dark text-4xl font-bold md:leading-snug md:text-6xl">
              Inversiones <br /> Recopa sac
            </h1>
            <p className="mt-5 text-[#6C7F77]">
              {" "}
              Es una empresa dedicada al desarrollo de proyectos de{" "}
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
          <div className="flex justify-center bg-green-dark md:w-[700px] h-auto">
            <Image
              src="/assets/overview.jpg"
              alt="Overview"
              width={700}
              height={200}
              className="opacity-65"
            />
          </div>
        </div>
      </div>
    </>
  );
}
