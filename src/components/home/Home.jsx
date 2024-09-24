// src/components/home/Banner.jsx

/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React from "react";
import Counter from "./Counter";
import Grid from "./Grid";


const Banner = ({
  nombres,
  fechaCountDown,
  img1,
  img2,
  img3,
  fechaCounter,
  grid = true,
  // Props adicionales para estilos personalizados
  sectionClass = "w-[100%] justify-center items-center text-center my-3 mt-0 md:mt-10 lg:mt-10",
  titleClass = "lg:text-[30px] md:text-[30px] font-normal my-3 text-[20px] hidden lg:block md:block ",
  relativeClass = "relative",
  imageClass = "w-full object-cover ",
  gridContainerClass = "hidden md:block mt-16",
  saveTheDateClass = "text-[20px] font-normal text-center ",
  fechaCountDownClass = "text-[15px] font-normal text-center",
  counterSectionClass = "my-3 mt-20",
  imageResponsive= true
}) => {
  return (
    <>
      <section
        className={`lg:text-[30px] md:text-[30px] font-normal my-3 text-[20px] hidden lg:block md:block  ${sectionClass}`}
      >
        <p
          className={`${titleClass}`}
        >
          {nombres}
        </p>
        <div className={` ${relativeClass}`}>
        {imageResponsive? (
          <div className="block md:hidden">
            <p className="absolute w-full mt-5 text-[30px] lg:text-[40px] font-medium text-center">
              {nombres}
            </p>
            <img
              src={imageResponsive}
              alt="pareja"
              className={`${imageClass}`}
            />
          </div>

        ): null }

          {grid ? (
            <div className={` ${gridContainerClass}`}>
              <Grid img1={img1} img2={img2} img3={img3} />
            </div>
          ) : null}

          <section className={` ${counterSectionClass}`}>
            <p className={`${saveTheDateClass}`}>
              Save the date
            </p>
            <p className={` ${fechaCountDownClass}`}>
              {fechaCountDown}
            </p>
            <Counter fechaCounter={fechaCounter} />
          </section>
        </div>
      </section>
    </>
  );
};

export default Banner;
