import "./globals.css";

import { Nunito } from "next/font/google";
import type { Metadata } from "next";

import NavBar from "./Components/NavBar/NavBar";

import RegisterModal from "./Components/Modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata: Metadata = {
  title: "Airbnb_clone",
  description: "Airbnb_clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
