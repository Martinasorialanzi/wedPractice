/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Event = ({
  lugarCeremonia,
  linkCeremonia,
  horarioCeremonia,
  lugarFiesta,
  linkFiesta,
  horarioFiesta,
  buttonClassColors,
  ceremonia = true,
  fiesta = true,
  textColor,
  // Props adicionales para estilos personalizados
  sectionClass = "",
  titleClass = "",
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
        <p className={`lg:text-[30px] font-normal my-3 text-[20px] ${titleClass} ${textColor}`}>
          Queremos compartir este día con vos
        </p>

        {ceremonia && (
          <section className={`my-3 mt-10 ${ceremoniaSectionClass}`}>
            <Image
              src="/ceremonia.png"
              alt="icono iglesia"
              width={30}
              height={36}
              className={`mx-auto block my-3 mt-10 ${imageClass}`}
            />
            <p className={`lg:text-[20px] font-normal my-3 text-[15px] ${textClass} ${textColor}`}>
              Ceremonia
            </p>
            <p className={`text-[14px] font-normal mt-1 text-center ${lugarClass} ${textColor}`}>
              {lugarCeremonia}
            </p>
            <p className={`text-[14px] font-normal text-center ${horarioClass} ${textColor}`}>
              {horarioCeremonia}
            </p>
            <Link target="_blank" href={linkCeremonia}>
              <button
                className={buttonClass}
              >
                Como llegar
              </button>
            </Link>
          </section>
        )}

        {fiesta && (
          <section className={`my-3 mt-10 ${fiestaSectionClass}`}>
            <Image
              src="/cheers.png"
              alt="icono fiesta"
              width={70}
              height={70}
              className={`mx-auto block my-3 mt-10 ${imageClass}`}
            />
            <p className={`lg:text-[20px] font-normal my-3 text-[15px] ${textClass} ${textColor}`}>
              Fiesta
            </p>
            <p className={`text-[14px] font-normal mt-1 text-center ${lugarClass} ${textColor}`}>
              {lugarFiesta}
            </p>
            <p className={`text-[14px] font-normal text-center ${horarioClass} ${textColor}`}>
              {horarioFiesta}
            </p>
            <Link target="_blank" href={linkFiesta}>
              <button
                className={buttonClass}
              >
                Como llegar
              </button>
            </Link>
          </section>
        )}
      </section>
    </>
  );
};

export default Event;
