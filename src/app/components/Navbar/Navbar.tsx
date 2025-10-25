import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      <div className="flex justify-center bg-green-dark">
        <div className="max-w-7xl w-full">
          <nav className="p-5">
            <div className="flex max-w-7xl justify-between">
              <Link href="/">
                <Image
                  src={"/assets/logo-blanco.png"}
                  alt="Logo"
                  width={150}
                  height={150}
                />
              </Link>
              <label
                className="relative z-10
            size-8
            
            bg-cover

            cursor-pointer
            transition-all

            bg-(url:--icono-menu-cerrado)
            has-checked:bg-(image:--icono-menu-abierto)
            has-checked:bg-center
            peer/label

            md:hidden
        "
              >
                <input type="checkbox" className="hidden" />
              </label>
              <ul
                className="text-white bg-green-dark absolute inset-0 flex flex-col gap-15
          justify-center items-center 

          -translate-y-full

          peer-has-checked/label:translate-0
          transition-transform

          md:static md:translate-0 md:flex-row "
              >
                <li className="hover:text-green-light">
                  <Link href="/nosotros">Nosotros</Link>
                </li>
                <li className="hover:text-green-light">
                  <Link href="/proyectos"> Proyectos</Link>
                </li>
                <li className="hover:text-green-light">
                  <Link href="/contactanos">Contáctanos</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
