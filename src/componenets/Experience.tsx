import React from "react";
import HepticLogo from "../assets/heptic-logo.png";
interface ExperienceItem {
  id: number;
  company: string;
  themeColor: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  className?: string; // For the staggered grid layout
  logoSizeClass?: string; // To manually adjust width per logo if needed
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Heptic.it",
    themeColor: "bg-orange-500",
    logoSrc: HepticLogo,
    logoAlt: "Heptic Logo",
    description:
      "At Heptic, I build end-to-end full-stack solutions for companies of all shapes and sizes, delivering reliable, scalable, and production-ready systems.",
    logoSizeClass: "w-32",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="min-h-screen bg-neutral-900 px-6 py-20 md:px-16 lg:px-24">
      {/* Section Heading */}
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-5xl font-medium text-white tracking-tight sm:text-6xl">
          Experience
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 max-w-7xl mx-auto items-start">
        {experienceData.map((item) => (
          <article
            key={item.id}
            className={`flex flex-col overflow-hidden bg-neutral-800 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${
              item.className || ""
            }`}
          >
            {/* Colored Header / Logo Area */}
            <div
              className={`flex h-72 w-full items-center justify-center px-10 ${item.themeColor}`}
            >
              <img
                src={item.logoSrc}
                alt={item.logoAlt}
                className={`${item.logoSizeClass || "w-32"}`}
              />
            </div>

            {/* Text Content Area */}
            <div className="flex-1 p-8 md:p-10">
              <p className="text-lg leading-relaxed text-gray-100 md:text-xl">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
