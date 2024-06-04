/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Event = () => {
  return (
    <>
  

<section className=" mt-0">
      <section
        id="Evento"
        className="grid w-[100%] justify-center items-center  "
        >
        <section className="col-span-1 justify-self-center ">
          <p className="text-[20px] lg:text-[30px] font-medium m-10 text-center mb-0 ">
            Queremos compartir este día con vos
          </p>
        </section>
        {/* <Image
          src="https://i.ibb.co/kDGMNk4/Rectangle-5.webp"
          alt="banner"
          width={391}
          height={189}
          className="col-span-1 justify-self-center "
          /> */}
      </section>



      <section
    
    className="grid w-[100%] justify-center items-center  "
    >
        <section className="  col-span-1 mt-3 ">
        
          <section className="mt-3 text-center ">
            <Image
            src='/ceremonia.png'
            alt='icono iglesia'
            width={30}
          height={36}
            className="mx-auto col-span-1 justify-self-center "
            />
            <p className="text-[20px] font-normal mt-1 text-center  ">Ceremonia</p>
            <p className="text-[14px] font-normal mt-1 text-center ">
              Iglesia Nuestra Señora del Valle 
            </p>
            <p className="text-[14px] font-normal text-center ">
              17hs
            </p>
            <button className="text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
              Como llegar
            </button>
          </section>
          <section className="mt-3 text-center" >
          <Image
            src='/fiesta.png'
            alt='icono fiesta'
            width={70}
          height={70}
            className="mx-auto col-span-1 justify-self-center "
            />
            <p className="text-[20px] font-normal mt-0 text-center  ">Fiesta</p>
            <p className="text-[14px] font-normal mt-1 text-center ">
            San Pablo Country Club
            </p>
            <p className="text-[14px] font-normal  text-center ">
            19hs
            </p>

            <button className="text-[15px] font-normal mt-1  text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
              Como llegar
            </button>
          </section>
          
        </section>
        
      </section>
        </section>

    </>
  );
};

export default Event;
