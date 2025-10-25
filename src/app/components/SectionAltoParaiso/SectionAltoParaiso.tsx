"use client";
import { dataAltoParaiso } from "@/data/dataAltoParaiso";
import Image from "next/image";
import Slider from "react-slick";

export function SectionAltoParaiso() {
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
      <div>
        <div className="flex justify-center ">
          <div className="max-w-7xl w-full">
            <h2 className="text-3xl lg:text-5xl text-green-dark px-5 pb-5 w-full font-bold lg:py-10">
              ¿Por qué invertir en Fundo Alto Paraíso?
            </h2>
            <div className="flex justify-center flex-wrap lg:flex lg:justify-between px-5 gap-5">
                <p className=" text-green-dark rounded-2xl border-gray-50 border-1 p-5 text-justify text-base w-auto lg:w-[500px] xl:w-[700px] md:text-lg">
                  <span className="block pb-5">
                    Con su inversión en el proyecto Fundo Alto Paraíso, podrá
                    obtener una sólida oportunidad de{" "}
                    <b>apreciación de valor a largo plazo</b>.
                  </span>
                  <span className="block pb-5">
                    Los <b>bienes raíces</b>, reconocidos por su histórico
                    aumento de valor, ofrecen una <b>rentabilidad atractiva</b>.
                    Además, invertir en propiedades otorga un mayor control
                    sobre la inversión, permitiendo{" "}
                    <b>tomar decisiones activas</b> para administrar y mejorar
                    la propiedad.
                  </span>
                  Obtén la pasividad deseada al diversificar tus ingresos, ya
                  que los bienes raíces pueden convertirse en una{" "}
                  <b> fuente adicional de ingresos</b>, reduciendo así tu
                  dependencia en una única fuente. A su vez, los bienes raíces
                  no están estrechamente correlacionados con otros mercados, lo
                  que ayuda a <b>mitigar riesgos</b>. Por último, al invertir en
                  una propiedad para alquilar, puedes generar un{" "}
                  <b>flujo de efectivo pasivo constante</b> a través de las
                  rentas.
                </p>

              <div className="w-[350px] lg:w-[440px] lg:h-[440px] border-gray-50 border-1 rounded-2xl p-5 ">
                <Slider {...settings}>
                  {dataAltoParaiso.map(({ id, title, image, size }) => (
                    <div key={id}>
                      <Image
                        src={`/assets/altoparaiso/${image}.jpg`}
                        alt={title}
                        width={size}
                        height={size}
                        className="rounded-lg px-1"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <p className="text-green-dark text-justify leading-8 text-base md:text-lg w-[320px] md:w-[600px] lg:w-[820px] ">
                Obtén la pasividad deseada al diversificar tus ingresos, ya que
                los bienes raíces pueden convertirse en una{" "}
                <b> fuente adicional de ingresos</b>, reduciendo así tu
                dependencia en una única fuente. A su vez, los bienes raíces no
                están estrechamente correlacionados con otros mercados, lo que
                ayuda a <b>mitigar riesgos</b>. Por último, al invertir en una
                propiedad para alquilar, puedes generar un{" "}
                <b>flujo de efectivo pasivo constante</b> a través de las
                rentas.
              </p>
            </div> */}
            <div className="flex justify-center px-5 py-10">
              <h2 className="py-10 text-xl p-5 lg:text-2xl rounded-2xl border-1 shadow-xl border-gray-50 text-green-dark font-bold italic ">
                ¡Descubre las ventajas de invertir en Fundo Alto Paraíso y
                asegura tu futuro financiero!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
