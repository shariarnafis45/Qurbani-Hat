import { Montserrat, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import 'animate.css';

import Footer from "@/components/shared/Footer";

import { ToastContainer } from "react-toastify";

import { PropagateLoader } from "react-spinners";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "QurbaniHat-Livestock Booking Platform",
  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <ToastContainer />
      </body>
    </html>
  );
}
