"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PiCoatHangerThin,
  PiSpotifyLogoLight,
  PiCameraLight,
  PiInfoLight, // Nuevo ícono para la sección de más info
} from "react-icons/pi";

const Mas = ({
  iconColor,
  dresscode,
  extraInfo,
  spotify,
  fotos,
  masInfo, // Nueva prop para el enlace o contenido de "Más Info"
  masInfoTitle = "Más información", // Título personalizable para la sección
  masInfoDescription = "Toda la información importante sobre nuestro evento", // Descripción personalizable
  textColor,
  sectionClass = "w-[100%] justify-center items-center text-center my-1 lg:px-[25px]",
  imageClass = "mx-auto block my-3 mt-10",
  titleClass = `${textColor} lg:text-[30px] font-normal my-3 text-[20px]`,
  descriptionClass = `lg:text-[20px] font-normal my-3 text-[15px] ${textColor}`,
  buttonClassColors,
  buttonClass = `
  text-[15px] font-normal my-1 text-center rounded-[30px] 
  w-[123px] h-[30px] 
  transform transition-transform duration-200 hover:scale-105 
  ${buttonClassColors}`,
  modalBackgroundClass = "fixed inset-0 bg-black opacity-50",
  modalContentClass = "bg-white rounded-lg p-6 z-10",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false); // Estado para el modal de más info

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openInfoModal = () => {
    setInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };

  return (
    <>
      <section id="Más" className={sectionClass}>
        {dresscode && (
          <section>
            <PiCoatHangerThin
              style={{ width: "3rem", height: "3rem" }}
              className="mx-auto block my-3 mt-10"
              color={iconColor}
            />
            <p className={titleClass}>Dresscode</p>
            <p className={descriptionClass}>Te compartimos una sugerencia:</p>
            <div className="flex justify-center items-center">
              <button onClick={openModal} className={buttonClass}>
                Ver
              </button>
            </div>
          </section>
        )}
        {spotify && (
          <section className="my-3 mt-10">
            <PiSpotifyLogoLight
              style={{ width: "3rem", height: "3rem" }}
              className="mx-auto block my-3 mt-10"
              color={iconColor}
            />
            <p className={titleClass}>Canciones que no pueden faltar</p>
            <p className={descriptionClass}>
              Queremos crear una playlist inolvidable
            </p>
            <div className="flex justify-center items-center">
              <Link target="_blank" href={spotify ?? "/"}>
                <button className={buttonClass}>Añadir</button>
              </Link>
            </div>
          </section>
        )}

        {fotos && (
          <section className="mb-10">
            <PiCameraLight
              style={{ width: "3rem", height: "3rem" }}
              className="mx-auto block my-3 mt-10"
              color={iconColor}
            />
            <p className={titleClass}>Recuerdos</p>
            <p className={descriptionClass}>
              En este link podés compartirnos y ver fotos del evento
            </p>
            <div className="flex justify-center items-center">
              <Link target="_blank" href={fotos ?? "/"}>
                <button className={buttonClass}>Galería</button>
              </Link>
            </div>
          </section>
        )}

        {/* Nueva sección de Más Info */}
        {masInfo && (
          <section className="mb-10">
            <PiInfoLight
              style={{ width: "3rem", height: "3rem" }}
              className="mx-auto block my-3 mt-10"
              color={iconColor}
            />
            <p className={titleClass}>{masInfoTitle}</p>
            <p className={descriptionClass}>{masInfoDescription}</p>
            <div className="flex justify-center items-center">
              {typeof masInfo === 'string' ? (
                <Link target="_blank" href={masInfo}>
                  <button className={buttonClass}>Ver más</button>
                </Link>
              ) : (
                <button onClick={openInfoModal} className={buttonClass}>
                  Ver más
                </button>
              )}
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
              <button onClick={closeModal} className={buttonClass}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para Más Info */}
      {infoModalOpen && typeof masInfo !== 'string' && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={modalBackgroundClass} onClick={closeInfoModal}></div>
          <div className={modalContentClass}>
            <div className="text-[14px] lg:text-[20px] mt-4 font-normal text-center">
              {typeof masInfo === 'object' ? masInfo : (
                <div className="text-left">
                {extraInfo.split('•').filter(item => item.trim()).map((item, index) => (
                  <p key={index} className="mb-2">• {item.trim()}</p>
                ))}
              </div>
              )}
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={closeInfoModal} className={buttonClass}>
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