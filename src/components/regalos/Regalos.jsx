"use client";
import React, { useState } from "react";
import Image from "next/image";

const Regalos = ({
  regaloLista = true,
  regaloAlias = true,
  alias,
  img1,
  img2,
  sectionClass = "w-[100%] justify-center items-center text-center my-1 lg:px-[25px] mb-1",
  imageClass = "mx-auto block my-3 mt-10",
  titleClass = "lg:text-[30px] font-normal my-3 text-[20px]",
  descriptionClass = "lg:text-[20px] font-normal my-3 text-[15px] mx-2",
  buttonClass = "text-[15px] font-normal my-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a]",
  modalBackgroundClass = "fixed inset-0 bg-black opacity-50",
  modalContentClass = "bg-white rounded-lg p-6 z-10",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="Regalos" className={sectionClass}>
      <Image
        src="/gift.png"
        alt="icono regalo"
        width={70}
        height={36}
        className={imageClass}
      />
      <p className={titleClass}>Si querés hacernos un regalo</p>
      <p className={descriptionClass}>
        ¡El mejor regalo es tu presencia! Si deseás realizarnos otro regalo,
        podés colaborar en:
      </p>
      <div className="flex justify-center items-center">
        <button onClick={openModal} className={buttonClass}>
          Ver
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={modalBackgroundClass} onClick={closeModal}></div>
          <div className={modalContentClass}>
            {regaloLista && (
              <section className="grid grid-cols-2 mx-5 lg:px-20 lg:py-10">
                {img1 && (
                  <Image
                    src={img1}
                    alt="banner"
                    width={97}
                    height={97}
                    className="mt-4 justify-self-center"
                  />
                )}
                {img2 && (
                  <Image
                    src={img2}
                    alt="banner"
                    width={97}
                    height={31}
                    className="mt-10 justify-self-center"
                  />
                )}
              </section>
            )}
            {regaloAlias && (
              <p className="text-[14px] lg:text-[20px] mt-4 font-normal text-center">
                Alias: {alias}
              </p>
            )}
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className={buttonClass}
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
