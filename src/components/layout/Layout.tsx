import React from "react";
import Navbar from "./navbar/NavbarIndex";
import Footer from "./footer/FooterIndex";
import Prefooter from "./prefooter/PrefooterIndex";
import { isMobile } from "react-device-detect";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  isMobile
  return (
    <div>
      <Navbar />
      <div className={`${isMobile ? 'p-0 m-0 w-full' : 'max-w-screen-lg mx-auto px-8'}`}>{children}</div>
      <Prefooter />
      <Footer />
    </div>
  );
}