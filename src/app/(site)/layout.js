import Footer from "../(site)/footer/page";
import Navbar from "../(site)/navbar/page";
import "../globals.css";

export const metadata = {
  title: "My Portfolio - Preethi",
  description: "next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <Navbar />
        {children}
        <Footer />
       
      </body>
    </html>
  );
}
