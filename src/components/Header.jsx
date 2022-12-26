import React from "react";
import {
  RiToolsFill
} from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex items-center md:justify-between justify-center md:justify-start  md:py-4 md:px-8 md:h-[10vh] md:z-50">
      <div className="text-center flex flex-row md:flew-col my-4 justify-center align-center" >
        <a className="text-sky-900 text-xl md:text-2xl font-bold relative bg-white ">
          TABORDA
        </a>
        <RiToolsFill className="text-sky-900 text-xl md:text-4xl mx-2 rounded-full box-content" />{" "}
        <a className="text-amber-300 text-xl md:text-2xl font-bold relative bg-white ">
          CONSTRUCCIONES
        </a>
      </div>
    </header>
  );
};

export default Header;
