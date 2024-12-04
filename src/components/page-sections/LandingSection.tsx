"use client";

import { Lexend_Tera, Lexend } from "next/font/google";
import TechEmblem from "../TechEmblem";
import Image from "next/image";
import PhoneExperience from "../r3f-experience/PhoneExperience";
import AboutSection from "./AboutSection";
import { Suspense } from "react";
import Button from "@/components/Button";
import { FaFileDownload } from "react-icons/fa";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const LandingSection = () => {
  return (
    <section
      id="home"
      className="w-full h-[min(calc(100vh+7em),1200px)] flex justify-center"
    >
      <Button
        className={`bottom-[1.5em] rounded-xl font-medium px-1 text-[1.1em] right-[2.30em] top-auto left-auto fixed z-[20] bg-[#59E9FF] ${lexend.className}`}
      >
        <a
          href="/GregLawrence_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full w-full flex justify-center items-center gap-4"
        >
          Resume
          <FaFileDownload className="h-full w-auto" />
        </a>
      </Button>
      <Image
        className="z-10 absolute right-0 -top-[6em] w-[28em]"
        width="200"
        height="200"
        alt=""
        src="/Lines.png"
      />
      <div className="absolute left-0 home-bg-gradient w-full h-[min(calc(100vh+7em),1200px)] z-[-2] min-h-[500px]"></div>
      <div className="min-h-[500px] max-w-[1800px] -mt-3 h-[calc(100vh-4.5em)] max-h-[min(calc(100vh-4.5em),1024px)] w-full flex z-10 relative">
        <div className="w-1/2 basis-full flex">
          <div className="ml-[8em] -mt-4 flex flex-col gap-5 justify-center">
            <h1
              className={`${lexendTera.className} text-[2.75em] leading-[1.1em] tracking-[-0.15em] text-nowrap !drop-shadow-[4px_4px_0px_black] !font-black nb-style-text`}
            >
              Creative Full-Stack
              <br />
              Web Developer
            </h1>
            <h2
              className={`nb-card rounded-lg w-[90%] p-4 leading-[1.3em] tracking-[0.05em] font-light ${lexend.className}`}
            >
              👋 <span className="font-bold">Hey there!</span> My name is Greg
              Lawrence, and I am a full-stack web developer with over 4 years of
              experience, specializing in creative and 3D web development.
            </h2>
            <div className="mt-5 flex gap-4 w-[90%] flex-wrap">
              <h3
                className={`nb-card inline-block px-5 py-3 rounded-2xl font-semibold tracking-[0.02em] shrink-0 ${lexend.className}`}
              >
                Tech I use on the daily
              </h3>
              <TechEmblem>JavaScript</TechEmblem>
              <TechEmblem>TypeScript</TechEmblem>
              <TechEmblem>React</TechEmblem>
              <TechEmblem>Next.js</TechEmblem>
              <TechEmblem>React Three Fiber</TechEmblem>
              <TechEmblem>Three.js</TechEmblem>
              <TechEmblem>Coffee</TechEmblem>
            </div>
          </div>
        </div>
        <div id="root" className="basis-full w-1/2 flex flex-col items-center">
          <Suspense fallback={null}>
            <PhoneExperience></PhoneExperience>
          </Suspense>
        </div>
        <AboutSection></AboutSection>
      </div>
    </section>
  );
};

export default LandingSection;
