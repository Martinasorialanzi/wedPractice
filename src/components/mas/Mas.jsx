/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Mas = () => {
  return (
    <>
      <section
        id="Más"
        className=" w-[100%] justify-center items-center text-center mt-20 lg:px-[25px]  "
      >
        <section >
          <Image
            src="/dresscode.png"
            alt="spotify "
            width={45}
            height={50}
            className="mx-auto block "
          />
          <p className="lg:text-[30px] font-normal  my-4  text-[20px]">
            Dresscode
          </p>
          <p className="lg:text-[20px] font-normal  my-4 text-[15px]">
            Elegante
          </p>
          <div className="flex justify-center items-center">
          
          </div>
        </section>
        <section  className="mt-20">
          <Image
            src="/spotify.png"
            alt="spotify "
            width={39}
            height={39}
            className="mx-auto block "
          />
          <p className="lg:text-[30px] font-normal  my-4  text-[20px]">
            Canciones que no pueden faltar
          </p>
          <p className="lg:text-[20px] font-normal  my-4 text-[15px]">
            Queremos crear una playlist inolvidable
          </p>
          <div className="flex justify-center items-center">
          <button className="text-[15px] font-normal my-1  text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
              Añadir
            </button>
          </div>
        </section>

        <section className="mt-20 mb-20">
          <Image
            src="/camara.png"
            alt="spotify "
            width={75}
            height={50}
            className="mx-auto block mt-11"
          />
          <p className="lg:text-[30px] font-normal  my-4  text-[20px]">
            Recuerdos
          </p>
          <p className="lg:text-[20px] font-normal  my-4 text-[15px]">
            En este link podes compartirnos y ver fotos del evento
          </p>
          <div className="flex justify-center items-center">
          <button className="text-[15px] font-normal mt-1  text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
              Galeria
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Mas;
