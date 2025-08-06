import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      {/* <div className="fixed left-0 right-0 py-8 z-50 shadow-2xl bg-black opacity-90">  
    </div> */}
      <header className="max-w-7xl px-5 pt-5 pb-10">
        {/* <header className="left-0 right-0 py-4 z-50 bg-green-dark shadow-2xl"> */}
        <nav className=" flex justify-center items-center">

          <div className="lg:w-[200px] w-[170px]">
            <Image
              src="/assets/Logo3.png"
              alt="Logo"
              width={300}
              height={250}
            />
          </div>
          <div className=" hidden">
            <Link
              href=""
              className="uppercase font-semibold text-base text-green-dark px-5 py-1 rounded-2xl"
            >
              Nosotros
            </Link>
            <Link
              href=""
              className="uppercase font-semibold text-base text-green-dark px-5 py-1 rounded-2xl"
            >
              Proyectos
            </Link>
            <Link
              href=""
              className="uppercase font-semibold text-base text-green-dark px-5 py-1 rounded-2xl"
            >
              Contáctanos
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
