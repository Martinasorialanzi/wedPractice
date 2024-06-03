/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Mas = () => {
  return (
    <>
      <section
        id="Más"
        className=" w-[100%] justify-center items-center text-center mt-5 p-[30px]  lg:px-[250px] lg:mt-20 "
      >
        <section>
          <Image
            src="https://i.ibb.co/3zzPHNt/Vector-1.webp"
            alt="spotify "
            width={53}
            height={53}
            className="mx-auto block "
          />
          <p className="lg:text-[40px] font-normal  mt-4  text-[20px]">
            Canciones que no pueden faltar
          </p>
          <p className="lg:text-[30px] font-normal  mt-4 text-[15px]">
            Queremos crear una playlist inolvidable
          </p>
          <div className="flex justify-center items-center">
          <button className=" lg:text-[20px] text-[15px] font-normal mt-4 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[181px] lg: w-[228px] h-[30px]">
            Agregar a la playlist
          </button>
          </div>
        </section>

        <section className="lg:mt-20">
          <Image
            src="https://i.ibb.co/kqFCr9D/Vector-2.webp"
            alt="spotify "
            width={53}
            height={46}
            className="mx-auto block mt-11"
          />
          <p className="lg:text-[40px] font-normal  mt-4  text-[20px]">
            Recuerdos
          </p>
          <p className="lg:text-[30px] font-normal  mt-4 text-[15px]">
            En este link podes compartirnos y ver fotos del evento
          </p>
          <div className="flex justify-center items-center">
          <button className="lg:text-[20px] text-[15px] font-normal mt-4 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[90px] h-[30px]">
            Galeria
          </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Mas;
