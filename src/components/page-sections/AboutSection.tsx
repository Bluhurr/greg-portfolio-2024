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
      className="nb-card justify-center items-center nb-drop-shadow-lg flex gap-[3em] mt-2 p-[1.5em] px-[2em] rounded-md absolute max-w-[100em] w-[60%] bottom-[-20em] right-[3em]"
    >
      <Image
        src={`/${aboutData.aboutImage}`}
        alt="about section greg photo"
        width={100}
        height={100}
        className="border-2 border-black rounded-xl h-[14em] w-[14em]"
      ></Image>
      <p className={`${lexend.className}`}>{aboutData.aboutText}</p>
    </section>
  );
};

export default AboutSection;
