"use client";

import Navlink from "./Navlink";

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

  return (
    <>
      <div
        style={{ height: `${navHeight}em` }}
        className={`fixed w-full top-0`}
      >
        <ul className="w-full flex gap-5 items-center h-full p-4 border-b-2 border-black">
          <Navlink
            href="/"
            variant="home-logo"
            onClick={() => {
              scrollToSection("home", "start");
            }}
            className="ml-4 mr-auto"
          >
            Greg <span className="text-[#55E3FF]">Lawrence</span>
          </Navlink>
          <Navlink
            href="/#about"
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
            href="/#portfolio"
            variant="default"
            color="#FFC45D"
            onClick={() => {
              scrollToSection("portfolio", "start");
            }}
          >
            Portfolio
          </Navlink>
          <Navlink
            href="/#work"
            variant="default"
            color="#9499DC"
            onClick={() => {
              scrollToSection("work", "start");
            }}
          >
            Work
          </Navlink>
          <Navlink
            href="/#contact"
            variant="default"
            className="mr-3"
            onClick={() => {
              scrollToSection("contact", "center");
            }}
          >
            Contact
          </Navlink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
