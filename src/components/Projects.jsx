const projectIcons = {
  blockForge: "/images/eth.png",
};

const projectsData = [
  {
    id: 1,
    icon: projectIcons.blockForge,
    name: "Blockforge",
    description:
      " Engineered a dedicated online platform for a blockchain service provider, empowering Web3 companies and startups with seamless access to specialized solutions.",
    year: 2024,
    link: "https://blockchainforge.netlify.app",
  },
];

const ProjectCard = ({ project }) => {
  const mobileYearIndent = "pl-[72px]";
  return (
    <a
      href={project.link}
      className="group py-6
                 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-10
                 hover:bg-neutral-900 hover:rounded-lg transition-colors duration-200 block"
      aria-label={`View project ${project.name}`}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex items-start flex-grow">
          <div className="flex-shrink-0 mr-4 md:mr-6">
            <img
              src={project.icon}
              alt={`${project.name} icon`}
              className="w-14 h-14 rounded-xl object-cover"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-semibold text-white transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
        <p
          className={`md:hidden text-sm text-white/50 mt-1 ${mobileYearIndent}`}
        >
          {project.year}
        </p>
        <div className="hidden md:block md:ml-auto flex-shrink-0 text-white/50 text-base">
          {project.year}
        </div>
      </div>
    </a>
  );
};

// --- Projects Section Main Component ---
const Projects = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
          Projects
        </h2>
        <div className="">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
