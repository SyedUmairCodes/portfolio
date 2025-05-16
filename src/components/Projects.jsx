import { Crown } from "lucide-react";
import { motion } from "motion/react";
const projectsData = [
  {
    id: 1,
    iconType: "Crown",
    title: "Crown notes",
    description:
      "A collection of respositories on GitHub containing my notes from my graduate studies, online courses and certification exam prep. I use it to keep track of my learning and share it with others.",
    href: "https://github.com/crown-notes",
  },
  {
    id: 2,
    iconType: "text",
    iconText: "UI",
    iconBgClass: "bg-blue-700",
    iconContentClass: "text-white font-bold text-sm",
    title: "UI experiments",
    description:
      "A collection of small UI experiments and components I built to learn and practice React, Tailwind CSS, and other web technologies.",
    href: "#",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.a
      href={project.href}
      className="block bg-onyx p-6 rounded-lg hover:bg-onyx/70 transition-colors duration-200 group"
      target={project.href !== "#" ? "_blank" : undefined}
      rel={project.href !== "#" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        {project.iconType === "Crown" && (
          <div className="p-2 rounded-md mr-4 bg-blue-500">
            <Crown className="w-5 h-5 text-platinum" />
          </div>
        )}
        {project.iconType === "text" && (
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-md mr-4 ${project.iconBgClass}`}
          >
            <span className={project.iconContentClass}>{project.iconText}</span>
          </div>
        )}
        <h3 className="text-xl font-semibold text-platinum transition-colors duration-200">
          {project.title}
        </h3>
      </div>
      <p className="text-ash text-base group-hover:text-platinum transition-colors duration-200">
        {project.description}
      </p>
    </motion.a>
  );
};

const SideProjects = () => {
  return (
    <section className="container mx-auto px-8 py-12 md:py-16">
      <h2 className="text-2xl font-medium text-platinum mb-8">Side projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SideProjects;
