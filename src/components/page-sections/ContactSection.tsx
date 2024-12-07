import { motion } from "framer-motion";
import { Lexend_Tera, Lexend_Giga } from "next/font/google";
import { useIsMobile } from "@/util/isMobile";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lexendGiga = Lexend_Giga({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ContactSection = () => {
  const isMobile = useIsMobile();

  return (
    <div
      id="contact"
      className="bg-[#006FA6] flex flex-col md:flex-row justify-center w-full relative p-[1em] md:py-[4em] md:px-[2em] border-t-[2px] border-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isMobile ? 1 : 1, scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          bounce: 0.4,
          duration: 0.9,
        }}
        viewport={{ once: true, margin: "-150px" }}
        className="bg-[#5AC8FF] nb-border nb-shadow-lg max-w-[1200px] w-full rounded-xl flex flex-col md:flex-row justify-center items-center gap-[2em] md:gap-0 p-[2em] pb-[3em] md:p-[4em] md:pb-[5em] md:pl-[5em]"
      >
        <h2
          className={`${lexendTera.className} drop-shadow-[0.1em_0.1em_0px_black] text-outline text-4xl md:ml-0 md:mr-auto basis-[40%] text-white font-semibold tracking-[-0.1em] rotate-[-4.92deg]`}
        >
          Get in
          <br />
          touch!
        </h2>
        <div className="flex gap-4 flex-col md:justify-center items-start lg:items-end mb-[-1em]">
          <a
            className={`${lexendGiga.className} hover:drop-shadow-[0.1em_0.1em_0px_black] hover:text-[#00AAFF] text-xs md:text-lg font-black text-white text-outline`}
            href="mailto:greglawrencewebsites@gmail.com"
            target="_blank"
          >
            greglawrencewebsites@gmail.com
          </a>
          <a
            className={`${lexendGiga.className} hover:drop-shadow-[0.1em_0.1em_0px_black] font-black text-xs md:text-lg text-white hover:text-[#00AAFF] text-outline`}
            href="https://www.linkedin.com/in/greg-lawrence-webdev/"
            target="_blank"
          >
            linkedin.com/in/greg-lawrence-webdev
          </a>
          <a
            className={`${lexendGiga.className} hover:drop-shadow-[0.1em_0.1em_0px_black] font-black text-white text-xs md:text-lg hover:text-[#00AAFF] text-outline`}
            href="https://github.com/Bluhurr"
            target="_blank"
          >
            github.com/Bluhurr
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
