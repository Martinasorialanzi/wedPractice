/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const Regalos = () => {
  return (
    <section id='Regalos'className="grid grid-cols-1 w-[100%] justify-center items-center lg:grid-cols-5 mt-10 ">
    <p className=" text-[20px] lg:text-[40px] font-normal text-center lg:col-span-2  ">Si queres hacernos un regalo </p>
    <section className="grid grid-cols-2 mx-5  ">
    <Image
      src="https://i.ibb.co/pb4kXxr/adversal.webp"
      alt="banner"
      width={97}
      height={97}
      className="lg:col-span-1 mt-4 justify-self-center lg:mt-0 "
    />
    <Image
      src="https://i.ibb.co/9pHQws1/Vector.webp"
      alt="banner"
      width={97}
      height={31}
      className="cols lg:col-span-1  mt-10 lg:mt-0 justify-self-center "
    />
    </section>
      <p className="text-[14px] lg:text-[20px] mt-4  lg:mt-0 font-normal text-center lg:col-span-1">Alias: wedding.project</p>


  </section>
  )
}

export default Regalos