import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter ({
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
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
