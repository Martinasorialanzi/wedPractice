
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";



export const metadata = {
  title: "Invitation Project",
  description: "Weddings Invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
