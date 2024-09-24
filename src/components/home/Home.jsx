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
  imgPrincipal,
  fechaCounter,
  grid = true,
  textColor,
  titulo,
  tituloClass,
  // Props adicionales para estilos personalizados
  sectionClass = "",
  titleClass = "",
  relativeClass = "",
  imageClass = "",
  gridContainerClass = "",
  saveTheDateClass = "",
  fechaCountDownClass = "",
  counterSectionClass = "",
  counterClass = '',
  bannerMobileClass = '',
  widthImgBanner="",
  heightImgBanner=""
}) => {
  return (
    <>
      <section
        className={`w-[100%] justify-center items-center text-center my-3 mt-0 md:mt-10 lg:mt-10 ${sectionClass}`}
      >
        <p
          className={`lg:text-[30px] md:text-[30px] font-normal my-3 text-[20px] hidden lg:block md:block ${titleClass} ${textColor}`}
        >
          {titulo && (
            <>
              <span className={tituloClass}>{titulo}</span><br />
            </>
          )}
          <span>{nombres}</span>
        </p>
        <div className={`relative ${relativeClass}`}>
          <div className={`block md:hidden ${bannerMobileClass}`}>
            <p className={`absolute w-full mt-5 text-[30px] lg:text-[40px] font-medium text-center ${titleClass} ${textColor}`}>
              {titulo && (
                <>
                  <span className={tituloClass}>{titulo}</span><br />
                </>
              )}
              <span>{nombres}</span>
            </p>
            <Image
              src={imgPrincipal}
              alt="pareja"

              className={`w-full object-cover ${imageClass}`}

            />
          </div>

          {grid ? (
            <div className={`hidden md:block mt-16 ${gridContainerClass}`}>
              <Grid img1={img1} img2={img2} img3={img3} width={widthImgBanner} height={heightImgBanner}/>
            </div>
          ) : null}

          <section className={`my-3 mt-20 ${counterSectionClass}`}>
            <p className={`text-[20px] font-normal text-center ${saveTheDateClass} ${textColor}`}>
              Save the date
            </p>
            <p className={`text-[15px] font-normal text-center ${fechaCountDownClass} ${textColor}`}>
              {fechaCountDown}
            </p>
            <Counter fechaCounter={fechaCounter} counterStyle={`${textColor} ${counterClass}`} />
          </section>
        </div>
      </section>
    </>
  );
};

export default Banner;
