import React from "react";

interface SkillItem {
  name: string;
  hoverClass: string;
}

const skills: SkillItem[] = [
  {
    name: "Web Development",
    hoverClass: "hover:bg-blue-100 hover:border-blue-200 hover:text-blue-500",
  },
  {
    name: "SQL Databases",
    hoverClass:
      "hover:bg-purple-100 hover:border-purple-200 hover:text-purple-500",
  },
  {
    name: "APIs",
    hoverClass:
      "hover:bg-green-100 hover:border-green-200 hover:text-green-500",
  },
  {
    name: "UI/UX",
    hoverClass:
      "hover:bg-yellow-100 hover:border-yellow-200 hover:text-yellow-500",
  },
  {
    name: "DevOps",
    hoverClass: "hover:bg-red-100 hover:border-red-200 hover:text-red-500",
  },
  {
    name: "Data Engineering",
    hoverClass:
      "hover:bg-orange-100 hover:border-orange-200 hover:text-orange-500",
  },
  {
    name: "Cloud Computing",
    hoverClass:
      "hover:bg-fuchsia-100 hover:border-fuchsia-200 hover:text-fuchsia-500",
  },
  {
    name: "Backend Architecture",
    hoverClass:
      "hover:bg-stone-100 hover:border-stone-200 hover:text-stone-500",
  },
  {
    name: "System Design",
    hoverClass:
      "hover:bg-violet-100 hover:border-violet-200 hover:text-violet-500",
  },
  {
    name: "Technical Writing",
    hoverClass: "hover:bg-teal-100 hover:border-teal-200 hover:text-teal-500",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="min-h-20 bg-neutral-950 px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="mb-12 text-5xl font-medium tracking-tight text-white sm:text-6xl md:mb-16">
          Expertise
        </h2>

        {/* Skills Flex Container */}
        <div className="flex items-center justify-center flex-wrap gap-x-4  gap-y-4 md:gap-x-6 md:gap-y-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`
                cursor-default
                rounded-full
                border border-white
                px-8 py-4
                text-lg text-white
                transition-all duration-300
                ${skill.hoverClass}
                hover:-translate-y-1
              `}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
