import { Lexend_Tera, Lexend } from "next/font/google";
import { motion } from "framer-motion";

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
  return (
    <div className="flex gap-[2em] justify-center pl-[5em] z-0">
      <motion.div
        initial={{
          x: -150,
          opacity: 0,
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
        className="w-[80%] basis-full flex p-4 pl-[2em] pr-[1.75em] bg-white z-10 nb-shadow-xl nb-border rounded-2xl relative pb-[2em]"
      >
        <div className="flex flex-col basis-[35%]">
          <h2
            className={`${lexendTera.className} text-[1.5em] font-black tracking-[-0.15em]`}
          >
            {company}
          </h2>
          <p className={`${lexend.className} text-[1.1em] tracking-[0em]`}>
            {jobTitle}
          </p>
        </div>
        <div className="flex flex-col basis-[67%] gap-4 mr-0 ml-auto pt-2">
          <h3 className={`${lexend.className} font-bold text-md`}>
            {mainDescription}
          </h3>
          <p className={`${lexend.className} text-sm`}>{subDetails}</p>
        </div>
        <div className="absolute top-[93%] flex w-full gap-2 gap-y-2 ml-[-1.1em] flex-wrap pr-[1em]">
          {skills?.map((skill, index) => (
            <div
              className={`bg-[#5D64C3] p-1 text-[0.84em] text-[#E3E5FF] font-semibold rounded-full px-4 nb-border nb-shadow ${lexend.className}`}
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
            x: -20,
            opacity: 0,
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
          className="basis-[10%] flex flex-col gap-2 shrink-0"
        >
          <div
            className={`${lexendTera.className} font-black text-md flex justify-center items-center rounded-xl -ml-2 p-[0.4em] pb-[0.6em] text-outline text-white nb-drop-shadow`}
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
            className={`${lexendTera.className} text-outline font-black text-md text-white nb-drop-shadow`}
          >
            {start}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkCard;
