import Logo from "@/components/ui/logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="lg:relative flex bg-[#FFFFFF] w-full justify-between p-4 md:py-5 md:px-8 lg:px-[100px]">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
