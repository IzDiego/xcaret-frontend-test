import React from "react";
import Navbar from "./navbar/NavbarIndex";
import Footer from "./footer/FooterIndex";
import Prefooter from "./prefooter/PrefooterIndex";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-8">{children}</div>
      <Prefooter />
      <Footer />
    </div>
  );
}