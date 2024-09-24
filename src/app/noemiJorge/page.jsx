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
        tituloClass="text-[30px]"
        fechaCountDown="11 de Noviembre"
        fechaCounter={"2024-11-30T19:00:00"}
        img2={portada}
        imgPrincipal={portada}
        textColor={textColor}
        // sectionClass=""
        titleClass="relative text-[50px] font-bold"
        bannerMobileClass="flex flex-col-reverse"
        // relativeClass=""
        // imageClass=""
        // gridContainerClass=""
        saveTheDateClass={`text-[25px] font-normal text-center ${textColor}`}
        fechaCountDownClass={`text-[17px] font-normal text-center ${textColor}`}
        counterSectionClass="mt-8"
        // widthImgBanner="w-[100rem]"
        // heightImgBanner="h-[20rem]"
      />
      <Event
        ceremonia={false}
        fiesta
        lugarFiesta="Finca Helvecia"
        linkFiesta="https://www.google.com/maps/place/Finca+Helvecia/@-27.229575,-65.3562433,15z/data=!4m6!3m5!1s0x9423b1c826e9a8ed:0x592654f7011510e5!8m2!3d-27.229575!4d-65.3562433!16s%2Fg%2F11sgdmmyl6?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
        horarioFiesta="19hs"
        Extra
        tituloExtra="Civil y bendicion de anillos y pareja"
        lugarExtra="Finca Helvecia"
        horarioExtra="20hs"
        linkExtra="https://www.google.com/maps/place/Finca+Helvecia/@-27.229575,-65.3562433,15z/data=!4m6!3m5!1s0x9423b1c826e9a8ed:0x592654f7011510e5!8m2!3d-27.229575!4d-65.3562433!16s%2Fg%2F11sgdmmyl6?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        // sectionClass=""
        titleClass={`lg:text-[30px] font-normal text-[23px] ${textColor}`}

        // textClass=""
        // buttonClass=""
        // imageClass=""
        // ceremoniaSectionClass=""
        // fiestaSectionClass=""
        lugarClass={`text-[17px] font-normal mt-1 text-center ${textColor}`}
        horarioClass={`text-[17px] font-normal text-center ${textColor}`}
        // buttonCeremoniaClass=""
        // buttonFiestaClass=""
      />

      <Confirmation
        linkConfirmacion="https://docs.google.com/forms/d/1V4x9nBBmgCxIl2cXds3tGV6v6D-zfnYrlKREvDdFxz4/viewform?edit_requested=true"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        descripcion="Los momentos felices de la vida se tornan geniales si
          tenemos la suerte de compartirlo con la familia y amigos
          mas queridos. Tu estas entre ellos, por eso te esperamos
          para festejar y compartir nuestra felicidad juntos. Confirmanos tu presencia a
          través del enlace."
        // sectionClass=""
        // imageClass=""
        titleClass={`lg:text-[30px] font-normal text-[23px] ${textColor}`}
        descriptionClass={`lg:text-[20px] font-normal m-4 text-[17px] ${textColor}`}
        // buttonClass=""
      />
      <Regalos
        alias="Mi Alias"
        img1="https://i.ibb.co/pb4kXxr/adversal.webp"
        img2="https://i.ibb.co/9pHQws1/Vector.webp"
        regaloLista={false}
        regaloAlias={true}
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        // sectionClass=""
        // imageClass=""
        titleClass={`lg:text-[30px] font-normal text-[23px] ${textColor}`}
        descriptionClass={`lg:text-[20px] font-normal m-4 text-[17px] ${textColor}`}
        // buttonClass=""
        // modalBackgroundClass=""
        // modalContentClass=""
      />
      <Mas
        dresscode="Formal y Elegante"
        // spotify="https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=_sxc0d_kTNWW32BpyQadcg&pi=u-TONuDD0FSg-u"
        fotos="https://drive.google.com/drive/folders/1NNdkgI-3xKHxj6R2vnVzJo7nKox-GSr5?usp=drive_link"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        // sectionClass=""
        // imageClass=""
        titleClass={`lg:text-[30px] font-normal text-[23px] ${textColor}`}
        descriptionClass={`lg:text-[20px] font-normal m-4 text-[17px] ${textColor}`}
        // buttonClass=""
        // modalBackgroundClass=""
        // modalContentClass=""
      />
    <Footer footerClassName="bg-[#58739930]"/>
   
    </main>
  );
}
