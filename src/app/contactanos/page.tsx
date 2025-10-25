import Image from "next/image";
import { Social } from "../components/Social/Social";
export default function Contactanos() {
  return (
    <section>
      <div className="flex justify-center pt-20">
        <div className="max-w-7xl w-full p-5 ">
          <h2 className="text-green-dark text-4xl uppercase font-bold pb-20">
            Contáctanos
          </h2>
          <div className="flex justify-center pb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31308.163653987158!2d-77.558891!3d-11.223073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9106dd3784f384f1%3A0x16c2caedc1200780!2sFundo%20Ecol%C3%B3gico%20Para%C3%ADso!5e0!3m2!1ses!2sus!4v1755267043927!5m2!1ses!2sus"
              title="Ubicación Fundo Alto Paraíso"
              width={1200}
              height={440}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-[340px] md:w-[700px] lg:w-[900px]"
            ></iframe>
          </div>
          <div className="flex justify-center">
            <div className="md:flex md:flex-wrap md:gap-10 ">
              <div className="border-gray-50 border-1 rounded-2xl mb-5 p-5">
                <span className="text-green-light font-bold text-2xl">
                  Ubicación
                </span>
                <div className="flex gap-2 py-5">
                  <Image
                    src={"/svg/location-arrow.svg"}
                    alt="location"
                    width={35}
                    height={35}
                    className="w-[22px]"
                  />
                  <p className="text-green-dark text-lg">
                    Km 136 de la Panamericana Norte
                  </p>
                </div>
              </div>
              <div className="border-gray-50 border-1 rounded-2xl mb-5 p-5">
                <span className="text-green-light font-bold text-2xl">
                  Teléfono
                </span>
                <div className="flex flex-wrap gap-2 py-5">
                  <Image
                    src={"/svg/phone.svg"}
                    alt="location"
                    width={35}
                    height={35}
                    className="w-[22px]"
                  />
                  <p className="text-green-dark text-lg">
                    Gerencia: +51 969 265 887
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pb-5">
                  <Image
                    src={"/svg/phone.svg"}
                    alt="location"
                    width={35}
                    height={35}
                    className="w-[22px]"
                  />
                  <p className="text-green-dark text-lg">
                    Administración: +51 931 242 677
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pb-5">
                  <Image
                    src={"/svg/phone.svg"}
                    alt="location"
                    width={35}
                    height={35}
                    className="w-[22px]"
                  />
                  <p className="text-green-dark text-lg">
                    Comercial: +51 935 370 594
                  </p>
                </div>
              </div>
              <div className="border-gray-50 border-1 rounded-2xl mb-5 p-5">
                <span className="text-green-light font-bold text-2xl">
                  Correo
                </span>
                <div className="flex gap-2 py-5">
                  <Image
                    src={"/svg/envelope.svg"}
                    alt="location"
                    width={35}
                    height={35}
                    className="w-[22px]"
                  />
                  <p className="text-green-dark text-lg">
                    informes@inversionesrecopa.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-5">
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
}
