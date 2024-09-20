import type { Metadata } from "next";
import { Roboto, Josefin_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100','300', '900'],
  variable: '--font-roboto'
})

const josefin = Josefin_Slab({
  subsets: ['latin'],
  weight: '100',
  variable: '--font-josefin_slab'
})

export const metadata: Metadata = {
  title: "Cguru",
  description: "Guy Asong Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${josefin.variable} antialiased bg-gradient-to-r from-cyan-500 to-blue-500 m-3 h-[100vh]`}>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
