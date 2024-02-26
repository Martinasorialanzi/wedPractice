/* eslint-disable @next/next/no-img-element */
import React from "react";

const Mas = () => {
  return (
    <>
      <section
        id="Más"
        className=" w-[100%] justify-center items-center text-center  p-[50px] lg:pt-[200px] lg:px-[250px] "
      >
        <section>
          <img
            src="https://i.ibb.co/3zzPHNt/Vector-1.webp"
            alt="spotify "
            className="mx-auto block w-[60px] h-[60px]"
          />
          <p className="lg:text-[40px] font-normal  mt-5  text-[20px]">
            Canciones que no pueden faltar
          </p>
          <p className="lg:text-[30px] font-normal  mt-5 text-[15px]">
            Queremos crear una playlist inolvidable
          </p>
          <div className="flex justify-center items-center">
          <button className=" lg:text-[20px] text-[15px] font-normal mt-5 text-center bg-[#C8C8C8] rounded-[10px] text-[#ffffff] w-[220px] h-[40px]">
            Agregar a la playlist
          </button>
          </div>
        </section>

        <section>
          <img
            src="https://i.ibb.co/kqFCr9D/Vector-2.webp"
            alt="spotify "
            className="mx-auto block w-[60px] h-[50px] mt-20"
          />
          <p className="lg:text-[40px] font-normal  mt-5  text-[20px]">
            Recuerdos
          </p>
          <p className="lg:text-[30px] font-normal  mt-5 text-[15px]">
            En este link podes compartirnos y ver fotos del evento
          </p>
          <div className="flex justify-center items-center">
          <button className="lg:text-[20px] text-[15px] font-normal mt-5 text-center bg-[#C8C8C8] rounded-[10px] text-[#ffffff] w-[220px] h-[40px]">
            Galeria
          </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Mas;
