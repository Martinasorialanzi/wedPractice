import Confirmation from "@/components/confirmation/Confirmation";
import Event from "@/components/event/Event";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/home/Home";
import Mas from "@/components/mas/Mas";
import Regalos from "@/components/regalos/Regalos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-10 mx-10">
      <Banner/>
      <Event/>
      <Confirmation/>
      <Regalos/>
      <Mas/>
      {/* <Footer/> */}
     
    </main>
  );
}
