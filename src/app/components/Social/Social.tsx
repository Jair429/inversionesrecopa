import { dataSocialNetworks } from "@/data/dataSocialNetworks";
import Image from "next/image";
import Link from "next/link";

export function Social() {
  return (
    <div className="flex gap-6 pt-5 rounded-xl">
      {dataSocialNetworks.map(({ id, icon, name, link }) => (
        <Link href={link} key={id} target="_blank" rel="noreferrer">
          <Image src={`/svg/${icon}.svg`} alt={name} width={50} height={50} />
        </Link>
      ))}
    </div>
  );
}
