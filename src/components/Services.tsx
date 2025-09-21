import { useRef, type FC } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect, responsive user interfaces that bring designs to life. I build intuitive and engaging digital experiences that are seamless on any device.",
  },
  {
    title: "Backend Development",
    description:
      "Engineering the robust, scalable server-side logic that powers your application. I specialize in building secure APIs, managing databases, and ensuring peak performance.",
  },
  {
    title: "Cloud Computing",
    description:
      "Architecting and deploying resilient, scalable applications on leading cloud platforms. From infrastructure setup to continuous integration, I ensure your services are reliable and efficient.",
  },
  {
    title: "Data Engineering",
    description:
      "Building and managing the data pipelines that turn raw information into actionable insights. I structure and process data to support analytics, machine learning, and business intelligence.",
  },
];

const Services: FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Select all elements to be animated
      const animatedElements = [
        ".section-title",
        ".section-link",
        ".service-item",
      ];

      // Pattern: Set the initial state (invisible and shifted)
      gsap.set(animatedElements, {
        opacity: 0,
        y: 40,
      });

      // Pattern: Animate to the final state on scroll trigger
      gsap.to(animatedElements, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="services"
      ref={container}
      className="bg-neutral-900 py-20 sm:py-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <h2 className="section-title text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Areas of expertise
          </h2>
          <a
            href="#contact"
            className="section-link flex-shrink-0 text-sm font-semibold text-neutral-100 tracking-wider uppercase border-b-2 border-white pb-1 hover:text-white transition-colors"
          >
            get in touch
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="service-item">
              <h3 className="mt-6 text-xl font-bold text-white">
                {service.title}
              </h3>
              <div className="w-12 h-0.5 bg-gray-300 mt-4 mb-4" />
              <p className="text-base text-neutral-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
