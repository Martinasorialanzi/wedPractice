import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/amparoJulian/ajPortada2.png";
import imgppal from "../../../public/amparoJulian/ajPortada2.png";
import imgCeremonia from "../../../public/amparoJulian/ajCeremonia.png";
import imgFiesta from "../../../public/amparoJulian/ajFiesta.png";
import imgFotos from "../../../public/amparoJulian/ajFotos.png";
import { Playfair_Display, Cormorant_SC } from "next/font/google";
import Image from "next/image";
import React from "react";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

// Componente para formatear texto con saltos de línea
const FormattedText = ({ text, underlinedLines = [] }) => {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {underlinedLines.includes(line) ? (
        <span className="underline">{line}</span>
      ) : (
        line
      )}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));
};

export default function Home() {
  const buttonBgColor = "bg-[#686c65]";
  const buttonHoverColor = "hover:bg-[#4a4a4a]";
  const buttonTextColor = "text-[#e2e2e2]";
  const textColor = "text-[#686c65]";

  // Texto con saltos de línea para la sección de regalos
  const regaloAliasText = `• Mercado Pago
Jose Augusto Rubino
CVU: 0000003100050740770833
Alias: memi.pepe
CUIT/CUIL: 20364204818      

• Buzon en salon`;

  // Texto personalizado para la descripción de regalos
  const regaloDescripcionText = `- Transferencia bancaria
Banco Francés 

Caja de Ahorro en Pesos 
Alias: AMPAROYJULIAN
CBU: 0170215840000022030296

Caja de ahorros en dólares 
Alias: AMPAROYJULIAN.USS
CBU: 0170215844000066003164


- Buzón en el Salón`;

  // Clase de título con la tipografía Cormorant SC para Ceremonia, Fiesta, Confirmación y Regalos
  const titleFontClass = `${cormorantSC.className} lg:text-[32px] font-medium my-3 text-[22px] tracking-wide ${textColor}`;

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${playfairDisplay.className}
  bg-[#CCD3C6] pt-4`}
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
          showSaveTheDate={false}
          sectionClass="!mt-2"
        />
        <Event
          extra={false}
          showTituloPrincipal={false}
          showIcon={false}
          sectionClass="!mt-2"
          ceremoniaSectionClass="!mt-2"
          mainTitleClass={titleFontClass}
          ceremoniaImage={imgCeremonia}
          ceremonia
          lugarCeremonia="Capilla del Sagrado Corazón de Jesús"
          linkCeremonia="https://maps.app.goo.gl/FY2gwo1PGKtgk6757"
          horarioCeremonia="17:15 hs"
          fiesta
          tituloFiesta="Recepción y Fiesta"
          fiestaImage={imgFiesta}
          lugarFiesta="Salón Hostería Villa Nougues"
          linkFiesta="https://maps.app.goo.gl/rV6FbxLkfxzpvFKr8"
          horarioFiesta="18:30 hs"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
        />
        <Confirmation
          linkConfirmacion="https://forms.gle/CZNeNSY92v5NqN6w9"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion="Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace antes del 7 de Noviembre"
          showIcon={false}
          mainTitleClass={titleFontClass}
        />
        <Regalos
          alias={<FormattedText text={regaloAliasText} />}
          regaloLista={true}
          regaloAlias={true}
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion={
            <FormattedText
              text={regaloDescripcionText}
              underlinedLines={["Transferencia bancaria", "Buzón en el salón"]}
            />
          } // Nuevo texto personalizado
          showIcon={false}
          showVerButton={false}
          mainTitleClass={titleFontClass}
        />
        <Image
          src={imgFotos}
          alt="Fotos"
          className="w-full max-w-md object-contain my-6"
        />
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
}
