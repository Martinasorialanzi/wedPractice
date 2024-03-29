/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <section id='#home'className="grid grid-cols-1 w-[100%] justify-center items-center lg:grid-cols-2 hidden lg:grid">
        <Image
          src="https://i.ibb.co/svXWXcV/image-Banner.webp"
          alt="banner"
          width={600}
          height={800}
          className=" col-span-1 justify-self-center "
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
        <Image
          src="https://i.ibb.co/svXWXcV/image-Banner.webp"
          alt="banner"
          width={314}
          height={419}
          className="justify-self-center "
        />
        <section className="col-span-1 text-center mt-3">
          <p className="text-[25px] font-normal text-center ">Save the date</p>
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
