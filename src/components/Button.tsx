"use client";

import { ReactNode } from "react";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface ButtonProps {
  animation?: "none" | "color-swipe" | string;
  variant?: "default" | "solid" | string;
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`border-[1px] items-center gap-5 overflow-hidden border-black transition-all duration-[300ms] hover:!shadow-[0px_0px_0px_blak] py-2 px-4 rounded-[5em] visited:text-black active:text-black focus:text-black flex grow-0 justify-center shadow-[2px_2px_0px_black] ${className} ${lexend.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
