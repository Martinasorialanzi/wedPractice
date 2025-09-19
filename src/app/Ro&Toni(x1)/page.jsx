import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/roToni/roToni1.png";
import imgppal from "../../../public/roToni/roToni1.png";
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
  const buttonBgColor = "bg-[#e0dcd8]";
  const buttonHoverColor = "hover:bg-[#e0dcd8]";
  const buttonTextColor = "text-[#ffffff]";
  const textColor = "text-[#746553]";
  const iconColor = "#746553";

  // Texto con saltos de línea para la sección de regalos
  const regaloAliasText = `• Alias: ro.toni
CVU: 0000003100020814781654
Nombre: Antonio Angelillo
Mercado Pago

• Buzón en salón`;

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
          fechaCounter={"2025-10-25T16:45:00"}
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
        horarioCeremonia="16.45 hs"
        fiesta
        lugarFiesta="Después de la ceremonia, te esperamos para la recepción"
        linkFiesta="https://maps.app.goo.gl/Zx6qX7T4kK4NQf886"
        horarioFiesta="Hostería de Villa Nougués"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        iconColor={iconColor} 
      />
        <Confirmation
          linkConfirmacion="https://forms.gle/U4eA7maPpofQ2u6z8"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          iconColor={iconColor}
          descripcion="Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace."
        />
        <Regalos
          alias={<FormattedText text={regaloAliasText} />}
          regaloLista={true}
          regaloAlias={true}
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          iconColor={iconColor}
          descripcion={regaloDescripcion} // Nuevo texto personalizado
        />
        <Mas
        textColor={textColor}
        iconColor={iconColor}
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          spotify="https://open.spotify.com/playlist/28yg8QG6rjzm5KNsUXuDz4?si=DUf1Fm6PTJOujTMaTC_hKA&pi=sFJHahjDTnK2V&pt=7b0e534777b5556ee2b2affbee6e8060"
        />
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
}