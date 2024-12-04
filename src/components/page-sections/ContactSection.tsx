import { motion } from "framer-motion";
import { Lexend_Tera, Lexend, Lexend_Giga } from "next/font/google";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lexendGiga = Lexend_Giga({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="bg-[#006FA6] flex justify-center w-full relative py-[4em] px-[2em] border-t-[2px] border-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          bounce: 0.4,
          duration: 0.9,
        }}
        viewport={{ once: true, margin: "-150px" }}
        className="bg-[#5AC8FF] nb-border nb-shadow-lg max-w-[1200px] w-full rounded-xl flex justify-center items-center p-[4em] pb-[5em] pl-[5em]"
      >
        <h2
          className={`${lexendTera.className} drop-shadow-[0.1em_0.1em_0px_black] text-outline text-4xl ml-0 mr-auto basis-[20%] text-white font-semibold tracking-[-0.1em] rotate-[-4.92deg]`}
        >
          Get in
          <br />
          touch!
        </h2>
        <div className="flex gap-4 flex-col justify-center items-end mb-[-1em]">
          <a
            className={`${lexendGiga.className} hover:drop-shadow-[0.1em_0.1em_0px_black] hover:text-[#00AAFF] font-black text-white text-outline`}
            href="mailto:greglawrencewebsites@gmail.com"
            target="_blank"
          >
            greglawrencewebsites@gmail.com
          </a>
          <a
            className={`${lexendGiga.className} hover:drop-shadow-[0.1em_0.1em_0px_black] font-black text-white hover:text-[#00AAFF] text-outline`}
            href="https://www.linkedin.com/in/greg-lawrence-webdev/"
            target="_blank"
          >
            linkedin.com/in/greg-lawrence-webdev
          </a>
          <a
            className={`${lexendGiga.className} hover:drop-shadow-[0.1em_0.1em_0px_black] font-black text-white hover:text-[#00AAFF] text-outline`}
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
