"use client";
import Link from "next/link";
import { LiHTMLAttributes, useState } from "react";
import { Lexend_Tera } from "next/font/google";
import { motion } from "framer-motion";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface NavlinkProps extends LiHTMLAttributes<HTMLLIElement> {
  variant: "default" | "home-logo";
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

const Navlink = ({
  children,
  color = "#55E3FE",
  variant = "default",
  onClick,
  ...rest
}: NavlinkProps) => {
  const defaultStyles =
    "border-[1px] overflow-hidden border-black transition-all duration-[300ms] hover:!shadow-[0px_0px_0px_blak] py-2 px-4 rounded-[5em] relative min-w-[7em] text-black visited:text-black active:text-black focus:text-black flex justify-center shadow-[2px_2px_0px_black]";
  const homeLogoStyles =
    "text-2xl nb-style-text tracking-[-0.1em] !font-black " +
    lexendTera.className;

  const [hovering, setHovering] = useState(false);

  return (
    <li className="" {...rest}>
      <Link
        href={""}
        className={variant === "default" ? defaultStyles : homeLogoStyles}
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
        {variant === "default" && (
          <motion.div
            initial={{ x: "-130%" }}
            transition={{ duration: 0.7, bounce: 0.4, type: "spring" }}
            animate={{ x: hovering ? 0 : "-100%" }}
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
