"use client";

import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { PortfolioProjectData } from "@/types/global";
import { Lexend, Lexend_Tera } from "next/font/google";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Carousel } from "@material-tailwind/react";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface PortfolioPopupProps {
  data: PortfolioProjectData | null;
  onClose: () => void;
}

const PortfolioPopup = ({ data, onClose }: PortfolioPopupProps) => {
  const arrowControls = useAnimation();

  return (
    <div className="mt-[4.5em] w-full h-full flex justify-center items-center pt-[4.5em]">
      <AnimatePresence key="test">
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          transition={{
            bounce: 0.45,
            type: "spring",
            duration: 0.65,
          }}
          className="fixed w-[95%] ml-[0.5em] max-w-[1500px] overflow-hidden max-h-[80%] nb-border nb-shadow-lg rounded-2xl h-[40em] mt-auto mb-auto top-[4.5em] bottom-0 z-[10000] bg-white"
        >
          <button
            className="absolute top-[1.05em] right-[1.05em] z-10 w-10 h-10"
            onClick={() => onClose()}
          >
            <IoCloseCircleOutline className="w-full h-full hover:scale-[1.15] transition-all duration-[0.1s]" />
          </button>

          <div className="w-full h-full flex gap-4 p-8 flex-wrap overflow-auto">
            <div className="flex flex-col min-w-[30em] basis-[55%] gap-5 relative">
              <Carousel
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                placeholder=""
                loop
                nextArrow={({ handleNext }) => (
                  <IoIosArrowDropright
                    className="w-[6%] h-auto cursor-pointer aspect-square absolute mt-auto mb-auto top-0 bottom-0 right-2 z-10 bg-white rounded-full"
                    onClick={handleNext}
                  />
                )}
                prevArrow={({ handlePrev }) => (
                  <IoIosArrowDropleft
                    className="h-auto w-[6%] aspect-square cursor-pointer absolute z-10 bg-white rounded-full left-2 my-auto top-0 bottom-0"
                    onClick={handlePrev}
                  />
                )}
                color="grey"
                className="rounded-xl nb-border nb-shadow-lg aspect-video w-full h-auto"
                id="carousel"
              >
                {data?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="image 1"
                    className="h-full w-full  object-cover"
                  />
                ))}
              </Carousel>

              <div className="flex gap-3 flex-wrap gap-y-5">
                {data?.skills?.map((skill, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: data.color }}
                    className={`p-1 text-[1em] text-white font-bold rounded-full px-4 nb-border nb-shadow ${lexend.className}`}
                  >
                    <span className="text-outline">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col relative min-w-[10em] basis-[35%] grow">
              <div className="flex flex-col p-5 pr-[3em] shrink-0">
                <h2
                  className={`pl-4 mb-4 text-2xl font-black ${lexendTera.className} tracking-[-0.1em]`}
                >
                  {data?.title}
                </h2>
                <p
                  className={`w-full ${lexend.className} text-lg pl-4 tracking-2`}
                >
                  {data?.description}
                </p>
              </div>
              {data?.link && data.link !== "" && (
                <div className="flex h-[6em] mt-auto mb-0">
                  <motion.a
                    onHoverStart={() => {
                      arrowControls.start({ x: 3 });
                    }}
                    onHoverEnd={() => {
                      arrowControls.start({ x: 0 });
                    }}
                    href={data?.link}
                    target="_blank"
                    className={`${lexend.className} leading-[1.2em] hover:scale-[1.025] hover:cursor-pointer hover:shadow-[0em_0em_0px_black] transition-all duration-[200ms] text-xl text-outline p-4 px-[1.25em] pr-[0.8em] mr-0 ml-auto flex justify-center items-center gap-[3em] text-white font-black nb-border nb-shadow rounded-md brightness-125`}
                    style={{ backgroundColor: data?.color }}
                  >
                    Check
                    <br />
                    it out!
                    <motion.div
                      animate={arrowControls}
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.2,
                        stiffness: 500,
                      }}
                      initial={{ x: 0 }}
                      className="w-[4em]"
                    >
                      <img
                        className="w-full h-auto"
                        src="/arrow.png"
                        alt="check out portfolio project arrow"
                      />
                    </motion.div>
                  </motion.a>
                </div>
              )}
              <div className="h-[2em] w-full flex shrink-0"></div>
            </div>
          </div>
        </motion.div>
        <div
          className="z-[60] fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.65)] w-full h-full"
          onClick={onClose}
        ></div>
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPopup;
