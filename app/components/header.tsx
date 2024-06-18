"use client";
import Image from "next/image";
import logo_text from "../../public/Logos/Logo_Text_svg.svg";
import { Button } from "@/components/ui/button";
import { NavBar } from "./navbar";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { NavBarData } from "../constants/data";
import Link from "next/link";

export default function Header() {
  const [OpenMenu, setOpenMenu] = useState<Boolean>(false);
  const onToggleMenu = () => {
    setOpenMenu(!OpenMenu);
  };

  return (
    <div className="w-full sm:h-[5vw] h-[20vw] content-center  backdrop-blur-md fixed top-0 z-50">
      <div className="container flex justify-between">
        <Image
          alt="logo"
          src={logo_text}
          width={700}
          height={700}
          className="sm:w-[10vw] w-[30vw] h-auto"
        />
        <div className="sm:flex hidden">
          <NavBar />
        </div>
        <Button
          variant="default"
          className="bg-main rounded-full sm:flex hidden"
        >
          Book a demo
        </Button>
        {!OpenMenu ? (
          <MenuIcon className="sm:hidden" onClick={onToggleMenu} />
        ) : (
          <XIcon className="sm:hidden" onClick={onToggleMenu} />
        )}
        {OpenMenu && <div className="fixed w-full h-[91vh] bg-white top-[20vw] z-[9999] left-0 right-0 bottom-0 ">
          <ul className="container grid gap-3 py-[5vw] text-[6vw] font-semibold text-black">
              {NavBarData.map((component) => (
                <Link
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.title}
                </Link>
              ))}
            </ul>
          </div>}
      </div>
    </div>
  );
}
