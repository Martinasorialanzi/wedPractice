"use client";

import Image from "next/image";
import React, { useState } from "react";

const Regalos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="Regalos"
      className="w-[100%] justify-center items-center text-center my-1 lg:px-[25px] mb-1"
    >
      <Image
        src="/gift.png"
        alt="icono iglesia"
        width={70}
        height={36}
        className="mx-auto block my-3 mt-10"
      />
      <p className="lg:text-[30px] font-normal my-3 text-[20px]">
        Si queres hacernos un regalo{" "}
      </p>
      <p className="lg:text-[20px] font-normal my-3 text-[15px] mx-2">
        ¡El mejor regalo es tu presencia! Si deseás realizarnos otro regalo,
        podés colaborar en:
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={openModal}
          className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]"
        >
          Ver
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg p-6 z-10">
            <section className="grid grid-cols-2 mx-5 lg:px-20 lg:py-10">
              <Image
                src="https://i.ibb.co/pb4kXxr/adversal.webp"
                alt="banner"
                width={97}
                height={97}
                className="mt-4 justify-self-center"
              />
              <Image
                src="https://i.ibb.co/9pHQws1/Vector.webp"
                alt="banner"
                width={97}
                height={31}
                className="mt-10 justify-self-center"
              />
            </section>
            <p className="text-[14px] lg:text-[20px] mt-4 font-normal text-center">
              Alias: wedding.project
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Regalos;
