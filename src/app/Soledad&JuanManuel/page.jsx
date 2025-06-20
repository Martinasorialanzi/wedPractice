import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/soledadJm/portadasSoledadJm.png";
import imgppal from "../../../public/soledadJm/portadasSoledadJm.png";
import { Poiret_One } from "next/font/google";
import React from "react";

const didactGothic = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Componente para formatear texto con saltos de línea
const FormattedText = ({ text }) => {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

export default function Home() {
  const buttonBgColor = "bg-[#beb2a4]";
  const buttonHoverColor = "hover:bg-[#beb2a4]";
  const buttonTextColor = "text-[#6a5646]";
  const textColor = "text-[#6a5646]";
  
  // Color personalizado para los iconos
  const iconColor = "#6a5646"; // Mismo color que el texto para armonía

  // Texto con saltos de línea para la sección de regalos
  const regaloAliasText = `• Mercado Pago
  

• Buzon en salon`;

  // Texto personalizado para la descripción de regalos
  const regaloDescripcion = "";

  return (
    <>
      {/* OPCIÓN 1: Quitar padding-top del main (ACTIVADA) */}
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${didactGothic.className}
  bg-[#e4d9cc] bg-auto bg-repeat`}
      >
        <Banner
          grid
          nombres=""
          fechaCountDown=""
          img2={imgSquare2}
          imgPrincipal={imgppal}
          fechaCounter={"2025-09-13T18:00:00"}
          textColor={textColor}
          divGrid="max-w-4xl "
          divGridImage="w-1/3"
          // Props para eliminar márgenes del Banner
          sectionClass="w-[100%] justify-center items-center text-center mt-0"
          imageClass="w-full object-cover"
        />

      <Event
        extra={false}
        ceremonia
        lugarCeremonia="Iglesia de Villa Nougués"
        linkCeremonia="https://maps.app.goo.gl/CcQLgFAwshoPwPU5A"
        horarioCeremonia="13.00 hs"
        fiesta
        lugarFiesta="Hosteria de Villa Nougués"
        linkFiesta="https://maps.app.goo.gl/Zx6qX7T4kK4NQf886"
        horarioFiesta="14.00 hs"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        iconColor={iconColor} // Color personalizado para los iconos
      />
        <Confirmation
          linkConfirmacion="https://forms.gle/fuzJNrEwuVzhaW4x7"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion="Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace."
          iconColor={iconColor}
        />
        <Regalos
          alias={<FormattedText text={regaloAliasText} />}
          regaloLista={true}
          regaloAlias={true}
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion={regaloDescripcion}
          iconColor={iconColor} // También agregamos color para el icono de Regalos
        />
        <Mas
          dresscode="Podes usar cualquier color menos el blanco y rosa"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          iconColor={iconColor}
        />
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
}