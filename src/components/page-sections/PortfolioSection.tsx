import { Lexend_Tera } from "next/font/google";
import PortfolioCard from "@/components/PortfolioCard";
import portfolioData from "@/data/portfolio.json";
import PortfolioPopup from "@/components/PortfolioPopup";
import { useState } from "react";
import { PortfolioProjectData } from "@/types/global";

const lexendTera = Lexend_Tera({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const PortfolioSection = () => {
  const [portfolioPopupOpen, setPortfolioPopupOpen] = useState(false);
  const [currentProjectSelected, setCurrentProjectSelected] =
    useState<null | PortfolioProjectData>(null);

  return (
    <>
      {portfolioPopupOpen && (
        <PortfolioPopup
          data={currentProjectSelected}
          onClose={() => {
            setPortfolioPopupOpen(false);
            setCurrentProjectSelected(null);
            console.log("test");
          }}
        ></PortfolioPopup>
      )}
      <section className="relative z-[0] w-full justify-center flex pb-[-10em] h-fit bg-[#9499DC]">
        <div className="absolute nb-border !border-r-0 bg-[#FFF3DF] !border-l-0 h-[87%] top-0 left-0 right-0 w-full"></div>
        <div
          id="portfolio"
          className="!bg-[#FFE1AE] nb-card relative nb-shadow-lg rounded-t-[15em] rounded-b-[3.5em] mt-[19em] p-[3.5rem] pt-[9.5em] pb-[5em] w-[85%] h-fit max-w-[1200px]"
        >
          <h2
            className={`border-2 border-black nb-drop-shadow absolute top-[-1em] left-[3em] !bg-[#FFC45D] grow-0 p-[1.12em] -rotate-6 text-2xl px-[2em] min-w-[10em] w-[11em] ${lexendTera.className} rounded-3xl font-semibold tracking-[-0.1em]`}
          >
            Portfolio
          </h2>
          <div className="flex-wrap justify-center items-center gap-y-[2rem] gap-x-[2.5em] flex">
            {portfolioData.map((project, index) => (
              <PortfolioCard
                key={index}
                index={index}
                bgImage={`/${project.thumbnail}`}
                title={project.title}
                skills={project.skills}
                color={project.color}
                onClick={() => {
                  setPortfolioPopupOpen(true);
                  setCurrentProjectSelected(project);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
