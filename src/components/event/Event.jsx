/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
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
          <Link target="_blank" href='https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+del+Valle/@-26.815749,-65.293438,16z/data=!4m6!3m5!1s0x942242d62123af13:0xaa2edb3420b1b358!8m2!3d-26.815749!4d-65.293438!16s%2Fg%2F1tfwlfys?hl=es&entry=ttu'>
          <button className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]">
            Como llegar
          </button>
          </Link>
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
          <Link target="_blank" href='https://www.google.com/maps/place/Sal%C3%B3n+Country+San+Pablo/@-26.8472055,-65.3262783,17z/data=!3m1!4b1!4m6!3m5!1s0x942243724e3770d3:0x9bd5dce35e9f0452!8m2!3d-26.8472055!4d-65.323698!16s%2Fg%2F11csqg3qvx?hl=es&entry=ttu'>
          <button className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]">
            Como llegar
          </button>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Event;
