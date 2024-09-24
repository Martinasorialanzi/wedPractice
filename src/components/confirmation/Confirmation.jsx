import React from "react";
import Image from "next/image";
import Link from "next/link";

const Confirmation = ({
  linkConfirmacion,
  sectionClass = "col-span-1 justify-self-center text-center p-[0px] lg:px-[250px] my-3 mt-10",
  imageClass = "mx-auto col-span-1 justify-self-center",
  titleClass = "lg:text-[30px] font-normal text-[20px]",
  descriptionClass = "lg:text-[20px] font-normal m-4 text-[14px]",
  buttonClass = "text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]",
}) => {
  return (
    <section id="Confirmación" className={sectionClass}>
      <Image
        src="/rsvp.png"
        alt="icono iglesia"
        width={60}
        height={36}
        className={imageClass}
      />
      <p className={titleClass}>Esperamos tu confirmación</p>
      <p className={descriptionClass}>
        Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace.
      </p>
      <Link target="_blank" href={linkConfirmacion}>
        <button className={`text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a] ${buttonClass}`}>Confirmar</button>
      </Link>
    </section>
  );
};

export default Confirmation;
