import Image from "next/image";

export function AgreButton() {
  return (
    <div className="flex justify-center bg-[#fbfcf5]">
      <div className="max-w-7xl w-[330px] sm:w-[600px] lg:w-[800px] xl:w-[1000px]">
        <div className="border-b-1 border-green-dark my-2">
          <h2 className="text-3xl text-green-dark lg:text-6xl font-bold lg:pb-5">
            Nuestros Convenios
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-20 sm:gap-0 w-[300px] md:w-[600px] lg:w-[800px] xl:w-[1000px]">
          <div className="flex flex-col w-[300px]">
            <Image
              src={`/assets/convenios/odontologo.png`}
              alt="Colegio Odontológico del Perú"
              width={300}
              height={300}
            />
            <div className="flex justify-center">
              <button className="bg-green-light text-[#fbfcf5] hover:text-green-dark w-[200px] p-2 rounded-lg">
                Accede al convenio
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[300px]">
            <Image
              src={`/assets/convenios/entel.png`}
              alt="Entel"
              width={300}
              height={300}
            />
            <div className="flex justify-center">
              <button className="bg-green-light text-[#fbfcf5] hover:text-green-dark w-[200px] p-2 rounded-lg">
                Accede al convenio
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[300px]">
            <Image
              src={`/assets/convenios/camara-del-comercio.png`}
              alt="Camara de Comercio Lima"
              width={300}
              height={300}
            />
            <div className="flex justify-center">
              <button className="bg-green-light text-[#fbfcf5] hover:text-green-dark w-[200px] p-2 rounded-lg">
                Accede al convenio
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[300px]">
            <Image
              src={`/assets/convenios/obstetras.png`}
              alt="Colegio Regional de Obstetras"
              width={300}
              height={300}
            />
            <div className="flex justify-center">
              <button className="bg-green-light text-[#fbfcf5] hover:text-green-dark w-[200px] p-2 rounded-lg">
                Accede al convenio
              </button>
            </div>
          </div>
          
          <div className="flex flex-col w-[300px]">
            <Image
              src={`/assets/convenios/inpe.png`}
              alt="INPE"
              width={300}
              height={300}
            />
            <div className="flex justify-center">
              <button className="bg-green-light text-[#fbfcf5] hover:text-green-dark w-[200px] p-2 rounded-lg">
                Accede al convenio
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[300px]">
            <Image
              src={`/assets/convenios/corlad.png`}
              alt="Corlad"
              width={300}
              height={300}
            />
            <div className="flex justify-center">
              <button className="bg-green-light text-[#fbfcf5] hover:text-green-dark w-[200px] p-2 rounded-lg">
                Accede al convenio
              </button>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
