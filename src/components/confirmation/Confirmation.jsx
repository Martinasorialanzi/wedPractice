import React from "react";

const Confirmation = () => {
  return (
    <section id="Confirmación" className="col-span-1 justify-self-center text-center p-[50px] lg:p-[200px] lg:px-[250px] ">
      <p className="lg:text-[40px] font-normal text-[20px]  ">Esperamos tu confirmación </p>
      <p className="lg:text-[30px] font-normal  mt-10  text-[14px]">
        Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        traves del enlace a continuación, y anota cualquier restricción
        dietética o petición especial.
      </p>
      <button className="lg:text-[20px] text-[15px] font-normal mt-10 text-center bg-[#C8C8C8] rounded-[10px] text-[#ffffff] w-[220px] h-[40px]">
        Confirmar presencia
      </button>
    </section>
  );
};

export default Confirmation;
