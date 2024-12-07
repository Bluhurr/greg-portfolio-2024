"use client";

import { FaHamburger } from "react-icons/fa";
import Navlink from "./Navlink";
import { useIsMobile } from "@/util/isMobile";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

interface NavbarProps {
  navHeight: number;
}

const Navbar = ({ navHeight }: NavbarProps) => {
  const scrollToSection = (
    targetSection: string,
    block: "start" | "end" | "nearest" | "center"
  ) => {
    const target = document.getElementById(targetSection);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: block });
    }
  };

  const isMobile = useIsMobile();

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div
        style={{ height: `${navHeight}em` }}
        className={`fixed w-full top-0 z-10`}
      >
        <ul className="w-full flex gap-5 z-20 items-center h-full lg:p-4 p-1 border-b-2 border-black">
          <Navlink
            variant="home-logo"
            onClick={() => {
              scrollToSection("home", "start");
            }}
            className="ml-4 mr-auto z-20"
          >
            Greg <span className="text-[#55E3FF]">Lawrence</span>
          </Navlink>

          {isMobile === true ? (
            <>
              {isNavOpen ? (
                <IoClose
                  className="h-8 w-8 mr-4"
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                />
              ) : (
                <FaHamburger
                  className="h-8 w-8 mr-4"
                  onClick={() => {
                    setIsNavOpen(true);
                  }}
                />
              )}
              <motion.div
                initial={{
                  opacity: 0,
                  display: "none",
                  y: -10,
                }}
                animate={{
                  opacity: isNavOpen ? 1 : 0,
                  display: isNavOpen ? "block" : "none",
                  y: isNavOpen ? 0 : -30,
                }}
                exit={{
                  opacity: 0,
                  display: "none",
                  y: -30,
                }}
                className="top-[4.5rem] right-0 left-0 fixed w-full h-full z-[0] bg-white"
              >
                <ul className="flex flex-col gap-4 p-4 h-[calc(100%-4.5rem)]">
                  <Navlink
                    variant="mobile"
                    color="#81ed7b"
                    className="basis-full"
                    onClick={() => {
                      scrollToSection("about", "center");
                      setIsNavOpen(false);
                    }}
                  >
                    About
                  </Navlink>
                  <Navlink
                    variant="mobile"
                    color="#FFC45D"
                    className="basis-full"
                    onClick={() => {
                      scrollToSection("portfolio", "start");
                      setIsNavOpen(false);
                    }}
                  >
                    Portfolio
                  </Navlink>
                  <Navlink
                    variant="mobile"
                    color="#9499DC"
                    className="basis-full"
                    onClick={() => {
                      scrollToSection("work", "start");
                      setIsNavOpen(false);
                    }}
                  >
                    Work
                  </Navlink>
                  <Navlink
                    variant="mobile"
                    className="basis-full"
                    onClick={() => {
                      scrollToSection("contact", "center");
                      setIsNavOpen(false);
                    }}
                  >
                    Contact
                  </Navlink>
                </ul>
              </motion.div>
            </>
          ) : (
            <>
              <Navlink
                variant="default"
                color="#81ed7b"
                className="ml-auto"
                onClick={() => {
                  scrollToSection("about", "center");
                }}
              >
                About
              </Navlink>
              <Navlink
                variant="default"
                color="#FFC45D"
                onClick={() => {
                  scrollToSection("portfolio", "start");
                }}
              >
                Portfolio
              </Navlink>
              <Navlink
                variant="default"
                color="#9499DC"
                onClick={() => {
                  scrollToSection("work", "start");
                }}
              >
                Work
              </Navlink>
              <Navlink
                variant="default"
                className="mr-3"
                onClick={() => {
                  scrollToSection("contact", "center");
                }}
              >
                Contact
              </Navlink>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
