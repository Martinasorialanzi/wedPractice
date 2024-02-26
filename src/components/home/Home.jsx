/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <>
      <section id='#home'className="grid grid-cols-1 w-[100%] justify-center items-center lg:grid-cols-2 hidden lg:grid">
        <img
          src="https://i.ibb.co/svXWXcV/image-Banner.webp"
          alt="banner"
          className="w-[65%] h-[100%] col-span-1 justify-self-center "
        />
        <section className="col-span-1 justify-self-center text-center">
          <p className="text-[55px] font-normal  ">Nombre & Nombre</p>
          <p className="text-[30px] font-normal text-right ">Save the date</p>
          <p className="text-[20px] font-normal text-right">11 de Noviembre de 2023</p>
          <p className="text-[30px] font-normal text-right">
            54 dias | 12 horas | 53 minutos
          </p>
        </section>
      </section>

      <section className="grid w-[100%] justify-center items-center  lg:hidden">
        <p className="text-[30px] font-medium text-center">Nombre & Nombre</p>
        <img
          src="https://i.ibb.co/svXWXcV/image-Banner.webp"
          alt="banner"
          className="w-[80%] h-[100%]  justify-self-center "
        />
        <section className="col-span-1 text-center mt-3">
          <p className="text-[15px] font-normal text-center ">Save the date</p>
          <p className="text-[20px] font-normal text-center ">
            11 de Noviembre de 2023
          </p>
          <p className="text-[15px] font-normal text-center ">
            54 dias | 12 horas | 53 minutos
          </p>
        </section>
      </section>
    </>
  );
};

export default Banner;
