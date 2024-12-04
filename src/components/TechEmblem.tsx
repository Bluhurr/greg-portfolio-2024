import { Lexend } from "next/font/google";
import { ReactNode } from "react";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

interface TechEmblemProps {
  techName?:
    | "javascript"
    | "typescript"
    | "react"
    | "nextjs"
    | "r3f"
    | "threejs"
    | "wordpress"
    | "php"
    | "tailwindcss"
    | "nginx"
    | "postgresql"
    | "vps"
    | "restapi"
    | "html"
    | "css"
    | "8thwall"
    | "aframe"
    | "django"
    | "python"
    | "googlecloud";
  icon?: ReactNode;
  children?: ReactNode;
}

const TechEmblem = ({ children }: TechEmblemProps) => {
  return (
    <div
      className={`nb-card self-center py-[0.5em] px-4 rounded-full !bg-[#FFC45D] text-xs font-semibold ${lexend.className}`}
    >
      {children}
    </div>
  );
};

export default TechEmblem;
