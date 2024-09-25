import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Regalos from "@/components/regalos/Regalos";
import Footer from "@/components/footer/Footer";
import imgSquare1 from "./assets/2.webp";
import imgSquare2 from "./assets/1.webp";
import imgSquare3 from "./assets/3.webp";
import imgppal from './assets/1.webp';
import { Montserrat } from "next/font/google";
import { Dancing_Script } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });


export default function Home() {
  const buttonBgColor = "bg-[#ffffff]";
  const buttonHoverColor = "hover:bg-[#ffffff]";
  const buttonTextColor = "text-[#000000]";
  const textColor = "text-[#000000]";

  return (
    <>
    <main className={`flex min-h-screen flex-col items-center justify-between ${montserrat.className}`}
    style={{
        backgroundImage: `url('/guadiJuanchy/fondo.png')`,
        backgroundSize: '100% auto', // Ajusta el ancho al 100% y deja la altura automática
        backgroundRepeat: 'repeat-y', // Repite solo verticalmente
        backgroundPosition: 'top', // La posición inicial es arriba
      
      }}>
        <Banner
        grid
        nombres="Guadi y Juanchy"
        fechaCountDown="2 de Noviembre"
        img1={imgSquare1}
        img2={imgSquare2}
        img3={imgSquare3}
        imgPrincipal={imgppal} 
        fechaCounter={"2024-11-02T18:00:00"}
        textColor={textColor}
        // bannerMobileClass=''
        // sectionClass=""
        titleClass="relative mb-5 text-[40px]"
        // relativeClass=""
        // imageClass=""
        // gridContainerClass=""
        saveTheDateClass={`${dancing.className} text-[45px]`}
        // fechaCountDownClass=""
        counterSectionClass="mt-7 mb-10"
        // counterClass = ''
        divGrid="max-w-4xl "
        divGridImage="w-1/3"
      />
      <Event
      extra={false}
        ceremonia
        lugarCeremonia="Iglesia San Cristobal"
        linkCeremonia="https://www.google.com.ar/maps/place/Capilla+San+Cristobal/@-26.8066524,-65.2964194,17z/data=!3m2!4b1!5s0x942242d1b9cf26eb:0x7d35d64ee884c359!4m6!3m5!1s0x942242d1b9586f13:0x7ba4d2ff3c5037ee!8m2!3d-26.8066572!4d-65.2938445!16s%2Fg%2F11byp62dky?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D"
        horarioCeremonia="18 hs"
        fiesta
        lugarFiesta="Las Marías"
        linkFiesta="https://www.google.com.ar/maps/place/Sal%C3%B3n+de+Fiestas+Las+Marias/@-26.8639321,-65.3470091,17z/data=!3m1!4b1!4m6!3m5!1s0x94224385fd17d321:0xa6df0da440dca6fe!8m2!3d-26.8639369!4d-65.3444342!16s%2Fg%2F11cm9lxlgc?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D"
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

      />
       <Confirmation
        linkConfirmacion="https://docs.google.com/forms/d/1_YOJ2NE_SieAiHAcNOK7Hq_DiiaWOiWa9lP793UBoYQ/viewform"
        buttonClassColors={`${buttonBgColor} ${buttonTextColor} ${buttonHoverColor}`}
        textColor={textColor}
        descripcion='Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a
        través del enlace.'
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
        // buttonClass=""
        sectionClass="w-[100%] justify-center items-center text-center my-1 lg:px-[25px] mb-20"
        // imageClass=""
        // titleClass=""
        // descriptionClass=""
        // modalBackgroundClass=""
        // modalContentClass=""
      />
   
    </main>
    <Footer footerClassName={`${buttonBgColor} h-[57px]`}/>
    </>
  );
}
