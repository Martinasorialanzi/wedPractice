import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";
import backgroundImage from "../../../public/noemiJorge/background.png"
import Footer from "@/components/footer/Footer";

export default function NoemiJorge() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  "
    style={{
      backgroundImage: `url('/noemiJorge/background.png')`
    }}
    >
        <Banner
        grid={false}
        imageResponsive={false}
        nombres={
          <>
            <span>Noemí</span>
            <br />
            <span>&</span>
            <br />
            <span>Jorge</span>
          </>
        }
        fechaCountDown="11 de Noviembre"
        fechaCounter={"2024-11-11T19:00:00"}
        sectionClass="" 
        titleClass="text-[#587399] text-[86px] text-center"
        // relativeClass=""
        // imageClass=""
        // gridContainerClass=""
        saveTheDateClass="text-[50px] font-belle text-[#587399]"
        fechaCountDownClass="  text-[#587399] text-center"
        counterSectionClass=" text-[#587399] text-center"
      />
      <Event
        ceremonia={false}
        fiesta
        lugarFiesta="Finca Helvecia"
        linkFiesta="https://www.google.com/maps/place/Finca+Helvecia/@-27.229575,-65.3562433,15z/data=!4m6!3m5!1s0x9423b1c826e9a8ed:0x592654f7011510e5!8m2!3d-27.229575!4d-65.3562433!16s%2Fg%2F11sgdmmyl6?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
        horarioFiesta="19hs"
        // sectionClass=""
        titleClass="text-[#587399] text-center "
        textClass="text-[#587399] text-center text-[30px]"
        buttonClass="bg-[#58739980]"
        // imageClass=""
        // ceremoniaSectionClass=""
        fiestaSectionClass="text-[#587399] text-center" 
        // lugarClass=""
        // horarioClass="" 
        // buttonCeremoniaClass="" 
        // buttonFiestaClass="" 
      />
       <Confirmation
        linkConfirmacion="https://docs.google.com/forms/d/e/1FAIpQLSf1aptWb7hcd3I90TI1fmum1xJnhkBgEmdkGx43RZmP8IRG9w/viewform?usp=sf_link"
        // sectionClass=""
        // imageClass=""
        titleClass="lg:text-[30px] font-normal text-[20px] text-[#587399]"
        descriptionClass="lg:text-[20px] font-normal m-4 text-[14px] text-[#587399]"
        buttonClass="bg-[#58739980]"
      />
       <Regalos
        alias="Mi Alias"
        img1="https://i.ibb.co/pb4kXxr/adversal.webp"
        img2="https://i.ibb.co/9pHQws1/Vector.webp"
        regaloLista={false}
        regaloAlias={true}
        // sectionClass=""
        // imageClass=""
         titleClass="lg:text-[30px] font-normal text-[20px] text-[#587399]"
        descriptionClass="lg:text-[20px] font-normal m-4 text-[14px] text-[#587399]"
        buttonClass="bg-[#58739980]"
        // modalBackgroundClass=""
        // modalContentClass=""
      />
      <Mas
        // dresscode="Elegante"
        // spotify="https://open.spotify.com/playlist/37i9dQZEVXbMMy2roB9myp?si=_sxc0d_kTNWW32BpyQadcg&pi=u-TONuDD0FSg-u"
        fotos="https://drive.google.com/drive/folders/1NNdkgI-3xKHxj6R2vnVzJo7nKox-GSr5?usp=drive_link"
        // sectionClass=""
        imageClass=""
        titleClass="lg:text-[30px] font-normal text-[20px] text-[#587399]"
        descriptionClass="lg:text-[20px] font-normal m-4 text-[14px] text-[#587399]"
        buttonClass="bg-[#58739980]"
        // modalBackgroundClass=""
        // modalContentClass=""
      />
       <Footer 
       footerClassName="bg-[#58739940]"
       />
    </main>
  );
}
