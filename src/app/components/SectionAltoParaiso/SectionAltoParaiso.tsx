'use client'
import { dataAltoParaiso } from "@/data/dataAltoParaiso";
import Image from "next/image";
import Slider from "react-slick";

export function SectionAltoParaiso() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section>
      <div className="bg-[#fbfcf5] ">
        <div className="flex justify-center">
          <div className="max-w-7xl">
            <div className="flex justify-center flex-wrap">
              <h2 className="text-3xl text-green-dark w-[320px] sm:w-[600px] lg:w-[820px] xl:w-full lg:text-5xl font-bold lg:pb-5">
                ¿Por qué invertir en Fundo Alto Paraíso?
              </h2>
            </div>
            <div className="flex justify-center flex-wrap gap-10 py-5">
              <div className="w-[320px] sm:w-[600px] lg:w-[380px] xl:w-[450px]">
                <p className=" text-green-dark text-justify leading-8 text-base w-auto md:text-lg">
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
              </div>

              <div className="w-[320px] lg:w-[400px] xl:w-[500px]">
                <Slider {...settings}>
              {dataAltoParaiso.map(({ id, title, image, size }) => (
                <div key={id}>
                  <Image
                    src={`/assets/altoparaiso/${image}.jpg`}
                    alt={title}
                    width={size}
                    height={size}
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
            <div className="flex justify-center">
              <h2 className="py-10 text-xl w-[320px] lg:text-3xl text-green-dark font-bold italic sm:w-[600px] lg:w-[820px] xl:w-[1000px]">
                ¡Descubre las ventajas de invertir en Fundo Alto Paraíso y
                asegura tu futuro financiero!
              </h2>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
