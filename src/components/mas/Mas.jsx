"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Mas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        id="Más"
        className="w-[100%] justify-center items-center text-center my-1 lg:px-[25px]"
      >
        <section>
          <Image
            src="/dresscode.png"
            alt="spotify"
            width={45}
            height={50}
            className="mx-auto block my-3 mt-10"
          />
          <p className="lg:text-[30px] font-normal my-3 text-[20px]">
            Dresscode
          </p>
          <p className="lg:text-[20px] font-normal my-3 text-[15px]">
            Te compartimos una sugerencia:
          </p>
          <div className="flex justify-center items-center">
            <button
              onClick={openModal}
              className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]"
            >
              Ver
            </button>
          </div>
        </section>
        <section className="my-3 mt-10">
          <Image
            src="/spotify.png"
            alt="spotify"
            width={39}
            height={39}
            className="mx-auto block"
          />
          <p className="lg:text-[30px] font-normal my-3 text-[20px]">
            Canciones que no pueden faltar
          </p>
          <p className="lg:text-[20px] font-normal my-3 text-[15px]">
            Queremos crear una playlist inolvidable
          </p>
          <div className="flex justify-center items-center">
            <Link target="_blank" href={"https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=_sxc0d_kTNWW32BpyQadcg&pi=u-TONuDD0FSg-u"}>
            <button className="text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]">
              Añadir
            </button>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <Image
            src="/camara.png"
            alt="spotify"
            width={75}
            height={50}
            className="mx-auto block my-3 mt-10"
          />
          <p className="lg:text-[30px] font-normal my-3 text-[20px]">
            Recuerdos
          </p>
          <p className="lg:text-[20px] font-normal my-3 text-[15px] mx-2">
            En este link podes compartirnos y ver fotos del evento
          </p>
          <div className="flex justify-center items-center">
            <Link target="_blank" href={"https://drive.google.com/drive/folders/1NNdkgI-3xKHxj6R2vnVzJo7nKox-GSr5?usp=drive_link"}>
            <button className="text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]">
              Galeria
            </button>
            </Link>
          </div>
        </section> 
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-lg p-6 z-10">
            <p className="text-[14px] lg:text-[20px] mt-4 font-normal text-center">
              Elegante
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
    </>
  );
};

export default Mas;
