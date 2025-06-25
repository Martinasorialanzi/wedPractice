import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiCalendarCheckThin } from "react-icons/pi";

const Confirmation = ({
  iconColor,
  linkConfirmacion,
  textColor,
  descripcion,
  // ✨ Nueva prop para la clase unificada de títulos principales
  mainTitleClass,
  sectionClass = "col-span-1 justify-self-center text-center p-[0px] lg:px-[250px] my-3 ",
  imageClass = "mx-auto col-span-1 justify-self-center",
  titleClass = `lg:text-[30px] font-normal text-[20px] ${textColor}`,
  descriptionClass = `lg:text-[20px] font-normal m-4 text-[14px] ${textColor}`,
  buttonClassColors,
  buttonClass = `
  text-[15px] font-normal my-1 text-center rounded-[30px] 
  w-[123px] h-[30px] 
  transform transition-transform duration-200 hover:scale-105 
  ${buttonClassColors}`,
}) => {
  return (
    <section id="Confirmación" className={sectionClass}>
      <PiCalendarCheckThin
        style={{ width: "3rem", height: "3rem" }}
        className="mx-auto block my-3 mt-10"
        color={iconColor}
      />
      {/* ✨ Título principal usando la clase unificada */}
      <p className={mainTitleClass || titleClass}>Esperamos tu confirmación</p>
      <p className={descriptionClass}>{descripcion}</p>
      <Link target="_blank" href={linkConfirmacion?? "/"}>
        <button className={buttonClass}>Confirmar</button>
      </Link>
    </section>
  );
};

export default Confirmation;