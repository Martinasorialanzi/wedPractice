import React from "react";
import Image from "next/image";
import Link from "next/link";

const Confirmation = () => {
  return (
    <section
      id="Confirmación"
      className="col-span-1 justify-self-center text-center p-[0px] lg:px-[250px] my-3 mt-10 "
    >
      <Image
        src="/rsvp.png"
        alt="icono iglesia"
        width={60}
        height={36}
        className="mx-auto col-span-1 justify-self-center "
      />
      <p className="lg:text-[30px] font-normal text-[20px]  ">
        Esperamos tu confirmación{" "}
      </p>
      <p className="lg:text-[20px] font-normal  m-4  text-[14px]">
        Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        traves del enlace.
      </p>
      <Link target="_blank" href={"https://docs.google.com/forms/d/e/1FAIpQLScZvrbe-s09VXlI9R-CqH7trlfLHaH_2AgQVfWuelOCFCNOSg/viewform?usp=sf_link"}>
      <button className="text-[15px] font-normal mt-1  text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]">
        Confirmar
      </button>
      </Link>
    </section>
  );
};

export default Confirmation;
