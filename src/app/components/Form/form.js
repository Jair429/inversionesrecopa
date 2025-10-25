"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_21i2za7", "template_a95lhbj", form.current, {
        publicKey: "12xGyWwZKLIu5uSrm",
      })
      .then(
        () => {
          alert("Enviado con éxito");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex justify-center py-10">
      <div className="max-w-7xl w-full">
        <div className="flex justify-center p-5">
          <div className="border-1 border-gray-100 p-5 rounded-2xl flex flex-wrap md:flex md:justify-around  w-full">
            <div className="w-[320px] text-sm">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col flex-wrap md:w-[320px]"
              >
                <label>Nombre y Apellido</label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-gray-100 rounded-2xl p-2 m-2 w-[270px]"
                />
                <label>Celular</label>
                <input
                  type="text"
                  name="celular"
                  className="bg-gray-100 rounded-2xl p-2 m-2 w-[270px]"
                />
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="bg-gray-100 rounded-2xl p-2 m-2 w-[270px]"
                />
                <label>¿Cómo desea comprar?</label>
                <select
                  name="compra"
                  className="bg-gray-100 rounded-2xl p-2 m-2 w-[270px]"
                >
                  <option></option>
                  <option>Compra al Contado</option>
                  <option>Financiado</option>
                </select>
                <label>¿Qué dia quisiera que lo llevemos al proyecto?</label>
                <select
                  name="dia"
                  className="bg-gray-100 rounded-2xl p-2 m-2 w-[270px]"
                >
                  <option></option>
                  <option>Domingo</option>
                  <option>Sábado</option>
                  <option>Viernes</option>
                </select>
                <label>¿Cómo quisiera que nos comuniquemos?</label>
                <select
                  name="comunicacion"
                  className="bg-gray-100 rounded-2xl p-2 m-2 w-[270px]"
                >
                  <option></option>
                  <option>Llamada </option>
                  <option>Whatsapp</option>
                </select>
                <div className="flex justify-end pr-3 md:pr-14">
                  <input
                    type="submit"
                    value="Enviar"
                    className="bg-green-light rounded-xl p-2 m-2 w-[100px] text-white cursor-pointer"
                  />
                </div>
              </form>
            </div>
            <div className="p-5 w-[320px] md:w-[360px]">
              <Image
                src={`/assets/casaFAP.jpg`}
                alt={"Casa Fundo Alto Paraíso"}
                width={800}
                height={800}
                className="rounded-lg px-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
