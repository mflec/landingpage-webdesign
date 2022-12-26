import React from "react";
// Icons
import { RiMailFill, RiWhatsappFill } from "react-icons/ri";

const Services = () => {
  const wp1 = { link: "https://walink.co/ed2d4d", name: "Luis Ángel Taborda" };
  const wp2 = { link: "https://walink.co/7783a0", name: "Nestor Taborda" };
  const wp3 = { link: "https://walink.co/74583a", name: "Maximiliano Taborda" };

  const wpArray = [wp1, wp2, wp3]
  const emailSubject = "Me%20interesaria%20contratar%20el%20servicio%20de%20Taborda%20Contrucciones"
  const emailAdress = "danielataborda1977@gmail.com"

  return (
    <div
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 md:my-8 md:px-16 md:mb-12 xl:mb-20"
    >
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <h1 className="text-sky-900 text-[38px] font-bold">Contacto vía WhatsApp</h1>
        {wpArray.map((value) =>
          <a target='_blank' href={value.link} className="flex flex-col align-center justify-center">
            <RiWhatsappFill className="text-4xl p-2 bg-secondary text-green-500 box-content rounded-xl" />
            <h3 className="text-[20px] font-bold text-gray-500">{value.name}</h3>
          </a>
        )}
      </div>
      {/* {Email} */}
      <div className="flex flex-col align-center justify-center md:mx-8">
        <h1 className="text-sky-900 text-[40px] font-bold">Contacto por mail</h1>
        <p className="text-[20px] text-gray-500">
          En caso de que prefieras otra forma de contacto, podemos contactarnos a tu mail
        </p>
        <div className="my-6">
          <a href={`mailto:${emailAdress}?Subject=${emailSubject}`}
            className="flex flex-row font-semibold py-2 px-6 bg-primary text-white rounded-xl  w-60 "
          >
            <RiMailFill className="mx-2 text-gray-500 text-xl" />
            ENVIAR EMAIL
          </a>
        </div>
      </div>
    </div >
  );
};

export default Services;
