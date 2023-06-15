"use client";

import "./globals.css";
import Nav from "./components/Nav";
import NavMenu from "./components/NavMenu";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <html lang="en">
      <body className="">
        <Nav isOpen={isOpen} setOpen={setOpen}></Nav>
        <NavMenu isOpen={isOpen}></NavMenu>
        {children}
      </body>
    </html>
  );
}
