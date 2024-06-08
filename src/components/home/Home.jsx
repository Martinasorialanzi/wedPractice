// src/components/home/Banner.jsx

/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React from "react";
import Counter from "./Counter";
import Grid from "./Grid";

const Banner = () => {
  return (
    <>
      <section className="w-[100%] justify-center items-center text-center my-3 mt-0 md:mt-10 lg:mt-10">
        <p className="lg:text-[30px] md:text-[30px] font-normal my-3 text-[20px] hidden lg:block md:block">
          {" "}
          Nombre & Nombre
        </p>
        <div className="relative">
          <div className="block md:hidden">
          <p className="absolute w-full mt-5 text-[30px] lg:text-[40px] font-medium text-center  ">Nombre & Nombre</p>
            <img src="/wedd.png" alt="pareja" className="w-full object-cover" />
          </div>
          <div className="hidden md:block mt-16">
            {" "}
            <Grid />
          </div>

          <section className="my-3 mt-20">
            <p className="text-[20px] font-normal text-center">Save the date</p>
            <p className="text-[15px] font-normal text-center">
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
