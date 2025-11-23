import React from "react";
import BlockForge from "../assets/blockforge.webp";
interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  tags: string[];
  href: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "BlockForge",
    category: "Web Development",
    description:
      "Marketing site for Blockchain SaaS company providing Blockchain services to Web3 companies and stratups.",
    imageSrc: BlockForge,
    tags: ["Web Design", "Web Dev"],
    href: "https://blockchainforge.netlify.app",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen bg-neutral-900 px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-5xl font-medium tracking-tight text-white sm:text-6xl">
            Selected Work
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer flex flex-col gap-6"
            >
              {/* Image Card (Experience Style) */}
              <div className="relative aspect-4/3 overflow-hidden rounded-2 shadow-sm transition-all duration-500 group-hover:shadow-md">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                {/* Category & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wider text-gray-100">
                    {project.category}
                  </span>
                </div>

                <a
                  href={project.href}
                  className="text-3xl font-medium text-white group-hover:underline decoration-2 underline-offset-4"
                >
                  {project.title}
                </a>

                <p className="max-w-md text-lg leading-relaxed text-gray-100">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors group-hover:border-gray-400 group-hover:text-gray-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
