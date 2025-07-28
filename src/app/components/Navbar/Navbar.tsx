import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="grid items-center justify-between px-5 text-green-dark font-medium md:grid-cols-2 gap-4 md:gap-20 md:px-24 md:py-7 md:text-lg">
      {/* <div className='flex items-end gap-2'>
        <div>
      <Image src="/assets/logo.png" alt='Logo Principal' width={69} height={52} className='mx-auto lg:mx-0 lg:w-[69px]'/>
        </div>
        <div className='uppercase'>
          <h2 className='text-sm'>Inversiones</h2>
          <h2 className='text-2xl'>Recopa</h2>
        </div>
      </div> */}
      <Image src="/assets/logo3.png" alt='Logo Principal' width={250} height={250} className='mx-auto lg:mx-0 lg:w-[250px]'/>
      <div className=" flex gap-20  text-center justify-center">
        <Link className='hover:bg-green-100 rounded-xl px-4 py-2' href="#overview">Nosotros</Link>
        <Link className='hover:bg-green-100 rounded-xl px-4 py-2' href="#feactures">Proyectos</Link>
        <Link className='hover:bg-green-100 rounded-xl px-4 py-2' href="#about">Contáctanos</Link>
      </div>

    </div>
  )
}
