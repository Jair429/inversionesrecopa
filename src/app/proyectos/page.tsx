"use client";

import { dataParametrosConstruccion } from "@/data/dataParametrosConstruccion";
import Slider from "react-slick";
import Image from "next/image";
import { dataEtapas } from "@/data/dataEtapas";
import { AccordionEtapas } from "../components/AccordionEtapas";
import { Social } from '../components/Social/Social';

export default function Proyecto() {
  const settings = {
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="p-5">
            <h2 className="text-green-dark text-4xl font-bold text-center py-10">
              Fundo Alto Paraíso
            </h2>
            <section className="flex justify-center items-center pb-10">
              <video controls src="/assets/video/FundoAltoProyectos.mp4">
                <source
                  src="/assets/video/FundoAltoProyectos.mp4"
                  type="video/mp4"
                />
              </video>
            </section>
            <div>
              <h3 className="text-green-dark text-xl font-bold pb-5">
                Más de 1400 lotes divididos en 5 etapas con:
              </h3>
              <p className="text-gray-500">
                {" "}
                <b className="underline">Áreas comunes:</b> Canchas de grass
                sintético, piscinas, biohuertos, parques estratégicamente
                distribuidos, club house, zona de parrilla, zona de juegos para
                niños, áreas recreativas y más.
              </p>
              <br />
              <p className="text-gray-500">
                {" "}
                <b className="underline">Áreas comunes:</b> Espacios destinados
                al comercio, para abastecer productos y servicios por
                emprendedores locales.
              </p>
              <br />
              <p className="text-gray-500">
                {" "}
                <b className="underline">Servicios 100% ecológicos:</b>Paneles
                solares, biogestores ecológicos y agua subterránea de entrega
                gratuita.
              </p>
            </div>
            <div className="pt-10">
              <h2 className="text-green-dark text-4xl font-bold pb-5 uppercase">
                Parámetros de construcción
              </h2>
              <p className="text-gray-500">
                {" "}
                <b className="underline">Lotes:</b>Desde 140m2 a 300m2.
              </p>
              <br />
              <p className="text-gray-500">
                {" "}
                <b className="underline">Áreas </b>Construcción máxima permitida
                hasta un 70% quedando la diferencia como área verde.
              </p>
              <br />
              <p className="text-gray-500">
                {" "}
                <b className="underline">Altura:</b>Máximo 6m de altura,
                equivalente a 2 pisos.
              </p>
              <br />
              <p className="text-gray-500">
                {" "}
                <b className="underline">Materiales ecológicos:</b>Bambú, fibra
                cemento, ladrillo ecológico y madera.
              </p>
            </div>
            <div className="flex flex-wrap md:flex justify-around py-10 ">
              <Image
                src={`/assets/parametros-de-construccion/tamano-de-lotes.jpg`}
                alt="Tamaño de Lotes"
                width={600}
                height={600}
                className="rounded-lg md:w-[220px] lg:w-[300px] xl:w-[350px]"
              />
              <Image
                src={`/assets/parametros-de-construccion/area-de-construccion.jpg`}
                alt="Área de construcción"
                width={600}
                height={600}
                className="rounded-lg md:w-[220px] lg:w-[300px] xl:w-[350px]"
              />

              <div className="w-[350px] md:w-[220px] lg:w-[300px] xl:w-[350px] border-gray-50 border-1 rounded-2xl p-3 ">
                <Slider {...settings}>
                  {dataParametrosConstruccion.map(
                    ({ id, title, image, size }) => (
                      <div key={id}>
                        <Image
                          src={`/assets/parametros-de-construccion/${image}.jpg`}
                          alt={title}
                          width={size}
                          height={size}
                          className="rounded-lg px-1"
                        />
                      </div>
                    )
                  )}
                </Slider>
              </div>
            </div>
            <section>
              <h2 className="uppercase text-4xl font-bold text-green-dark pb-5">
                Distribución y características del Proyecto
              </h2>
              <span className="uppercase text-2xl font-bold text-green-dark">
                Macroplan o Plan Maestro
              </span>
              <div className="pb-5 border-b-1">
                <Image
                  src={`/assets/distribucion/fundo_alto_paraiso_huacho.png`}
                  alt="Macroplan o Plan Maestro"
                  width={1000}
                  height={1000}
                  className="p-5"
                />
              </div>
              <h2 className="uppercase text-green-dark text-2xl font-bold py-10">
                Etapas
              </h2>
              <div className="text-justify leading-7 px-3 pb-4 mb-5 border-1 border-gray-100 rounded-2xl">
                {dataEtapas.map(({ title, image, id, size }) => (
                  <AccordionEtapas
                    key={id}
                    title={title}
                    image={image}
                    size={size}
                  />
                ))}
              </div>
            </section>
            <section className="pb-5">
              <h2 className="text-green-dark text-4xl font-bold pb-5 uppercase">
                Ubicación
              </h2>
              <div className="flex flex-wrap justify-center gap-10 xl:gap-50 pb-10">
                <div>
                  <h3 className="uppercase text-2xl font-bold text-green-light pb-5">
                    Cómo llegar
                  </h3>
                  <div className="w-[300px] text-justify lg:w-[450px]">
                    <p className="pb-3">
                      <b>FUNDO ALTO PARAÍSO</b> se encuentra en el <b>Km 136</b>{" "}
                      de la Panamericana Norte.
                    </p>
                    <p className="pb-3">
                      A 5 minutos del Peaje de Huacho, frente a las Playas
                      Paraíso y Cocoy.
                    </p>
                    <p>
                      Además tenemos una hermosa vista del{" "}
                      <b>Humedal Lagunas El Paraíso</b> (Reserva Natural
                      Protegida), y de la <b>Campiña de Huacho</b>.
                    </p>
                  </div>
                </div>
                <div className="w-[300px] lg:w-[400px]">
                  <Image
                    src={`/assets/como-llegar.jpg`}
                    alt="Ubicaciòn"
                    width={1000}
                    height={1000}
                    className="rounded-2xl border-gray-50 border-1 p-5"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-10 xl:gap-50">
                <div>
                  <h3 className="uppercase text-2xl font-bold text-green-light pb-5">
                    Accesos
                  </h3>
                  <div className="w-[300px] lg:w-[450px] text-justify">
                    <p className="pb-3">
                      Nos encontramos muy conectados ya que cualquier vehículo
                      que vaya por la Panamericana Norte pasa por nuestro
                      proyecto.
                    </p>
                    <p className="pb-3">
                      Así mismo, en un futuro mediato se tendrá el{" "}
                      <b>Tren de Cercanías (Barranca - Ica)</b> , que pasara por
                      fuera del proyecto.
                    </p>
                    <p>
                      Más adelante tendremos acceso a la{" "}
                      <b> Carretera Interoceánica</b> desde la ciudad de
                      Chancay, a solo 30 minutos de distancia.
                    </p>
                  </div>
                </div>
                <div className="w-[300px] lg:w-[400px] ">
                  <Image
                    src={`/assets/accesos.jpg`}
                    alt="Ubicaciòn"
                    width={1000}
                    height={1000}
                    className="rounded-2xl border-gray-50 border-1 p-5"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-10 xl:gap-50 py-10">
                <div>
                  <h3 className="uppercase text-2xl font-bold text-green-light pb-5">
                    Lugares turísticos
                  </h3>
                  <div className="w-[300px] lg:w-[450px] text-justify">
                    <p className="pb-3">
                      <span className="font-bold text-green-light">
                        Centros culturales:
                      </span>{" "}
                      Castillo de Chancay, Lomas de Lachay, Caral.
                    </p>
                    <p className="pb-3">
                      <span className="font-bold text-green-light">
                        Playas:
                      </span>{" "}
                      Paraíso, Cochoy, Caleta Vidal.
                    </p>
                    <p className="pb-3">
                      <span className="font-bold text-green-light">
                        Fauna y flora:
                      </span>{" "}
                      Humedal Paraíso.
                    </p>
                    <p className="pb-3">
                      <span className="font-bold text-green-light">
                        Aqua Park:
                      </span>{" "}
                      Huacho.
                    </p>
                    <p>
                      <span className="font-bold text-green-light">Isla:</span>{" "}
                      Supe.
                    </p>
                  </div>
                </div>
                <div className="w-[300px] lg:w-[400px]">
                  <Image
                    src={`/assets/lugares-turisticos.jpg`}
                    alt="Ubicaciòn"
                    width={1000}
                    height={1000}
                    className="rounded-2xl border-gray-50 border-1 p-5"
                  />
                </div>
              </div>
            </section>
            <section>
              <h2 className="uppercase text-4xl font-bold text-green-dark pb-5">
                ¿Por qué invertir en Fundo Alto Paraíso
              </h2>
              <Image
                src={`/assets/invertir-fundo.png`}
                alt="Ubicaciòn"
                width={1000}
                height={1000}
                className="rounded-2xl border-gray-50 border-1 p-2"
              />
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
