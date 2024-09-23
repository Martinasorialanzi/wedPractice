import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import portada from './assets/portada.jpeg';
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({subsets: ["latin"], weight: ["400", "700"] })

export default function NoemiJorge() {
  const buttonBgColor = "bg-[#587399]";
  const buttonHoverColor = "hover:bg-[#4a4a4a]";
  const buttonTextColor = "text-[#ffffff]";
  const textColor = "text-[#587399]";
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${dancing.className}`}>
        <Banner
        grid={true}
        nombres="Noemí & Jorge"
        fechaCountDown="11 de Noviembre"
        fechaCounter={"2024-11-30T19:00:00"}
        img2={portada}
        imgPrincipal={portada}
        textColor={textColor}
        // sectionClass=""
        // titleClass=""
        // relativeClass=""
        // imageClass=""
        // gridContainerClass=""
        // saveTheDateClass=""
        // fechaCountDownClass=""
        // counterSectionClass=""
      />
      <Event
        ceremonia={false}
        fiesta
        lugarFiesta="Finca Helvecia"
        linkFiesta="https://www.google.com/maps/place/Finca+Helvecia/@-27.229575,-65.3562433,15z/data=!4m6!3m5!1s0x9423b1c826e9a8ed:0x592654f7011510e5!8m2!3d-27.229575!4d-65.3562433!16s%2Fg%2F11sgdmmyl6?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
        horarioFiesta="19hs"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        // sectionClass=""
        // titleClass=""
        // textClass=""
        // buttonClass=""
        // imageClass=""
        // ceremoniaSectionClass=""
        // fiestaSectionClass="" 
        // lugarClass=""
        // horarioClass="" 
        // buttonCeremoniaClass="" 
        // buttonFiestaClass="" 
      />
       <Confirmation
        linkConfirmacion="https://docs.google.com/forms/d/e/1FAIpQLSf1aptWb7hcd3I90TI1fmum1xJnhkBgEmdkGx43RZmP8IRG9w/viewform?usp=sf_link"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        // sectionClass=""
        // imageClass=""
        // titleClass=""
        // descriptionClass=""
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
        // titleClass=""
        // descriptionClass=""
        // buttonClass=""
        // modalBackgroundClass=""
        // modalContentClass=""
      />
      <Mas
        // dresscode="Elegante"
        // spotify="https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=_sxc0d_kTNWW32BpyQadcg&pi=u-TONuDD0FSg-u"
        fotos="https://drive.google.com/drive/folders/1NNdkgI-3xKHxj6R2vnVzJo7nKox-GSr5?usp=drive_link"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor} 
        // sectionClass=""
        // imageClass=""
        // titleClass=""
        // descriptionClass=""
        // buttonClass=""
        // modalBackgroundClass=""
        // modalContentClass=""
      />
    </main>
  );
}
