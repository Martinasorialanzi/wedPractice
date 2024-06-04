import React from "react";

const Confirmation = () => {
  return (
    <section id="Confirmación" className="col-span-1 justify-self-center text-center p-[0px] lg:px-[250px] mt-10 lg:mt-20 ">
      <p className="lg:text-[30px] font-normal text-[20px]  ">Esperamos tu confirmación </p>
      <p className="lg:text-[20px] font-normal  m-4  text-[14px]">
        Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        traves del enlace.
      </p>
      <button className="text-[15px] font-normal mt-1  text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
              Confirmar
            </button>
    </section>
  );
};

export default Confirmation;
