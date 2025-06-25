"use client";
import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare2 from "../../../public/soledadJm/portadasSoledadJm.png";
import imgppal from "../../../public/soledadJm/portadasSoledadJm.png";
import { Poiret_One, Parisienne } from "next/font/google";
import React, { useEffect } from "react";
 
const didactGothic = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// ✨ Nueva fuente Parisienne para los títulos principales
const parisienne = Parisienne({
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

  // ✨ CLASE UNIFICADA CON EFECTO DE CAÍDA AL HACER SCROLL ✨
  const mainTitleClass = `${parisienne.className} lg:text-[36px] text-[26px] font-normal my-3 ${textColor} 
    opacity-0 translate-y-8 transition-all duration-700 ease-out drop-title`;

  // ✨ Hook para todas las animaciones - SIN TOCAR OTROS ARCHIVOS
  useEffect(() => {
    // CSS para las animaciones de deslizamiento y typewriter
    const style = document.createElement('style');
    style.textContent = `
      .slide-element {
        opacity: 0;
        transition: all 0.7s ease-out;
      }
      .slide-from-left {
        transform: translateX(-30px);
      }
      .slide-from-right {
        transform: translateX(30px);
      }
      .slide-element.visible {
        opacity: 1;
        transform: translateX(0);
      }
      
      /* ✨ Estilo para "the" en SAVE THE DATE */
      .parisienne-the {
        font-family: ${parisienne.style.fontFamily} !important;
        font-style: italic;
        text-transform: lowercase;
      }
      
      /* ✨ Estilo para efecto typewriter */
      .typewriter-container {
        display: inline-block;
        overflow: hidden;
      }
      .typewriter-text {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        width: 0;
        animation: typewriter 3s steps(40, end) forwards;
      }
      
      @keyframes typewriter {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);

    // ✨ Función para crear efecto typewriter en "SAVE THE DATE"
    const createTypewriterEffect = () => {
      const saveTheDateElements = document.querySelectorAll('p');
      saveTheDateElements.forEach(el => {
        if (el.textContent?.includes('SAVE THE DATE')) {
          // Ocultar el texto original temporalmente
          el.style.opacity = '0';
          
          // Crear el efecto typewriter
          setTimeout(() => {
            el.innerHTML = `
              <span class="typewriter-container">
                <span class="typewriter-text">SAVE <span class="parisienne-the">the</span> DATE</span>
              </span>
            `;
            el.style.opacity = '1';
          }, 1000); // Empieza 1 segundo después de cargar
        }
      });
    };

    // Aplicar clases a elementos específicos usando selectores CSS
    const applySlideClasses = () => {
      // Ceremonia - desde la izquierda (primero)
      const ceremoniaTexts = document.querySelectorAll('#Evento section:first-of-type p:not(.drop-title), #Evento section:first-of-type button');
      ceremoniaTexts.forEach(el => el.classList.add('slide-element', 'slide-from-left'));

      // Fiesta - desde la derecha (segundo)  
      const fiestaTexts = document.querySelectorAll('#Evento section:nth-of-type(2) p:not(.drop-title), #Evento section:nth-of-type(2) button');
      fiestaTexts.forEach(el => el.classList.add('slide-element', 'slide-from-right'));

      // Confirmación - desde la izquierda (tercero)
      const confirmacionTexts = document.querySelectorAll('#Confirmación p:not(.drop-title), #Confirmación button');
      confirmacionTexts.forEach(el => el.classList.add('slide-element', 'slide-from-left'));

      // Regalos - desde la derecha (cuarto)
      const regalosTexts = document.querySelectorAll('#Regalos p:not(.drop-title), #Regalos button');
      regalosTexts.forEach(el => el.classList.add('slide-element', 'slide-from-right'));

      // Dresscode - desde la izquierda (quinto)
      const dresscodeTexts = document.querySelectorAll('#Más p:not(.drop-title), #Más button');
      dresscodeTexts.forEach(el => el.classList.add('slide-element', 'slide-from-left'));
    };

    // Aplicar las modificaciones después de que se monte el componente
    setTimeout(() => {
      createTypewriterEffect();
      applySlideClasses();
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              // Para títulos que caen desde arriba
              if (entry.target.classList.contains('drop-title')) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
              }
              // Para elementos que se desliza
              else if (entry.target.classList.contains('slide-element')) {
                entry.target.classList.add('visible');
              }
            }, index * 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observar todos los elementos animados
    const observeElements = () => {
      const animatedElements = document.querySelectorAll('.drop-title, .slide-element');
      animatedElements.forEach(element => observer.observe(element));
    };

    // Observar elementos después de aplicar las clases
    setTimeout(observeElements, 200);

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

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
          // ✨ Pasar la clase unificada al Banner
          mainTitleClass={mainTitleClass}
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
        // ✨ Pasar la clase unificada
        mainTitleClass={mainTitleClass}
      />
        <Confirmation
          linkConfirmacion="https://forms.gle/fuzJNrEwuVzhaW4x7"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion="Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace."
          iconColor={iconColor}
          // ✨ Pasar la clase unificada
          mainTitleClass={mainTitleClass}
        />
        <Regalos
          alias={<FormattedText text={regaloAliasText} />}
          regaloLista={true}
          regaloAlias={true}
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          descripcion={regaloDescripcion}
          iconColor={iconColor} // También agregamos color para el icono de Regalos
          // ✨ Pasar la clase unificada
          mainTitleClass={mainTitleClass}
        />
        <Mas
          dresscode="Podes usar cualquier color menos el blanco y rosa"
          buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
          textColor={textColor}
          iconColor={iconColor}
          // ✨ Pasar la clase unificada
          mainTitleClass={mainTitleClass}
        />
      </main>
      <Footer footerClassName={`${buttonBgColor} h-[57px]`} />
    </>
  );
}