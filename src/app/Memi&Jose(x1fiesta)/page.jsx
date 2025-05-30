import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/Memi&Jose/memiJose1.png";
import imgppal from "../../../public/Memi&Jose/memiJose1.png";
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
  const regaloAliasText = `• Mercado Pago
Jose Augusto Rubino
CVU: 0000003100050740770833
Alias: memi.pepe
CUIT/CUIL: 20364204818      

• Buzon en salon`;

  // Texto personalizado para la descripción de regalos
  const regaloDescripcion = "Si queres ayudarnos con nuestra Luna de Miel:";

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${didactGothic.className}
  bg-[url('/Memi&Jose/memiJoseBg.png')] bg-auto bg-repeat pt-12`}
      >
        <Banner
          grid
          nombres=""
          fechaCountDown=""
          img2={imgSquare2}
          imgPrincipal={imgppal}
          fechaCounter={"2025-05-17T18:00:00"}
          textColor={textColor}
          divGrid="max-w-4xl "
          divGridImage="w-1/3"
        />
        <Event
          extra={false}
          ceremonia = {false}
          fiesta
          lugarFiesta="Salón Las Marias"
          linkFiesta="https://maps.app.goo.gl/pH1XHRm7yuNYSTS47"
          horarioFiesta="22.30hs"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
        />
        <Confirmation
          linkConfirmacion="https://forms.gle/uincSLstkKFgmRcs5"
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
          descripcion={regaloDescripcion} // Nuevo texto personalizado
        />
        <Mas
          dresscode="Elegante"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
        />
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
}
