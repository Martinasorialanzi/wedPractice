/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const Regalos = () => {
  return (
    <section id='Regalos'className="grid grid-cols-1 w-[100%] justify-center items-center  m-5 lg:px-[250px] lg:m-20 ">
    <p className=" text-[20px] lg:text-[30px] font-normal text-center   ">Si queres hacernos un regalo </p>
    <section className="grid grid-cols-2 mx-5 lg:px-20 lg:py-10 ">
    <Image
      src="https://i.ibb.co/pb4kXxr/adversal.webp"
      alt="banner"
      width={97}
      height={97}
      className=" mt-4 justify-self-center  "
    />
    <Image
      src="https://i.ibb.co/9pHQws1/Vector.webp"
      alt="banner"
      width={97}
      height={31}
      className="cols  mt-10  justify-self-center "
    />
    </section>
      <p className="text-[14px] lg:text-[20px] mt-4   font-normal text-center ">Alias: wedding.project</p>


  </section>
  )
}

export default Regalos