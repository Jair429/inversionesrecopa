import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="grid items-center justify-between text-green-d font-medium md:grid-cols-2 gap-4 md:gap-20 md:px-20 md:text-lg">
      <Image src="/assets/Recopa-logo-Color.png" alt='Logo Principal' width={200} height={25} className='mx-auto lg:mx-0'/>
      <div className="flex gap-4 text-center justify-center">
        <Link href="#overview">Nosotros</Link>
        <Link href="#feactures">Proyectos</Link>
        <Link href="#about">Contáctanos</Link>
      </div>

    </div>
  )
}
