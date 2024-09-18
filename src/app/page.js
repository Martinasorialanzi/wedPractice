import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import imgSquare1 from "../../public/cuad1.jpeg";
import imgSquare2 from "/public/cuad2.jpeg";
import imgSquare3 from "/public/cuad3.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
        <Banner
        grid
        nombres="Nombre & Nombre"
        fechaCountDown="2 de Noviembre"
        img1={imgSquare1}
        img2={imgSquare2}
        img3={imgSquare3}
        fechaCounter={"2024-11-02T18:00:00"}
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
        ceremonia
        lugarCeremonia="Iglesia Nuestra Señora del Valle"
        linkCeremonia="https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+del+Valle/@-26.815749,-65.293438,16z/data=!4m6!3m5!1s0x942242d62123af13:0xaa2edb3420b1b358!8m2!3d-26.815749!4d-65.293438!16s%2Fg%2F1tfwlfys?hl=es&entry=ttu"
        horarioCeremonia="17 hs"
        fiesta
        lugarFiesta="San Pablo Country Club"
        linkFiesta="https://www.google.com/maps/place/Sal%C3%B3n+Country+San+Pablo/@-26.8472055,-65.3262783,17z/data=!3m1!4b1!4m6!3m5!1s0x942243724e3770d3:0x9bd5dce35e9f0452!8m2!3d-26.8472055!4d-65.323698!16s%2Fg%2F11csqg3qvx?hl=es&entry=ttu"
        horarioFiesta="19hs"
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
        linkConfirmacion="https://docs.google.com/forms/d/e/1FAIpQLScZvrbe-s09VXlI9R-CqH7trlfLHaH_2AgQVfWuelOCFCNOSg/viewform"
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
        regaloLista={true}
        regaloAlias={true}
        // sectionClass=""
        // imageClass=""
        // titleClass=""
        // descriptionClass=""
        // buttonClass=""
        // modalBackgroundClass=""
        // modalContentClass=""
      />
      <Mas
        dresscode="Elegante"
        spotify="https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=_sxc0d_kTNWW32BpyQadcg&pi=u-TONuDD0FSg-u"
        fotos="https://drive.google.com/drive/folders/1NNdkgI-3xKHxj6R2vnVzJo7nKox-GSr5?usp=drive_link"
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
