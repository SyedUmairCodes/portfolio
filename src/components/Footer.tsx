import { useRef, type FC } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// ScrollTrigger is assumed to be globally registered.

const socialLinks = [
  { name: "Threads", href: "https://threads.com/syedumaircodes" },
  { name: "GitHub", href: "https://github.com/syedumaircodes" },
  { name: "LinkedIn", href: "https://linkedin.com/in/syedumaircodes" },
];

const Footer: FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // A timeline for a controlled, sequential animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", // Start animation when the top of the footer is 85% down the viewport
        },
      });

      tl.from(".cta-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".cta-button",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.7"
        )
        .from(
          ".footer-link-col",
          {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          ".sub-footer",
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  return (
    <footer
      id="contact"
      ref={container}
      className="bg-neutral-900 text-white pt-20 sm:pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 pb-16">
          {/* Left Side: Call to Action */}
          <div className="max-w-md items-center">
            <h2 className="cta-heading text-4xl sm:text-5xl font-semibold leading-tight">
              Have an idea?
              <br />
              Let's talk about it
            </h2>
            <a
              href="mailto:syedumairali.617@gmail.com"
              className="cta-button inline-block mt-8 bg-white text-black font-bold tracking-widest uppercase py-4 px-8 rounded-lg text-sm hover:bg-black hover:text-white transition-colors"
            >
              Let's Collaborate
            </a>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="sub-footer border-t border-neutral-700 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            Copyright © {new Date().getFullYear()} Syed Umair Ali
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href} // IMPORTANT: Add your social media links
                className="text-neutral-500 hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
