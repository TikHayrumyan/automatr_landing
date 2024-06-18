"use client";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "../app/components/aceternityui/background-gradient-animation";
import { TypewriterEffectSmooth } from "./components/aceternityui/typewriter-effect";
import { headingTypeWriterWord } from "./constants/data";
import LogosSlider from "./components/home/LogosSlider";


export default function Home() {
  return (
    <main className="flex flex-col">
      <BackgroundGradientAnimation>
        <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <span className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            <TypewriterEffectSmooth
              words={headingTypeWriterWord}
              className="sm:flex hidden"
            />
            <div className="sm:hidden flex flex-col w-full h-auto text-[10vw] leading-[15vw] text-black">
              Automate web scraping with{" "}
              <span className="text-main ">Automatr.</span>
            </div>
          </span>
        </div>
      </BackgroundGradientAnimation>
     <LogosSlider/>
      <div className="bg-[#fafafa] h-[100vh]"></div>
    </main>
  );
}
