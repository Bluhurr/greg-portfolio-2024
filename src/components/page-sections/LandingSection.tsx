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
      className="w-full md:h-[min(calc(100vh+7em),1200px)] h-full flex justify-center relative"
    >
      <Button
        className={`bottom-[1.5em] rounded-xl font-medium px-1 text-sm md:text-[1.1em] right-4 md:right-[2.30em] top-auto left-auto fixed z-[20] bg-[#59E9FF]`}
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
      <div className="absolute left-0 h-[100%] home-bg-gradient w-full md:h-[min(calc(100vh+7em),1200px)] z-[-2] min-h-[500px]"></div>
      <div className="min-h-[500px] max-w-[1800px] md:-mt-3 mt-2 md:h-[calc(100vh-4.5em)] md:max-h-[min(calc(100vh-4.5em),1024px)] w-full flex z-10 relative md:flex-row flex-col">
        <div className="lg:w-[48%] md:w-[30%] basis-full flex">
          <div className="lg:ml-[8em] md:ml-[4em] md:-mt-4 flex flex-col gap-5 justify-start md:justify-center md:items-start items-center">
            <h1
              className={`${lexendTera.className} text-center md:text-start lg:text-[2.75em] md:text-[2.15em] text-[1.75em] md:block mb-[65vh] md:mb-[unset] leading-[1.1em] tracking-[-0.15em] md:text-nowrap !drop-shadow-[4px_4px_0px_black] !font-black nb-style-text`}
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
            <div className="mt-0 md:mt-5 flex gap-4 w-[90%] flex-wrap">
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
        <div
          id="root"
          className="basis-full flex flex-col items-center absolute md:relative top-[0.5em] h-[83vh] w-[100%] md:h-[unset] md:top-[unset] md:h-unset md:w-[50%]"
        >
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
