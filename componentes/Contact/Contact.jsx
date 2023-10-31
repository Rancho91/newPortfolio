"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Quicksand, Rubik } from "next/font/google"

const inter = Quicksand({ subsets: ['latin'], weight: ['500'] });
const rubik = Rubik({ subsets: ['latin'], weight: ['500'] });

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      to_email: "ramiroisanchezdev@example.com", // Ingresa aquí tu dirección de correo
      subject: "Mensaje desde el formulario de contacto - Portfolio",
      message: message,
      name: name,
    };

    emailjs
      .send(
        "service_0ztm46j",
        "template_8xcrzxo",
        templateParams,
        "50WlnwzGqTRgEtYdI"
      )
      .then((response) => {
        console.log("Correo enviado:", response);
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
  };

  return (
    <div className={`flex flex-col h-full w-full px-20 py-4  `} id="contacto">
      <div>
        <h1 className={`justify-start ${rubik.className} text-2xl text-celeste-background`}>CONTÁCTAME:</h1>

      </div>

      <div className="flex flex-col space-y-6 w-full justify-center py-4" id="contacto">
        <form onSubmit={handleSubmit} className={`flex flex-col space-y-6 w-full justify-center`}>
          <div className={`flex flex-col space-y-6 justify-center`}>
            <div className="flex space-y-2 space-y-0 flex-col md:flex-row md:space-x-6 justify-center">
              <div className="">
                <input
                  placeholder="ejemplo@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                  className="bg-celeste-back text-sm md:text-lg text-gray-100 p-1 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre y Apellido"
                  value={name}
                  className="bg-celeste-back text-sm md:text-lg text-gray-100 p-1 rounded-xl"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>


            </div>

            <div className={`flex flex-col md:flex-row h-full w-full justify-center`}>
              <div className="h-32 w-full">
                <textarea
                  name="msj"
                  id="msj"
                  placeholder="Mensaje"
                  className={`h-32 w-full text-sm md:text-lg bg-celeste-back text-gray-100 p-1 rounded-xl`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  
                  style={{ resize: "none" }} // Agrega esta línea
                ></textarea>
              </div>
            </div>

            <div className="flex flex-row justify-center">
              <button className={`bg-celeste-back text-sm md:text-lg text-gray-100 p-2 rounded-xl  hover:bg-celeste-background `} type="submit">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </form>

      </div>
      <div className={`flex flex-row justify-center space-x-8 pt-4`}>
        <div className="">
          <a
            href="https://www.linkedin.com/in/ramiro-sanchez-solano/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`h-8`}
              src={
                "https://res.cloudinary.com/dxatwbzff/image/upload/v1689038675/38669_nshggh.png"}
              alt="LinkedIn"
              title="LinkedIn"
              loading="lazy"
            />
          </a>
        </div>
        <div className="">
          <a
            href="https://github.com/Rancho91"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`h-8`}
              src={
                "https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/GitHub_hpyl4c.png"
              }
              alt="GitHub"
              title="GitHub"
              loading="lazy"
            />
          </a>
        </div>
        <div className="">
          <a
            href="https://wa.me/543548504261"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`h-8`}
              src={
                "https://res.cloudinary.com/dxatwbzff/image/upload/v1698771802/whatsapp-black-logo-transparent-free-png_omycnv.webp"
              }
              alt="GitHub"
              title="GitHub"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
};