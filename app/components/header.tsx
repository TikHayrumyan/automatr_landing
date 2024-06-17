import Image from "next/image";
import logo_text from "../../public/Logos/Logo_Text_svg.svg";
import { Button } from "@/components/ui/button";
import { NavBar } from "./navbar";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full sm:h-[5vw] h-[20vw] content-center  backdrop-blur-md backdrop-brightness-150 sticky top-0">
      <div className="container flex justify-between">
        <Image
          alt="logo"
          src={logo_text}
          width={700}
          height={700}
          className="sm:w-[10vw] w-[25vw] h-auto"
        />
        <div className="sm:flex hidden">
          <NavBar />
        </div>
        <Button variant="default" className="bg-main rounded-full sm:flex hidden">
          Book a demo
        </Button>
        <MenuIcon className="sm:hidden"/>
      </div>
    </div>
  );
}
