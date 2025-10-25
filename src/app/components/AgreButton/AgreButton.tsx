import { dataAgreButton } from "@/data/dataAgreButton";
import Image from "next/image";
import Link from "next/link";

export function AgreButton() {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="p-5">
          <h2 className="text-3xl text-green-dark lg:text-6xl font-bold lg:pb-5 ">
            Nuestros Convenios
          </h2>
          <div className="flex justify-center flex-wrap py-5 gap-5 ">
            {dataAgreButton.map(({ id, image, size, title, classAdd, classP,link}) => (
              <div
                key={id}
                className={`flex justify-center items-center flex-col w-[300px] lg:w-[400px] border-gray-50 border-1 rounded-4xl pb-10 shadow-md bg-gray-50 ${classP}`}
              >
                <Image
                  src={`/assets/convenios/${image}.png`}
                  alt={`${title}`}
                  width={`${size}`}
                  height={`${size}`}
                />
                <button
                  className={`bg-green-light text-white hover:bg-green-dark w-[200px] p-2 rounded-lg ${classAdd}`}
                >
                  <Link href={`/convenio-${link}`} target="_blank" >
                  Accede al convenio
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
