import React from "react";

const PrincipalSection = () => {

  return (
    <div id="home"  >
      <div className="md:col-span-5 md:flex md:items-center md:justify-center p-8 md:p-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold xl:leading-[7.5rem]">
            Edificando sueños,{' '}
            <span className="text-primary text-sky-900">
              ladrillo por ladrillo.
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Familia de trabajadores con amplia experiencia en el sector, trabajando durante decadas en diferentes proyectos de construcción.
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="bag-2 flex justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="fotos2.png"
          />
          <div className="absolute top-[5%] md:top-[40%] right-[5%] md:right-[40%] bg-white shadow-xl rounded-lg p-2 flex flex-col justify-center max-w-[350px] mx-auto ">
            <div className="flex items-center xl:text-lg text-gray-500">
              Gran familia, gran equipo.
            </div>
          </div>
        </div>
        {/* Logos */}
        <img
          src="bricks.png"
          className="w-25 h-10 md:w-20 md:h-15  absolute top-[30%] right-[15%] md:right-[20%]"
        />
        <img
          src="hardhat.png"
          className="w-15 h-10 md:w-15 md:h-10 absolute top-[30%] left-[15%] md:left-[20%] "
        />
      </div>
    </div>
  );
};

export default PrincipalSection;
