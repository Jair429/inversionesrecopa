import Image from "next/image";

export function SectionAltoParaiso() {
  return (
    <section>
      <div className="lg:flex lg:justify-between gap-10 px-5 pt-15">
        <div className="lg:w-[650px]">
          <h2 className="uppercase text-green-dark font-bold text-3xl md:leading-snug md:text-5xl">
            ¿Por qué invertir en Fundo Alto Paraíso
          </h2>
          <p className=" text-[#4c4a50] text-justify text-base pt-5 w-auto md:text-lg">
            Con su inversión en el proyecto Fundo Alto Paraíso, podrá obtener
            una sólida oportunidad de <b>apreciación de valor a largo plazo</b>.
            <br />
            <br />
            Los <b>bienes raíces</b>, reconocidos por su histórico aumento de
            valor, ofrecen una <b>rentabilidad atractiva</b>. Además, invertir
            en propiedades otorga un mayor control sobre la inversión,
            permitiendo <b>tomar decisiones activas</b> para administrar y
            mejorar la propiedad.
            <br />
            <br />
            Obtén la pasividad deseada al diversificar tus ingresos, ya que los
            bienes raíces pueden convertirse en una{" "}
            <b> fuente adicional de ingresos</b>, reduciendo así tu dependencia
            en una única fuente. A su vez, los bienes raíces no están
            estrechamente correlacionados con otros mercados, lo que ayuda a{" "}
            <b>mitigar riesgos</b>. Por último, al invertir en una propiedad
            para alquilar, puedes generar un{" "}
            <b>flujo de efectivo pasivo constante</b> a través de las rentas.
          </p>
        </div>
        <div className=" lg:w-[650px] pt-5 lg:pt-0 lg:flex justify-center">
          <div className=" lg:w-[650px]">
            <Image
              src="/assets/fondo-baner.jpg"
              alt="Fundo Alto Paraíso"
              width={390}
              height={355}
              className="shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-5 lg:py-10">
        <h2 className="text-center py-10 text-xl text-green-dark font-bold italic">
          ¡Descubre las ventajas de invertir en Fundo Alto Paraíso y asegura tu
          futuro financiero!
        </h2>
        {/* <div className="lg:w-[730px] lg:h-auto">
              <Image
                src="/assets/overview.jpg"
                alt="Overview"
                width={1919}
                height={1078}
                className="shadow-xl rounded-xl "
              />
            </div> */}
      </div>
    </section>
  );
}
