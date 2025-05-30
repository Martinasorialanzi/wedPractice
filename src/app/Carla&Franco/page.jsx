import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare1 from '../../../public/carlaFranco/CARLAYFRANCO-28.jpg';
import imgSquare2 from '../../../public/carlaFranco/CARLAYFRANCO-28.jpg';
import imgSquare3 from '../../../public/carlaFranco/CARLAYFRANCO-28.jpg';
import imgppal from '../../../public/carlaFranco/carlaFranco.png';
import { Inika } from "next/font/google";
import React from "react";

const inika = Inika({ subsets: ["latin"], weight: ["400", "700"] });

// Componente personalizado para texto con color y margen personalizado en móvil
const ResponsiveStyledName = ({ children, mobileColor, mobileMarginTop }) => {
  const mobileStyles = {
    color: mobileColor ? mobileColor.replace('text-[', '').replace(']', '') : 'inherit',
    marginTop: mobileMarginTop || '20px' // valor predeterminado
  };

  return (
    <>
      {/* Versión para desktop - normal */}
      <span className="hidden md:inline">{children}</span>
      
      {/* Versión para móvil - con color y margen personalizado */}
      <span 
        className={`inline md:hidden ${mobileColor ? mobileColor : ''}`}
        style={{ marginTop: mobileStyles.marginTop, display: 'block' }}
      >
        {children}
      </span>
    </>
  );
};

export default function CarlaFranco() {
  const buttonBgColor = "bg-[#5E5E5E80]";
  const buttonHoverColor = "hover:bg-[#4a4a4a]";
  const buttonTextColor = "text-[#ffffff]";
  const textColor = "text-[#000000]";
  const mobileNameColor = "text-[#FFFFFF]"; // Color dorado para versión móvil

  return (
    <>
    <main className={`flex min-h-screen flex-col items-center justify-between ${inika.className}`}>
        <Banner
        grid
        nombres={
          <ResponsiveStyledName 
            mobileColor={mobileNameColor} 
            mobileMarginTop="50px" // Aquí puedes ajustar el margen superior
          >
            
          </ResponsiveStyledName>
        }
        fechaCountDown="12 de Abril"
        img1={imgSquare1}
        img2={imgSquare2}
        img3={imgSquare3}
        imgPrincipal={imgppal} 
        fechaCounter={"2025-04-12T13:00:00"}
        textColor={textColor}
        divGrid="max-w-4xl "
        divGridImage="w-1/3"
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
      />
      {/* Resto de los componentes... */}
       <Confirmation
        linkConfirmacion="https://docs.google.com/forms/d/e/1FAIpQLScEA5zlDwy9j4qI5fskLjXb25e1r6LIAdN51FXR9mlShZN47Q/viewform?usp=header"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        descripcion='Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace.'
      />
       <Regalos
        alias="ALIAS: boda.carla.franco"
        regaloLista={true}
        regaloAlias={true}
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
      />
      <Mas
        dresscode="Elegante"
        spotify="https://open.spotify.com/playlist/2AtXtjjgraA8opfgobbI4E?si=M4MP4AibQi2_ikCfKOeMXQ&pi=HjZUqKhdRWq3D&pt=f44140756f0606a0025cb4d6ddad6b62"
        fotos="https://photos.app.goo.gl/UWhmajx21u96enPr7"   
        masInfo
        masInfoDescription="Te dejamos contactos de alquileres y traslados a Villa Nougues"
        extraInfo="• Alquiler de alojamiento en Villa Nougues: 3814491052
        • Servicio de trafic: 3815716477"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}   
      />
    </main>
    <Footer footerClassName={`${buttonBgColor} h-[57px]`}/>
    </>
  );
}