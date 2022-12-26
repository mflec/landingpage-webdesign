import React from "react";
// Icons
import {
  RiWhatsappFill,
  RiFacebookLine,
  RiToolsFill,
} from "react-icons/ri";

const Footer = () => {
  const wp1 = "https://walink.co/7783a0";
  const wp2 = "https://walink.co/74583a";
  const wp3 = "https://walink.co/ed2d4d";

  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="md:flex md:flex-row">
          <a className="text-2xl font-bold relative p-1 bg-footer text-white">
            TABORDA
          </a>
          <RiToolsFill className="text-white text-4xl p-2 rounded-full box-content" />{" "}
          <a className="text-amber-300 text-2xl font-bold relative p-1 bg-footer">
            CONSTRUCCIONES
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a target='_blank' href="https://www.facebook.com/profile.php?id=100085517293860" className="block text-white p-4 bg-primary rounded-full">
            <RiFacebookLine />
          </a>
          <a target='_blank' href={wp1} className="block text-white p-4 bg-primary rounded-full">
            <RiWhatsappFill />
          </a>
          <a target='_blank' href={wp2} className="block text-white p-4 bg-primary rounded-full">
            <RiWhatsappFill />
          </a>
          <a target='_blank' href={wp3} className="block text-white p-4 bg-primary rounded-full">
            <RiWhatsappFill />
          </a>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © Taborda Construcciones 2022 - Derechos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
