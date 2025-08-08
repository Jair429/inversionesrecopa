import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins ({
  weight: '400',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Inversiones Recopa",
  description: "Empresa dedicada al desarrollo de proyectos de viviendas eco-sostenibles y comercialización de terrenos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
