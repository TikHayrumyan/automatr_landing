"use client";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "../app/components/aceternityui/background-gradient-animation";
import { TypewriterEffectSmooth } from "./components/aceternityui/typewriter-effect";
import { headingTypeWriterWord } from "./constants/data";
import LogosSlider from "./components/home/Logos_slider";
import { BentoDemo } from "./components/home/second_section";
import { VelocityScroll } from "./components/magicui/scroll-based-velocity";
import {Section_three} from "./components/home/section_three"

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
      {/* Logo Slider */}
      <LogosSlider />
      {/* section 2 */}
      <div className="container self-center bg-[#fefefe]">
        <h1 className="text-black font-bold sm:text-[4vw] text-[9vw] my-[2vw] uppercase">
          we <span className="text-main">value</span> your time
        </h1>
        <div className="sm:mb-[5vw] mb-[10vw]">
          <BentoDemo />
        </div>
      </div>
      {/* Scroll text */}
      <section className="my-[1vw]">
        <VelocityScroll
          text="Velocity Scroll"
          default_velocity={3}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </section>
      {/* section 3 */}
      <section className="sm:h-[40vw] h-[100vw]">
        <Section_three/>
      </section>
    </main>
  );
}
