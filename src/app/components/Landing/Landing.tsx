export function Landing() {
  return (
    <div className="">
      <nav className="py-8 border-2 border-borde-pagina
      

      ">
        <div className="flex w-9/10 mx-auto justify-between">
          <a href="#" className="relative z-10">
            <img src="assets/logo-blanco.png" alt="Logo pagina" width={150} />
          </a>
          <label 
            className="
            relative z-10
            size-8
            
            bg-cover

            cursor-pointer
            transition-all

            bg-(url:--icono-menu-cerrado)
            has-checked:bg-(image:--icono-menu-abierto)
            has-checked:bg-center
            peer/label

            md:hidden
            ">

            <input type="checkbox" className="hidden" />
          </label>

          <ul className="
          text-white absolute inset-0
          bg-principal-pagina 

          flex flex-col gap-8
          justify-center items-center 

          -translate-y-full

          peer-has-checked/label:translate-0
          transition-transform

          md:static md:translate-0 md:flex-row

          ">
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#"
              className="
              bg-button
              text-principal-pagina py-4 px-6
              rounded-full
              "
              
              
              
              >Nuestro Proyectos</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="bg-(image:--hero-image) bg-center bg-cover
      w-9/10 mx-auto rounded-3xl min-h-150
      
      flex flex-col gap-4
      justify-center items-center

      text-white p-8 my-15 text-center

      md:text-left md:justify-end
      md:items-start md:pb-20
      
      ">
        <h1 className="text-4xl font-bold md:text-5xl">Inversiones Recopa, ecostruyendo tu futuro</h1>
        <p>Inversiones Recopa SAC es una empresa dedicada al desarrollo de proyectos de viviendas eco-sostenibles y comercialización de terrenos ubicados a 10 minutos antes de Huacho, a la altura del KM 136 de la Panamericana Norte, y a 10 minutos de Playa El Paraíso y el Humedal Lagunas El Paraíso.</p>
        <a className="bg-button text-principal-pagina py-4 px-6 rounded-full font-bold" href="#">Inscribete ahora</a>
      </section>

      <section className="w-9/10 mx-auto py-15 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4"> Nuestros Proyectos</h2>
        <p className="font-light ">
          Con su inversión en el proyecto Fundo Alto Paraíso, podrá obtener una sólida oportunidad de apreciación de valor a largo plazo.
        </p>
        <div className="mt-10 flex flex-wrap justify-between gap-10">
          <article className="border border-borde-pagina bg-secundario-pagina w-full max-w-70
          rounded-xl p-8 space-y-4">
            <img src="/svg/facebook-brands.svg" className="w-8" />
            <h3 className="text-xl font-bold">Facebook</h3>
            <p className="text-textos-card">Siguenos en nuestra cuenta de facebook para mas detalles de nuestra empresa <b>Inversiones Recopa</b> </p>
          </article>
          <article className="border border-borde-pagina bg-secundario-pagina w-full max-w-70
          rounded-xl p-8 space-y-4">
            <img src="/svg/instagram-brands.svg" className="w-8" />
            <h3 className="text-xl font-bold">Instagram</h3>
            <p className="text-textos-card">Siguenos en nuestra cuenta de Instagram para mas detalles de nuestra empresa <b>Inversiones Recopa</b> </p>
          </article>
          <article className="border border-borde-pagina bg-secundario-pagina w-full max-w-70
          rounded-xl p-8 space-y-4">
            <img src="/svg/whatsapp-brands.svg" className="w-8" />
            <h3 className="text-xl font-bold">Whatsapp</h3>
            <p className="text-textos-card">Siguenos en nuestra cuenta de Whatsapp para mas detalles de nuestra empresa <b>Inversiones Recopa</b> </p>
          </article>
        </div>
      </section>
    </div> 

  );
}
