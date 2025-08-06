import { dataSections } from "@/data/dataSections";
import Image from "next/image";
import { Social } from "../Social/Social";

export function SectionsHome() {
  return (
    <section>
      <article className="max-w-7xl">
        {dataSections.map(({ id, title, image, size }) => (
          <div key={id}>
            <div className="flex flex-col">
              <div className="text-center md:pb-10">
                <h2 className="uppercase text-green-dark text-4xl lg:text-7xl xl:text-8xl font-bold md:leading-snug ">
                  <span className="text-green-light text-2xl lg:text-3xl xl:text-4xl">
                    Sobre Nosotros
                  </span>{" "}
                  <br />
                  ¿Quiénes somos?
                </h2>
              </div>
              <div className="flex flex-wrap justify-center md:flex md:justify-around md:items-center">
                <div className="w-[330px] lg:w-[450px] xl:w-[650px]">
                  <p className="text-base text-justify leading-8 text-green-dark py-10 md:py-0 w-auto md:text-lg">
                    {" "}
                    <span className="uppercase">
                      <b>Inversiones Recopa SAC</b>
                    </span>{" "}
                    es una empresa dedicada al desarrollo de proyectos de{" "}
                    <b>viviendas eco-sostenibles</b> y comercialización de
                    terrenos ubicados a <a>10 minutos antes de Huacho</a>, a la
                    altura del <b>KM 136</b> de la <b>Panamericana Norte</b>, y
                    a 10 minutos de Playa El Paraíso y el Humedal Lagunas El
                    Paraíso.
                  </p>
                </div>
                <div>
                  <article className="w-[300px] lg:w-[450px] pb-5">
                    <Image
                      src={`/assets/${image}.png`}
                      alt={`${title}`}
                      width={size}
                      height={size}
                    />
                  </article>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
