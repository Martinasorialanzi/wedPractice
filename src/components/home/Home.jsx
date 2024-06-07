/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from 'react';
import Counter from "./Counter";
import useWindowSize from "../../utils/useWindowSize"

const Banner = () => {
  const { width } = useWindowSize();
  return (
    <>
      

      <section className="grid w-full justify-center items-center   ">
      <div className="relative bg-gradient-to-t from-transparent to-[#ffffff]  ">
        <p className="absolute w-full mt-5 text-[30px] lg:text-[40px] font-medium text-center  ">Nombre & Nombre</p>
        
        <Image
          src="/wedd.png"
          // ref={imageRef}
          priority
          alt='pareja'
          width={width}
          height={418}
          className=' justify-self-center'
          
        />
       
        
        <section className=" w-full col-span-1 text-center mt-3">
          <p className="text-[20px] font-normal text-center ">Save the date</p>
          <p className="text-[15px] font-normal text-center ">
            2 de Noviembre de 2023
          </p>
         <Counter />
        </section>
        </div>
      </section>
    </>
  );
};

export default Banner;
