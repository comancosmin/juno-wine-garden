"use client";

import "./globals.css";
import Nav from "./components/Nav";
import NavMenu from "./components/NavMenu";
import { useState } from "react";
import localFont from "@next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

const juno = localFont({
  src: [
    {
      path: "../public/fonts/JaneAust.woff",
    },
  ],
  variable: "--font-juno",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${juno.variable} ${poppins.variable} font-sans`}>
        <Nav isOpen={isOpen} setOpen={setOpen}></Nav>
        <NavMenu isOpen={isOpen}></NavMenu>
        {children}
      </body>
    </html>
  );
}
