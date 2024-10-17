import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import portada from "./assets/portada.jpeg";
import { Dancing_Script } from "next/font/google";
import Footer from "@/components/footer/Footer";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export default function NoemiJorge() {
  const buttonBgColor = "bg-[#58739980]";
  const buttonHoverColor = "hover:bg-[#587399]";
  const buttonTextColor = "text-[#ffffff]";
  const textColor = "text-[#587399]";
  const iconColor = "#425774";
  return (
    <>
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${dancing.className}`}
      style={{
        backgroundImage: `url('/noemiJorge/background.png')`,
      }}
    >
      <Banner
        grid={true}
        titulo="Nuestra Boda"
        nombres="Noemi & Jorge"
        tituloClass="lg:text-[40px] text-[30px]"
        fechaCountDown="11 de Noviembre"
        fechaCounter={"2024-11-30T19:00:00"}
        img2={portada}
        imgPrincipal={portada}
        textColor={textColor}
        // sectionClass=""
        titleClass="lg:text-[60px] relative text-[50px] font-bold"
        bannerMobileClass="flex flex-col-reverse"
        // relativeClass=""
        // imageClass=""
        // gridContainerClass=""
        saveTheDateClass={`lg:text-[30px] text-[25px] font-normal text-center ${textColor}`}
        fechaCountDownClass={`lg:text-[22px] text-[17px] font-normal text-center ${textColor}`}
        counterSectionClass="mt-8"
        counterClass="lg:text-[25px]"
        widthImgBanner="w-[550px]"
        heightImgBanner="h-[250px]"
        // divGrid= ""
      />
      <Event
        ceremonia={false}
        fiesta
        iconColor={iconColor}
        lugarFiesta="Finca Helvecia"
        linkFiesta="https://www.google.com/maps/place/Finca+Helvecia/@-27.229575,-65.3562433,15z/data=!4m6!3m5!1s0x9423b1c826e9a8ed:0x592654f7011510e5!8m2!3d-27.229575!4d-65.3562433!16s%2Fg%2F11sgdmmyl6?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
        horarioFiesta="20hs"
        Extra
        tituloExtra="Civil y bendicion de anillos y pareja"
        lugarExtra="Finca Helvecia"
        horarioExtra="20:30hs"
        linkExtra="https://www.google.com/maps/place/Finca+Helvecia/@-27.229575,-65.3562433,15z/data=!4m6!3m5!1s0x9423b1c826e9a8ed:0x592654f7011510e5!8m2!3d-27.229575!4d-65.3562433!16s%2Fg%2F11sgdmmyl6?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} text-[17px] lg:text-[20px] lg:w-[150px] lg:h-[40px]`}
        textColor={textColor}
        // sectionClass=""
        titleClass={`lg:text-[35px] font-normal text-[26px] ${textColor}`}

        // textClass=""
        // buttonClass=""
        // imageClass=""
        // ceremoniaSectionClass=""
        // fiestaSectionClass=""
        lugarClass={`lg:text-[23px] text-[19px] font-normal mt-1 text-center ${textColor}`}
        horarioClass={`lg:text-[23px] text-[19px] font-normal text-center ${textColor}`}
        // buttonCeremoniaClass=""
        // buttonFiestaClass=""
      />

      <Confirmation
        iconColor={iconColor} 
        linkConfirmacion="https://docs.google.com/forms/d/1V4x9nBBmgCxIl2cXds3tGV6v6D-zfnYrlKREvDdFxz4/viewform?edit_requested=true"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} text-[17px] lg:text-[20px] lg:w-[150px] lg:h-[40px]`}
        textColor={textColor}
        descripcion="Los momentos felices de la vida se tornan geniales si
          tenemos la suerte de compartirlo con la familia y amigos
          mas queridos. Tu estas entre ellos, por eso te esperamos
          para festejar y compartir nuestra felicidad juntos. Confirmanos tu presencia a
          través del enlace."
        // sectionClass=""
        // imageClass=""
        titleClass={`lg:text-[35px] font-normal text-[26px] ${textColor}`}
        descriptionClass={`lg:text-[23px] font-normal m-4 text-[18px] ${textColor}`}
        // buttonClass=""
      />
      <Regalos
        iconColor={iconColor}
        cbu="4530000800014383359592 a nombre de Jorge Frias, Banco Galicia"
        img1="https://i.ibb.co/pb4kXxr/adversal.webp"
        img2="https://i.ibb.co/9pHQws1/Vector.webp"
        regaloLista={false}
        regaloAlias={true}
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} text-[17px] lg:text-[20px] lg:w-[150px] lg:h-[40px]`}
        textColor={textColor}
        // sectionClass=""
        // imageClass=""
        titleClass={`lg:text-[35px] font-normal text-[26px] ${textColor}`}
        descriptionClass={`lg:text-[23px] font-normal m-4 text-[20px] ${textColor}`}
        // buttonClass=""
        // modalBackgroundClass=""
        modalContentClass={`bg-white rounded-lg p-6 z-10 lg:p-10 text-[23px] lg:text-[23px] font-normal m-4  w-[59%] ${textColor}`}
      />
      <Mas
        iconColor={iconColor}
        dresscode="Formal y Elegante"
        // spotify="https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=_sxc0d_kTNWW32BpyQadcg&pi=u-TONuDD0FSg-u"
        fotos="https://drive.google.com/drive/folders/1EeJ3s0Egx4A1Fp5wVNSM8GP34wWPzP_q?usp=sharing"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} text-[17px] lg:text-[20px] lg:w-[150px] lg:h-[40px]`}
        textColor={textColor}
        // sectionClass=""
        // imageClass=""
        titleClass={`lg:text-[35px] font-normal text-[26px] ${textColor}`}
        descriptionClass={`lg:text-[23px] font-normal m-4 text-[20px] ${textColor}`}
        // buttonClass=""
        // modalBackgroundClass=""
        modalContentClass={`bg-white rounded-lg p-6 z-10 lg:p-10 lg:text-[23px] font-normal m-4 text-[23px] ${textColor}`}
      />
   
    </main>
    <Footer footerClassName="bg-[#58739930] h-[57px]"/>
    </>
  );
}
