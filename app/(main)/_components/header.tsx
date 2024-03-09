import Logo from "@/components/ui/logo";
import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="lg:relative flex bg-[#FFFFFF] w-full justify-between md:py-5 px-8">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
