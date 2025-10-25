import Image from "next/image";
import { Accordion } from "../components/Accordion";
import { dataMisionVision } from "@/data/dataMisionVision";
import { dataNuestrosPilares } from "@/data/dataNuestrosPilares";
import { dataGerencia } from "@/data/dataGerencia";
import { dataAreaComercial } from "@/data/dataAreaComercial";
import { Social } from "../components/Social/Social";

export default function Nosotros() {
  return (
    <section>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full ">
          <div className="p-5">
            <Image
              src={`/assets/Cabecera-Web-Nosotros-1.png`}
              alt="Cabecera Nosotros"
              width={1200}
              height={1200}
              className="rounded-lg"
            />
            <p className=" py-5">
              <span className="text-green-dark font-bold">
                INVERSIONES RECOPA SAC
              </span>{" "}
              es una empresa con gran proyección dedicada al desarrollo de
              proyectos de viviendas eco-sostenibles con materiales de gran
              calidad y comercialización de terrenos.
            </p>
            <section className="pt-5">
              <h2 className="text-green-dark text-4xl  uppercase font-bold pb-5">
                Misión y Visión
              </h2>
              <div className="text-justify leading-7 px-3 pb-4 mb-5 border-1 border-gray-100 rounded-2xl">
                {dataMisionVision.map(({ title, content, id }) => (
                  <Accordion key={id} title={title} content={content} />
                ))}
              </div>
            </section>
            <section className="pt-5">
              <h2 className="text-green-dark text-4xl  uppercase font-bold pb-5">
                Nuestros Pilares
              </h2>
              <div className="text-justify leading-7 px-3 pb-4 mb-5 border-1 border-gray-100 rounded-2xl">
                {dataNuestrosPilares.map(({ title, content, id }) => (
                  <Accordion key={id} title={title} content={content} />
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-green-dark text-4xl uppercase font-bold pb-10">
                Nuestro equipo
              </h2>
              <h3 className="text-green-dark text-3xl uppercase font-bold">
                Gerencia
              </h3>
              <div className="flex flex-wrap justify-center xl:flex xl:justify-start py-5">
                {dataGerencia.map(({ id, name, post, image, size }) => (
                  <div
                    key={id}
                    className="p-3 m-3 border-gray-100 border-1 flex flex-col justify-center items-center rounded-2xl w-[300px] md:w-[330px] lg:w-[380px]"
                  >
                    <Image
                      src={`/assets/equipo/gerencia/${image}.png`}
                      alt={name}
                      height={size}
                      width={size}
                      className="pb-5"
                    />
                    <p className="text-green-dark text-2xl uppercase font-bold text-center pb-2">
                      {name}
                    </p>
                    <p className="text-gray-400 text-center">{post}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-green-dark text-3xl uppercase font-bold">
                Área comercial
              </h3>
              <div className="flex flex-wrap justify-center xl:flex xl:justify-start py-5">
                {dataAreaComercial.map(({ id, name, post, image, size }) => (
                  <div
                    key={id}
                    className="p-3 m-3 border-gray-100 border-1 flex flex-col justify-center items-center rounded-2xl w-[300px] md:w-[330px] lg:w-[380px]"
                  >
                    <Image
                      src={`/assets/equipo/area-comercial/${image}`}
                      alt={name}
                      height={size}
                      width={size}
                      className="pb-5"
                    />
                    <p className="text-green-dark text-2xl uppercase font-bold text-center pb-2">
                      {name}
                    </p>
                    <p className="text-gray-400 text-center">{post}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="flex justify-center items-center">
              <video width={1000} autoPlay controls playsInline loop>
                <source
                  src="/assets/video/Equipo-comercial-Video.mp4"
                  type="video/mp4"
                />
              </video>
            </section>
            <div className="flex justify-center py-5">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
