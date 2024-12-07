import { Lexend_Tera, Lexend } from "next/font/google";
import { motion } from "framer-motion";
import { useIsMobile } from "@/util/isMobile";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface WorkCardProps {
  skills?: string[];
  company?: string;
  jobTitle?: string;
  mainDescription?: string;
  subDetails?: string;
  start?: string;
  end?: string | "present";
}

const WorkCard = ({
  skills,
  company,
  jobTitle,
  mainDescription,
  subDetails,
  start,
  end,
}: WorkCardProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex gap-[1.5em] justify-center pl-[0.75em] md:pl-[5em] z-0">
      <motion.div
        initial={{
          x: isMobile ? 0 : -150,
          opacity: isMobile ? 1 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{
          delay: 0.1,
          type: "spring",
          bounce: 0.4,
          duration: 0.5,
        }}
        className="w-[90%] md:w-[80%] basis-full flex flex-col md:flex-row p-4 pb-4 md:p-4 md:pl-[2em] md:pr-[1.75em] bg-white z-10 nb-shadow-xl nb-border rounded-2xl relative md:pb-[2em]"
      >
        <div className="flex flex-col basis-[35%]">
          <h2
            className={`${lexendTera.className} text-[1.22em] md:text-[1.5em] font-black tracking-[-0.15em]`}
          >
            {company}
          </h2>
          <p
            className={`${lexend.className} font-bold font-[unset] text-[1em] md:text-[1.1em] tracking-[0em]`}
          >
            {jobTitle}
          </p>
        </div>
        <div className="flex flex-col basis-[67%] gap-2 md:gap-4 mr-0 ml-auto pt-2">
          <h3
            className={`${lexend.className} font-regular md:leading-[unset] leading-[1.1em] text-md`}
          >
            {mainDescription}
          </h3>
          <p className={`${lexend.className} font-light text-sm`}>
            {subDetails}
          </p>
        </div>
        <div className="relative mt-[5%] md:mt-[2%] lg:mt-[0%] md:absolute md:top-[93%] grid grid-cols-2 md:flex w-full gap-2 gap-y-2 md:ml-[-1.1em] md:flex-wrap md:pr-[1em]">
          {skills?.map((skill, index) => (
            <div
              className={`bg-[#5D64C3] p-1 font-bold md:font-semibold text-[0.9em] md:text-[0.84em] text-[#E3E5FF] md:min-h-[unset] min-h-[4em] flex justify-center items-center md:text-start text-center rounded-xl md:rounded-full px-4 nb-border nb-shadow ${lexend.className}`}
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
      {start && end && (
        <motion.div
          initial={{
            x: isMobile ? 0 : -20,
            opacity: isMobile ? 1 : 0,
          }}
          animate={{
            opacity: isMobile ? 1 : 1,
            x: isMobile ? -7 : 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            delay: 0.1,
            type: "spring",
            bounce: 0.4,
            duration: 0.5,
          }}
          className="basis-[12%] flex flex-col gap-2 shrink-0"
        >
          <div
            className={`${lexendTera.className} font-black text-[0.65em] md:text-lg flex justify-center items-center rounded-xl -ml-2 p-[0.4em] pb-[0.6em] text-outline text-white nb-drop-shadow`}
            style={{
              backgroundColor: end === "present" ? "#936DEA" : "",
              border: end === "present" ? "2px solid black" : "",
              marginLeft: end === "present" ? "-0.65em" : "",
              marginTop: end === "present" ? "-0.6em" : "",
            }}
          >
            {end === "present" ? (
              <span className={end === "present" ? "nb-drop-shadow" : ""}>
                Present
              </span>
            ) : (
              <span>{end}</span>
            )}
          </div>
          <div
            className="nb-border w-4 h-full bg-white nb-shadow rounded-[0.2em]"
            style={{
              flexBasis: end === "present" ? "95%" : "100%",
              marginTop: end === "present" ? "5%" : "0%",
            }}
          ></div>
          <div
            className={`${lexendTera.className} text-outline font-black text-[0.65em] md:text-lg text-white nb-drop-shadow`}
          >
            {start}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkCard;
