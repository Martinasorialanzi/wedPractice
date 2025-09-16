import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/anita&Fede/anita&fede1.png";
import imgppal from "../../../public/anita&Fede/anita&fede1.png";
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
  const regaloAliasText = `• Ualá Bank S.A.U.
Federico Marcilla
CVU: 3840200500000008119908
Alias: fedeyanita.casa     

• Buzon en salon`;

  // Texto personalizado para la descripción de regalos
  const regaloDescripcion = "Su compañía en nuestro día especial es el mejor regalo que podríamos recibir. Si desean obsequiarnos algo, agradeceríamos una contribución para nuestro hogar";

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${didactGothic.className}
  bg-[rgb(255,255,255)] pt-12`}
      >
        <Banner
          grid
          nombres=""
          fechaCountDown=""
          img2={imgSquare2}
          imgPrincipal={imgppal}
          fechaCounter={"2025-09-13T21:00:00"}
          textColor={textColor}
          divGrid="max-w-4xl "
          divGridImage="w-1/3"
        />
        <Event
          extra={false}
          ceremonia={false}
          fiesta
          lugarFiesta="Florentina"
          linkFiesta="https://www.google.com/maps/place/Salon+de+fiestas+y+eventos+Florentina/data=!4m2!3m1!1s0x0:0xb0af4b848c12c3c2?sa=X&ved=1t:2428&ictx=111"
          horarioFiesta="21hs"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
        />
        <Confirmation
          linkConfirmacion="https://forms.gle/h46SuVhiD2zUSCrs8"
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
          fotos="https://photos.app.goo.gl/tB4eSxGDMzZYibti6"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
        />
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
} 