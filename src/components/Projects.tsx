import { useRef, type FC } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  href?: string;
}

const projectData: Project[] = [
  {
    title: "Blockforge",
    category: "Web development",
    imageUrl: "/blockforge.png",
    href: "https://blockchainforge.netlify.app",
  },
  {
    title: "Heptic",
    category: "Web development",
    imageUrl: "/heptic.png",
    href: "https://heptic.it",
  },
];

const Projects: FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Create a timeline that triggers when the section comes into view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%", // Start animation when the top of the container is 60% down the viewport
        },
      });

      // Animate the section header first
      tl.from(".section-header", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      })
        // Then, animate the project cards in a staggered sequence
        .from(
          ".project-card",
          {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.2, // Each card animates 0.2s after the previous one
          },
          "-=0.7"
        ); // Overlap animations for a fluid feel
    },
    { scope: container }
  );

  return (
    <section
      id="projects"
      ref={container}
      className="bg-neutral-900 py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className=" section-header">
          <h2 className="text-4xl sm:text-5xl font-bold pb-6 text-white leading-tight">
            Selected Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projectData.map((project) => (
            <div key={project.title} className="project-card">
              <div className="p-8 sm:p-10 rounded-xl mb-6">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} project screenshot`}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="text-center">
                <a href={project.href}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                </a>
                <p className="text-lg text-neutral-100 mt-2">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
