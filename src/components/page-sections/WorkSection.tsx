import { Lexend_Tera } from "next/font/google";
import workData from "@/data/work.json";
import WorkCard from "@/components/WorkCard";
import { motion } from "framer-motion";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const WorkSection = () => {
  return (
    <div
      className="bg-[#9499DC] w-full flex justify-center p-[2em] relative z-[-1]"
      id="work"
    >
      <div className="max-w-[1300px] bg-[#9499DC] w-full z-1 pt-[15em] relative flex justify-center">
        <motion.div
          initial={{
            x: -150,
            y: 30,
            rotate: "-7.53deg",
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{
            delay: 0.0,
            type: "spring",
            bounce: 0.4,
            duration: 1.0,
          }}
          className="bg-[#4D59FF] p-[2.5em] px-[3em] z-[0] pl-[10em] nb-border top-[9em] left-[-10em] -rotate-[7.53deg] nb-shadow-lg rounded-[2em] absolute"
        >
          <motion.h2
            className={`text-outline text-white ${lexendTera.className} font-bold tracking-[-0.1em] text-3xl`}
          >
            Work History
          </motion.h2>
        </motion.div>
        <div className="flex flex-col gap-[6em] w-full items-center pb-[10.5em]">
          {workData.map((work, index) => (
            <WorkCard
              company={work.company}
              mainDescription={work.mainDescription}
              jobTitle={work.jobTitle}
              key={index}
              skills={work.skills}
              subDetails={work.subDetails}
              start={work.start}
              end={work.end}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;