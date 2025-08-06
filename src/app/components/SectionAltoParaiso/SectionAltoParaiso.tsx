import Image from "next/image";

export function SectionAltoParaiso() {
  return (
    <section>
      <div className="bg-[#fbfcf5]">
        <h2 className="text-center py-10 text-xl lg:text-3xl px-10 md:px-15 lg:px-25 text-green-dark font-bold italic">
          ¡Descubre las ventajas de invertir en Fundo Alto Paraíso y asegura tu
          futuro financiero!
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 py-10 bg-[#fbfcf5] ">
        {/* <div className="flex flex-wrap justify-center gap-20 py-20 bg-left bg-[url(/assets/banner.jpg)] "> */}
        <div>
          <h2 className=" text-4xl text-green-dark lg:text-7xl font-bold lg:pb-5">
            ¿Por qué invertir en <br />
            Fundo Alto Paraíso?
          </h2>
          <div className="w-[320px] sm:w-[600px] lg:w-[800px]">
            <p className=" text-green-dark text-justify leading-8 text-base pt-5 w-auto md:text-lg">
              <span className="block pb-5">
              Con su inversión en el proyecto Fundo Alto Paraíso, podrá obtener
              una sólida oportunidad de{" "}
              <b>apreciación de valor a largo plazo</b>.
              </span>
              <span className="block pb-5">
              Los <b>bienes raíces</b>, reconocidos por su histórico aumento de
              valor, ofrecen una <b>rentabilidad atractiva</b>. Además, invertir
              en propiedades otorga un mayor control sobre la inversión,
              permitiendo <b>tomar decisiones activas</b> para administrar y
              mejorar la propiedad.
              </span>
              Obtén la pasividad deseada al diversificar tus ingresos, ya que
              los bienes raíces pueden convertirse en una{" "}
              <b> fuente adicional de ingresos</b>, reduciendo así tu
              dependencia en una única fuente. A su vez, los bienes raíces no
              están estrechamente correlacionados con otros mercados, lo que
              ayuda a <b>mitigar riesgos</b>. Por último, al invertir en una
              propiedad para alquilar, puedes generar un{" "}
              <b>flujo de efectivo pasivo constante</b> a través de las rentas.
              
            </p>
          </div>
        </div>
        <div className="w-[320px] md:w-[600px] lg:w-[800px] ">
          <Image
            src="/assets/banner2.jpg"
            alt="Overview"
            width={1500}
            height={1500}
          />
        </div>
      </div>
    </section>
  );
}
// <section>
//   <div className="lg:flex lg:justify-between gap-10 px-5 pt-15">
//     <div className="lg:w-[650px]">
//       {/* <h2 className="uppercase text-green-dark font-bold text-3xl md:leading-snug md:text-5xl">
//         ¿Por qué invertir en Fundo Alto Paraíso
//       </h2> */}
//       <h2 className="uppercase text-green-dark text-4xl lg:text-7xl xl:text-8xl font-bold md:leading-snug ">
//               ¿Por qué invertir en Fundo Alto Paraíso?
//             </h2>
//       <p className=" text-green-dark text-justify leading-8 text-base pt-5 w-auto md:text-lg">
//         Con su inversión en el proyecto Fundo Alto Paraíso, podrá obtener
//         una sólida oportunidad de <b>apreciación de valor a largo plazo</b>.
//         <br />
//         <br />
//         Los <b>bienes raíces</b>, reconocidos por su histórico aumento de
//         valor, ofrecen una <b>rentabilidad atractiva</b>. Además, invertir
//         en propiedades otorga un mayor control sobre la inversión,
//         permitiendo <b>tomar decisiones activas</b> para administrar y
//         mejorar la propiedad.
//         <br />
//         <br />
//         Obtén la pasividad deseada al diversificar tus ingresos, ya que los
//         bienes raíces pueden convertirse en una{" "}
//         <b> fuente adicional de ingresos</b>, reduciendo así tu dependencia
//         en una única fuente. A su vez, los bienes raíces no están
//         estrechamente correlacionados con otros mercados, lo que ayuda a{" "}
//         <b>mitigar riesgos</b>. Por último, al invertir en una propiedad
//         para alquilar, puedes generar un{" "}
//         <b>flujo de efectivo pasivo constante</b> a través de las rentas.
//       </p>
//     </div>
//     <div className=" lg:w-[650px] pt-5 lg:pt-0 lg:flex justify-center">
//       <div className=" lg:w-[650px]">
//         <Image
//           src="/assets/fondo-baner.jpg"
//           alt="Fundo Alto Paraíso"
//           width={390}
//           height={355}
//           className="shadow-xl rounded-xl"
//         />
//       </div>
//     </div>
//   </div>
//   <div className="flex flex-col justify-center px-5 lg:py-10">
//     <h2 className="text-center py-10 text-xl text-green-dark font-bold italic">
//       ¡Descubre las ventajas de invertir en Fundo Alto Paraíso y asegura tu
//       futuro financiero!
//     </h2>
//     {/* <div className="lg:w-[730px] lg:h-auto">
//           <Image
//             src="/assets/overview.jpg"
//             alt="Overview"
//             width={1919}
//             height={1078}
//             className="shadow-xl rounded-xl "
//           />
//         </div> */}
//   </div>
// </section>
