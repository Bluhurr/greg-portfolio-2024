import { ReactNode } from "react";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface PortfolioSkillProps {
  skill?: string;
  icon?: ReactNode;
}

const PortfolioSkill = ({ skill, icon }: PortfolioSkillProps) => {
  return (
    <div className="">
      {icon}
      <span
        className={`${lexend.className} text-xs font-semibold bg-[rgba(0,0,0,0.3)] px-2 py-1 rounded-full nb-border-thin nb-shadow`}
      >
        {skill}
      </span>
    </div>
  );
};

export default PortfolioSkill;
