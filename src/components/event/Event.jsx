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
  ceremonia = true,
  fiesta = true,
  // Props adicionales para estilos personalizados
  sectionClass = "",
  titleClass = "",
  textClass = "",
  buttonClass = "",
  imageClass = "",
  ceremoniaSectionClass = "",
  fiestaSectionClass = "",
  lugarClass = "",
  horarioClass = "",
  buttonCeremoniaClass = "",
  buttonFiestaClass = ""
}) => {
  return (
    <>
      <section
        id="Evento"
        className={`w-[100%] justify-center items-center text-center my-3 mt-10 ${sectionClass}`}
      >
        <p className={`lg:text-[30px] font-normal my-3 text-[20px] ${titleClass}`}>
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
            <p className={`lg:text-[20px] font-normal my-3 text-[15px] ${textClass}`}>
              Ceremonia
            </p>
            <p className={`text-[14px] font-normal mt-1 text-center ${lugarClass}`}>
              {lugarCeremonia}
            </p>
            <p className={`text-[14px] font-normal text-center ${horarioClass}`}>
              {horarioCeremonia}
            </p>
            <Link target="_blank" href={linkCeremonia}>
              <button
                className={`text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a] ${buttonClass} ${buttonCeremoniaClass}`}
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
            <p className={`lg:text-[20px] font-normal my-3 text-[15px] ${textClass}`}>
              Fiesta
            </p>
            <p className={`text-[14px] font-normal mt-1 text-center ${lugarClass}`}>
              {lugarFiesta}
            </p>
            <p className={`text-[14px] font-normal text-center ${horarioClass}`}>
              {horarioFiesta}
            </p>
            <Link target="_blank" href={linkFiesta}>
              <button
                className={`text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a] ${buttonClass} ${buttonFiestaClass}`}
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
