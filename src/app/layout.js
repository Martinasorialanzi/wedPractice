import { Inika } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inika = Inika({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Invitation Project",
  description: "Weddings Invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inika.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
