"use client";

import Link from "next/link";
import { LiHTMLAttributes, useState } from "react";
import { Lexend_Tera } from "next/font/google";
import { motion } from "framer-motion";

interface NavlinkProps extends LiHTMLAttributes<HTMLLIElement> {
  variant: "default" | "home-logo" | "mobile";
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const defaultStyles =
  "border-[1px] overflow-hidden border-black transition-all duration-[300ms] hover:!shadow-[0px_0px_0px_blak] py-2 px-4 rounded-[5em] relative min-w-[7em] text-black visited:text-black active:text-black focus:text-black flex justify-center shadow-[2px_2px_0px_black]";
const mobileStyles =
  "border-[2px] text-2xl text-outline font-extrabold overflow-hidden h-full flex justify-center items-center border-black transition-all duration-[300ms] hover:!shadow-[0px_0px_0px_blak] py-2 px-4 rounded-[2em] relative min-w-[7em] text-white visited:text-white active:text-black focus:text-black flex justify-center shadow-[4px_6px_0px_black]" +
  " " +
  lexendTera.className;
const homeLogoStyles =
  "text-2xl nb-style-text lg:tracking-[-0.1em] md:tracking-[-0.1em] !font-black lg:text-2xl md:text-lg text-lg leading-[1.2em] tracking-[-0.2em] lg:!leading-[0.01em] block" +
  " " +
  lexendTera.className;

const Navlink = ({
  children,
  color = "#55E3FE",
  variant = "default",
  onClick,
  ...rest
}: NavlinkProps) => {
  const [hovering, setHovering] = useState(false);

  return (
    <li className="" {...rest}>
      <Link
        href={""}
        className={
          variant === "default"
            ? defaultStyles
            : variant === "mobile"
              ? mobileStyles
              : homeLogoStyles
        }
        onClick={(e) => {
          e.preventDefault();
          if (onClick) {
            onClick();
          }
        }}
        onMouseOver={() => {
          setHovering(true);
        }}
        onMouseOut={() => {
          setHovering(false);
        }}
      >
        {variant !== "home-logo" && (
          <motion.div
            initial={{ x: "-130%" }}
            transition={{ duration: 0.7, bounce: 0.4, type: "spring" }}
            animate={{ x: hovering || variant === "mobile" ? 0 : "-100%" }}
            style={{ backgroundColor: color }}
            className=" z-[-1] absolute top-0 bottom-0 w-[130%] h-full"
          ></motion.div>
        )}{" "}
        {children}{" "}
      </Link>
    </li>
  );
};

export default Navlink;
