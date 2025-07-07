import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/marianaVicente/portadaMV2.png";
import imgppal from "../../../public/marianaVicente/portadaMV2.png";
import { Cormorant_Garamond } from "next/font/google";
import React from "react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  const regaloAliasText = `• Alias: marianayvicente 
Mariana Rossi
Banco Galicia
CTA: 4274084-2 089-9
CBU: 00700894-30004274084299
CUIL: 27-37191501-5

• Buzon en salon`;

  // Texto personalizado para la descripción de regalos
  const regaloDescripcion = " ";

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${cormorantGaramond.className}
  bg-white`}
      >
        <Banner
          grid
          nombres=""
          fechaCountDown=""
          img2={imgSquare2}
          imgPrincipal={imgppal}
          fechaCounter={"2025-08-09T12:30:00"}
          textColor={textColor}
          divGrid="max-w-4xl "
          divGridImage="w-1/3"
          sectionClass="w-[100%] justify-center items-center text-center mt-0"
          imageClass="w-full object-cover"
        />
      <Event
      extra={false}
        ceremonia
        lugarCeremonia="Iglesia de Villa Nougués"
        linkCeremonia="https://maps.app.goo.gl/CcQLgFAwshoPwPU5A"
        horarioCeremonia="12.30 hs"
        fiesta
        lugarFiesta="Después de la ceremonia, te esperamos para la recepción"
        linkFiesta="https://maps.app.goo.gl/Zx6qX7T4kK4NQf886"
        horarioFiesta="Hostería de Villa Nougués"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
      />
        <Confirmation
          linkConfirmacion="https://forms.gle/fuzJNrEwuVzhaW4x7"
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
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
}