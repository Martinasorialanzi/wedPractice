import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/caroLuis/caroLuisPortada.png";
import imgppal from "../../../public/caroLuis/caroLuisPortada.png";
import { Didact_Gothic } from "next/font/google";
import React from "react";

const didactGothic = Didact_Gothic({
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
  const buttonBgColor = "bg-[#5E5E5E80]";
  const buttonHoverColor = "hover:bg-[#4a4a4a]";
  const buttonTextColor = "text-[#ffffff]";
  const textColor = "text-[#000000]";

  // Texto con saltos de línea para la sección de regalos
  const regaloAliasText = `• Alias: caro-luis1110

- Buzon en salon`;

  // Texto personalizado para la descripción de regalos
  const regaloDescripcion = "Podes hacerlo en:";

  // Los tres renglones de la sección fiesta
  const infoFiesta = `Ceremonia: 18:15 hs
Fiesta: 22:00 hs
Nuevo Terrazas de San José`;

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${didactGothic.className}
  bg-[url('/caroLuis/caroLuisBg.png')] bg-auto bg-repeat pt-12`}
      >
        <Banner
          grid
          nombres=""
          fechaCountDown=""
          img2={imgSquare2}
          imgPrincipal={imgppal}
          fechaCounter={"2026-10-11T18:15:00"}
          textColor={textColor}
          divGrid="max-w-4xl "
          divGridImage="w-1/3"
        />
        <Event
          extra={false}
          ceremonia={false}
          fiesta
          tituloFiesta="Te esperamos"
          lugarFiesta={<FormattedText text={infoFiesta} />}
          linkFiesta="https://maps.app.goo.gl/hhCzheYPznwcqSGf7"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
        />
        <Confirmation
          linkConfirmacion="https://forms.gle/W1K1xBM3q5tuD5pX9"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion="Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace."
        />
        <Regalos
          alias={<FormattedText text={regaloAliasText} />}
          regaloLista={true}
          regaloAlias={true}
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion={regaloDescripcion}
        />
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
}