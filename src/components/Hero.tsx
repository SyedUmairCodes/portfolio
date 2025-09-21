import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // This animation logic remains the same
      tl.from(".hero-greeting", {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: "power3.out",
      })
        .from(
          ".hero-headline",
          {
            opacity: 0,
            y: 30,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-neutral-900 font-sans flex items-center justify-center p-8 sm:p-16 min-h-screen"
    >
      <div className="max-w-5xl">
        {/* REMOVED opacity-0 from here */}
        <p className="hero-greeting text-lg sm:text-xl text-neutral-100 mb-4">
          Hi, I'm Umair.
        </p>
        {/* REMOVED opacity-0 from here */}
        <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          I'm a full-stack developer
          <br /> and data engineer.
        </h1>
        {/* REMOVED opacity-0 from here */}
        <p className="hero-description text-lg sm:text-xl text-neutral-100 max-w-4xl">
          Fueled by a passion for making technology acessible, I help businesses
          build elegant, robust, and scalable software. I thrive on turning
          complex challenges into streamlined solutions with the best tools for
          the job
        </p>
      </div>
    </div>
  );
};

export default Hero;
