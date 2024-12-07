import Image from "next/image";
import { Lexend } from "next/font/google";
import aboutData from "@/data/about.json";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const AboutSection = () => {
  return (
    <section
      id="about"
      className="nb-card justify-center justify-self-center lg:justify-self-auto items-center nb-drop-shadow-lg flex flex-col md:flex-row md:gap-[3em] gap-[1em] mt-4 p-[1.5em] px-[2em] rounded-md md:absolute relative lg:max-w-[120em] lg:w-[70%] md:w-[90%] w-[92%] md:bottom-[-20em] bottom-[unset] lg:right-[3em] right-0 left-0 lg:left-[unset] top-[2em] mx-auto md:mx-[unset] md:top-[unset]"
    >
      <Image
        src={`/${aboutData.aboutImage}`}
        alt="about section greg photo"
        width={100}
        height={100}
        className="border-2 border-black rounded-xl md:h-[14em] md:w-[14em] h-[10em] w-[10em]"
      ></Image>
      <p className={`${lexend.className} lg:text-lg text-sm`}>
        {aboutData.aboutText}
      </p>
    </section>
  );
};

export default AboutSection;
