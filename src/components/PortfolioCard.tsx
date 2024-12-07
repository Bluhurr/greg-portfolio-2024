import Image from "next/image";
import PortfolioSkill from "./PortfolioSkill";
import { Lexend_Tera } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface PortfolioCardProps {
  bgImage?: string;
  skills?: string[];
  title?: string;
  link?: URL | string;
  color?: string;
  index: number;
  onClose?: () => void;
  onClick?: () => void;
}

const PortfolioCard = ({
  index,
  bgImage,
  skills,
  title,
  onClick,
  color = "#00D4FF",
}: PortfolioCardProps) => {
  const [hovering, setHovering] = useState(false);
  const [titleHeight, setTitleHeight] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  // Get height of title and div for portfolio card so that we can animate it using those sizes
  const measureHeights = () => {
    if (titleRef.current && divRef.current) {
      setTitleHeight(titleRef.current.offsetHeight);
      setDivHeight(divRef.current.offsetHeight);
    }
  };

  useLayoutEffect(() => {
    measureHeights();
  }, []);

  // Get heights on mount and on resize/rescale
  useEffect(() => {
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index % 2 === 0 ? 0.0 : 0.2,
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
      }}
      className="w-full aspect-[6/3] lg:basis-[45%] basis-[100%]"
      viewport={{ once: true, margin: "-150px" }}
    >
      <motion.div
        animate={{
          boxShadow: hovering ? "0em 0em 0px black" : "0.45em 0.55em 0px black",
          x: hovering ? 2 : 0,
          y: hovering ? 2 : 0,
        }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.35 }}
        className="nb-border md:nb-shadow-xl shadow-[2px_2px_0px_black] aspect-[5/3] md:aspect-[6/3] relative rounded-2xl bg-white overflow-hidden relative"
      >
        <div
          className="w-full h-full z-10 block relative cursor-pointer flex flex-col"
          onMouseOver={() => {
            setHovering(true);
          }}
          onMouseOut={() => {
            setHovering(false);
          }}
          onClick={onClick}
        >
          <div
            className="absolute w-full bottom-0 h-[1em] z-0"
            style={{ backgroundColor: color }}
          ></div>
          <motion.div
            ref={divRef}
            animate={{
              y: hovering ? 0 : divHeight - titleHeight,
            }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.35 }}
            className={`text-white bottom-0 pl-3 pb-[5%] border-t-2 z-10 border-black grow-0 absolute right-0 left-0 top-auto h-fit`}
            style={{
              backgroundColor: color,
            }}
          >
            <h2
              ref={titleRef}
              className={`${lexendTera.className} py-3 font-black tracking-[-0.140em] text-outline text-[1rem] md:text-[1.5rem] pr-3 leading-[1.2em] flex items-center`}
            >
              {title}
            </h2>
            <div className="flex gap-2 flex-wrap w-[90%] leading-[1.75em]">
              {skills?.map((skill, i) => (
                <PortfolioSkill key={i} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
        <Image
          alt=""
          width="600"
          height="600"
          className="w-full h-full object-cover absolute object-top top-0 z-0 bottom-0 left-0 right-0"
          src={bgImage || ""}
        ></Image>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
