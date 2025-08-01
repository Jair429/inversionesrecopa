import { dataSections } from "@/data/dataSections";
import Image from "next/image";
import { Social } from "../Social/Social";

export function SectionsHome() {
  return (
    <section className="flex justify-center py-10">
      <article className="max-w-7xl">
        {dataSections.map(({ id, title, image, size }) => (
          <div key={id} className="flex justify-between gap-10">
            <div className="w-[600px]">
              <h2 className="uppercase text-green-dark text-3xl font-bold md:leading-snug md:text-4xl">
                {title}
              </h2>
              <p className=" text-green-dark text-justify text-base pt-5 w-auto md:text-lg">
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
              <Social />
              <p></p>
            </div>
            <article className="w-[600px]">
              <Image
                src={`/assets/${image}.jpg`}
                alt={`${title}`}
                width={size}
                height={size}
                className="shadow-xl rounded-xl"
              />
            </article>
          </div>
        ))}
      </article>
    </section>
  );
}
