"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Mas = ({
  dresscode,
  spotify,
  fotos,
  sectionClass = "w-[100%] justify-center items-center text-center my-1 lg:px-[25px]",
  imageClass = "mx-auto block my-3 mt-10",
  titleClass = "lg:text-[30px] font-normal my-3 text-[20px]",
  descriptionClass = "lg:text-[20px] font-normal my-3 text-[15px]",
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
    <>
      <section id="Más" className={sectionClass}>
        {dresscode && (
          <section>
            <Image
              src="/dresscode.png"
              alt="spotify"
              width={45}
              height={50}
              className={`mx-auto block my-3 mt-10 ${imageClass}`}
            />
            <p className={titleClass}>Dresscode</p>
            <p className={descriptionClass}>Te compartimos una sugerencia:</p>
            <div className="flex justify-center items-center">
              <button onClick={openModal} className={`text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a] ${buttonClass}`}>
                Ver
              </button>
            </div>
          </section>
        )}
        {spotify && (
          <section className="my-3 mt-10">
            <Image
              src="/spotify.png"
              alt="spotify"
              width={39}
              height={39}
              className={`mx-auto block my-3 mt-10 ${imageClass}`}
            />
            <p className={titleClass}>Canciones que no pueden faltar</p>
            <p className={descriptionClass}>
              Queremos crear una playlist inolvidable
            </p>
            <div className="flex justify-center items-center">
              <Link target="_blank" href={spotify}>
                <button className={`text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a] ${buttonClass}`}>Añadir</button>
              </Link>
            </div>
          </section>
        )}

        {fotos && (
          <section className="mb-10">
            <Image
              src="/camara.png"
              alt="spotify"
              width={75}
              height={50}
              className={`mx-auto block my-3 mt-10 ${imageClass}`}
            />
            <p className={titleClass}>Recuerdos</p>
            <p className={descriptionClass}>
              En este link podés compartirnos y ver fotos del evento
            </p>
            <div className="flex justify-center items-center">
              <Link target="_blank" href={fotos}>
                <button className={`text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a] ${buttonClass}`}>Galería</button>
              </Link>
            </div>
          </section>
        )}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={modalBackgroundClass} onClick={closeModal}></div>
          <div className={modalContentClass}>
            <p className="text-[14px] lg:text-[20px] mt-4 font-normal text-center">
              {dresscode}
            </p>
            <div className="flex justify-center mt-4">
              <button onClick={closeModal} className={`text-[15px] font-normal mt-1 text-center bg-[#5E5E5E] rounded-[30px] text-[#ffffff] w-[123px] h-[30px] transform transition-transform duration-200 hover:scale-105 hover:bg-[#4a4a4a] ${buttonClass}`}>
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
