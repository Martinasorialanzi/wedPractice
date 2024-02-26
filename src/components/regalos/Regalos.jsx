/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Regalos = () => {
  return (
    <section id='Regalos'className="grid grid-cols-1 w-[100%] justify-center items-center lg:grid-cols-5 ">
    <p className=" text-[20px] lg:text-[40px] font-normal text-center lg:col-span-2  ">Si queres hacernos un regalo </p>
    <img
      src="https://i.ibb.co/pb4kXxr/adversal.webp"
      alt="banner"
      className="lg:col-span-1 lg:w-[40%] lg:h-[100%] w-[10%] h-[100%]  mt-4 justify-self-center lg:mt-0 "
    />
    <img
      src="https://i.ibb.co/9pHQws1/Vector.webp"
      alt="banner"
      className="cols lg:col-span-1 lg:w-[40%] lg:h-[30%] w-[70px] h-[40px] mt-10 lg:mt-0 justify-self-center "
    />
      <p className="text-[14px] lg:text-[20px] mt-4  lg:mt-0 font-normal text-center lg:col-span-1">Alias: wedding.project</p>


  </section>
  )
}

export default Regalos