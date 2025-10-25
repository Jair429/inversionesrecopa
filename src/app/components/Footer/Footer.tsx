import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-green-dark text-white">
      <div className="flex justify-center py-15 px-5 ">
        <div className="max-w-7xl w-full">
          <div className="flex flex-wrap justify-center space-y-15 lg:space-y-0 lg:flex lg:justify-between">
            <div className="lg:w-[300px]">
              <h2 className="font-bold text-xl md:text-2xl">
                Inversiones Recopa
              </h2>
              <div className="w-[50px] pt-2 border-b-3 border-green-light"></div>
              <p className="text-sm  leading-6 pt-5">
                A través de Inversiones Recopa comercializamos terrenos ubicados
                a 10 minutos antes de Huacho. Altura del KM 136 de la
                Panamericana Norte, a 5 minutos de la Playa El Paraíso y el
                Humedal Lagunas El Paraíso.
              </p>
              <p className="text-sm leading-6 pt-4 ">
                ¡Vive la experiencia del Norte Chico!
              </p>
            </div>
            <div className="w-[240px] md:w-[300px]">
              <Image
                src={`/assets/Logo-Fundo-Alto-Blanco.png`}
                alt="Logo Fundo Alto Paraíso"
                width={1000}
                height={1000}
              />
            </div>
            <div className="lg:w-[300px]">
              <h2 className="font-bold text-xl md:text-2xl">
                Vista Fundo Alto Paraíso
              </h2>
              <div className="w-[50px] pt-2 border-b-3 border-green-light"></div>
              <section className="flex justify-center items-center pt-5 xl:w-[350px]">
                <div>
                  <iframe
                    src="https://www.youtube.com/embed/AhGCvjM5cPc"
                    title="Fundo Alto Paraíso un Condominio Ecológico a 30min del Megapuerto de Chancay"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    width={350}
                    height={200}/>
                </div>
                
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="px-15 py-5">
        <span>© 2025 Inversiones Recopa</span>
      </div>
    </footer>
  );
}
