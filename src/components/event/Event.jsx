/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCheersThin, PiChurchThin } from "react-icons/pi";

const Event = ({
  iconColor,
  lugarCeremonia,
  linkCeremonia,
  horarioCeremonia,
  lugarFiesta,
  linkFiesta,
  horarioFiesta,
  buttonClassColors,
  ceremonia = true,
  fiesta = true,
  extra = true,
  textColor,
  tituloExtra,
  lugarExtra,
  horarioExtra,
  linkExtra,
  // Props adicionales para estilos personalizados
  sectionClass = "",
  titleClass = `lg:text-[30px] font-normal my-3 text-[20px] ${textColor}`,
  textClass = "",
  imageClass = "",
  ceremoniaSectionClass = "",
  fiestaSectionClass = "",
  lugarClass = "",
  horarioClass = "",
  buttonClass = `
  text-[15px] font-normal my-1 text-center rounded-[30px] 
  w-[123px] h-[30px] 
  transform transition-transform duration-200 hover:scale-105 
  ${buttonClassColors}`,
}) => {
  return (
    <>
      <section
        id="Evento"
        className={`w-[100%] justify-center items-center text-center my-3 mt-10 ${sectionClass}`}
      >
        <p
          className={`lg:text-[30px] font-normal my-3 text-[20px] ${titleClass} ${textColor}`}
        >
          Queremos compartir este día con vos
        </p>

        {ceremonia && (
          <section className={`my-3 mt-10 ${ceremoniaSectionClass}`}>
            <PiChurchThin
              style={{ width: "3rem", height: "3rem" }}
              className="mx-auto block my-3 mt-10"
              color={iconColor}
            />
            <p
              className={titleClass}
            >
              Ceremonia
            </p>
            <p
              className={`text-[14px] font-normal mt-1 text-center ${lugarClass} ${textColor}`}
            >
              {lugarCeremonia}
            </p>
            <p
              className={`text-[14px] font-normal text-center ${horarioClass} ${textColor}`}
            >
              {horarioCeremonia}
            </p>
            <Link target="_blank" href={linkCeremonia}>
              <button className={buttonClass}>Como llegar</button>
            </Link>
          </section>
        )}

        {fiesta && (
          <section className={`my-3 mt-10 ${fiestaSectionClass}`}>
            <PiCheersThin
              style={{ width: "3rem", height: "3rem" }}
              className="mx-auto block my-3 mt-10"
              color={iconColor}
            />
            <p
              className={titleClass}
            >
              Fiesta
            </p>
            <p
              className={`text-[14px] font-normal mt-1 text-center ${lugarClass} ${textColor}`}
            >
              {lugarFiesta}
            </p>
            <p
              className={`text-[14px] font-normal text-center ${horarioClass} ${textColor}`}
            >
              {horarioFiesta}
            </p>
            <Link target="_blank" href={linkFiesta}>
              <button className={buttonClass}>Como llegar</button>
            </Link>
          </section>
        )}

{extra && (
          <section className={`my-3 mt-10 ${fiestaSectionClass}`}>
            <PiCheersThin
              style={{ width: "3rem", height: "3rem" }}
              className="mx-auto block my-3 mt-10"
              color={iconColor}
            />
            <p
              className={titleClass}
            >
              {tituloExtra}
            </p>
            <p
              className={`text-[14px] font-normal mt-1 text-center ${lugarClass} ${textColor}`}
            >
              {lugarExtra}
            </p>
            <p
              className={`text-[14px] font-normal text-center ${horarioClass} ${textColor}`}
            >
              {horarioExtra}
            </p>
            <Link target="_blank" href={linkExtra}>
              <button className={buttonClass}>Como llegar</button>
            </Link>
          </section>
        )}
      </section>
    </>
  );
};

export default Event;
