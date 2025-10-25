import Image from "next/image";
export default function page() {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="p-5">
          <div className="flex flex-wrap justify-center">
            <h2 className="text-green-dark text-2xl lg:text-4xl uppercase font-bold py-10">
              Convenio Colegio Regional de Obstetras
            </h2>
            <div className="w-[300px] md:w-[700px] lg:w-[800px] pb-10">
              <p className="text-gray-500 pb-5">
                Nos complace anunciar nuestro convenio con el Colegio Regional de Obstetras, con el objetivo de que las colegiadas puedan acceder a promociones y descuentos exclusivos en nuestro condominio ecológico Fundo Alto Paraíso.
              </p>
              <p className="text-gray-500 pb-5">
                Donde podrán hacer realidad el sueño de su casa de campo, ademas no tendrán que pagar recibos de luz ni de agua ya que trabajamos con energía renovable mediante paneles solares, biodigestores y sistema de agua del subsuelo. 
              </p>
              <p className="text-gray-500 pb-5">
                Para más información comunícate a nuestra área de convenio.
              </p>
              <p className="text-gray-500 pb-2 font-bold underline">
                Área de convenio:
              </p>
              <p className="text-gray-500">Catherine Peña</p>
              <p className="text-gray-500">cpena@inversionesrecopa.com</p>
              <p className="text-gray-500">+51 949 306 644</p>
            </div>
            <div className="pb-10">
              <Image
                src={"/assets/convenio-page/obstetras.jpg"}
                alt="Colegio de Obstetras"
                width={800}
                height={800}
              />
            </div>
            <div>
              <iframe
                src="https://www.youtube.com/embed/fI-wa6dq6eY?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Finversionesrecopa.com&widgetid=1&forigin=https%3A%2F%2Finversionesrecopa.com%2Fconvenio-colegio-regional-de-obstetras%2F&aoriginsup=1&gporigin=https%3A%2F%2Finversionesrecopa.com%2F&vf=1"
                title="😁 CONVENIO COLEGIO REGIONAL DE OBSTETRAS 💚 FUNDO ALTO PARAISO | INVERSIONES RECOPA #inmobiliaria"
                width={800}
                height={400}
                className="w-[335px] md:w-[728px] lg:w-[800px] h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
