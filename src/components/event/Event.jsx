/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Event = () => {
  return (
    <>
    <section className=" lg:ml-20 mt-10">
      <section
        id="Evento"
        className="grid grid-cols-1 w-[100%] justify-center items-center lg:grid-cols-2 hidden lg:grid"
        >
        <section className="col-span-1 justify-self-center ">
          <p className="text-[40px] font-normal  text-left ">
            Estamos felices de compartir este día con vos
          </p>
        </section>
        <Image
          src="https://i.ibb.co/kDGMNk4/Rectangle-5.webp"
          alt="banner"
          width={600}
          height={290}
          className="col-span-1 justify-self-center "
          />
      </section>



      <section
    
    className="grid grid-cols-1 w-[100%] justify-center items-center lg:grid-cols-2 hidden lg:grid  mt-10"
    >
        <section className="col-span-1  ">
          <section>
            <p className="text-[30px] font-normal  text-left  ">Ceremonia</p>
            <p className="text-[20px] font-normal mt-3 text-left ">
              Iglesia Nuestra Señora del Valle 
            </p>
            <p className="text-[20px] font-normal text-left ">
              17hs
            </p>
            <button className="text-[20px] h-[40px] font-normal mt-3 text-center bg-[#C8C8C8] rounded-[10px] text-[#ffffff] w-[151px]">
              Ceremonia
            </button>
          </section>
          <section className="mt-10" >
            <p className="text-[30px] font-normal  text-left  ">Fiesta</p>
            <p className="text-[20px] font-normal mt-3 text-left ">
            San Pablo Country Club
            </p>
            <p className="text-[20px] font-normal  text-left ">
            19hs
            </p>

            <button className="text-[20px] h-[40px] font-normal mt-3 text-center bg-[#C8C8C8] rounded-[10px] text-[#ffffff] w-[151px]">
              Como llegar
            </button>
          </section>
        </section>
        <Image
          src="https://i.ibb.co/mXZwXXZ/Rectangle-3.webp"
          alt="banner"
          width={600}
          height={492}
          className=" col-span-1 justify-self-center "
          />
      </section>
        </section>


{/* responsive */}

<section className=" mt-0">
      <section
        id="Evento"
        className="grid w-[100%] justify-center items-center  lg:hidden"
        >
        <section className="col-span-1 justify-self-center ">
          <p className="text-[20px] font-medium  text-center mb-0 ">
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
    
    className="grid w-[100%] justify-center items-center  lg:hidden"
    >
        <section className="  col-span-1 mt-3 ">
        
          <section className="mt-3 text-center ">
            <Image
            src='/ceremonia.png'
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

            <button className="text-[15px] font-normal mt-1 mb-10 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px]">
              Como llegar
            </button>
          </section>
          <Image
          src="https://i.ibb.co/mXZwXXZ/Rectangle-3.webp"
          alt="banner"
          width={391}
          height={320}
          className=" col-span-1 justify-self-center "
          />
        </section>
        
      </section>
        </section>

    </>
  );
};

export default Event;
