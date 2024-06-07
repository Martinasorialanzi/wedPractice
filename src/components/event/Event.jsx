/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Event = () => {
  return (
    <>
      <section
        id="Evento"
        className="w-[100%] justify-center items-center text-center my-3 mt-10"
      >

        <p className="lg:text-[30px] font-normal my-3 text-[20px]">
          Queremos compartir este día con vos
        </p>

        <section className="my-3 mt-10">
          <Image
            src="/ceremonia.png"
            alt="icono iglesia"
            width={30}
            height={36}
            className="mx-auto block my-3 mt-10"
          />
          <p className="lg:text-[20px] font-normal my-3 text-[15px]">
            Ceremonia
          </p>
          <p className="text-[14px] font-normal mt-1 text-center ">
            Iglesia Nuestra Señora del Valle
          </p>
          <p className="text-[14px] font-normal text-center ">17hs</p>
          <button className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
            Como llegar
          </button>
        </section>


        <section className="my-3 mt-10">
          <Image
            src="/cheers.png"
            alt="icono fiesta"
            width={70}
            height={70}
            className="mx-auto block my-3 mt-10"
          />
          <p className="lg:text-[20px] font-normal my-3 text-[15px]">Fiesta</p>
          <p className="text-[14px] font-normal mt-1 text-center ">
            San Pablo Country Club
          </p>
          <p className="text-[14px] font-normal  text-center ">19hs</p>

          <button className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
            Como llegar
          </button>
        </section>
      </section>
    </>
  );
};

export default Event;
