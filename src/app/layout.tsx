import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-geist-mono",
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
        className={`${urbanist.className}`}
      >
        {children}
      </body>
    </html>
  );
}
