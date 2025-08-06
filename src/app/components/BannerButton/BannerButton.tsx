import { dataBannerButtons } from "@/data/dataBannerButtons";
import Image from "next/image";

export function BannerButton() {
  return (
    <section className="py-5 flex justify-center ">
      <div className="bg-white flex rounded-4xl shadow-xl">
        {dataBannerButtons.map(({ id, title, text, icon, addClass }) => (
          <div key={id} className="flex py-7 pl-10 ">
            <Image
              src={`/svg/${icon}.svg`}
              alt={title}
              width={35}
              height={35}
            />
            <div className={`flex pl-2 pr-10 border-r-gray-300 border-r-2 ${addClass}`}>
              <div className="flex flex-col">
                <span className="text-[#8499B1] text-sm">{title}</span>
                <span className="text-green-dark font-bold text-base">
                  {text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
