import { useRef, type FC } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const testimonialData: Testimonial[] = [
  {
    name: "Muhammad Haroon",
    title: "CEO, Heptic.it",
    quote:
      "Umair is fast, reliable, and delivers solutions that scale. Working with him gave me full confidence in meeting deadlines without compromising quality.",
    imageUrl: "/client2.png",
  },
  {
    name: "Owais Iqbal",
    title: "DevOps Engineer",
    quote:
      "Umair made complex concepts simple and actionable. His mentorship gave me both technical skills and the confidence to grow.",
    imageUrl: "/client3.png",
  },
  {
    name: "Muhammad Usman",
    title: "React Native Engineer",
    quote:
      "Umair quickly understood our needs and delivered a scalable, elegant solution. The process was seamless and the results exceeded expectations.",
    imageUrl: "/client1.png", // IMPORTANT: Replace with actual image path
  },
];

const Testimonials: FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Create a timeline that triggers when the section comes into view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      // Animate the header elements first
      tl.from(".section-supertitle, .section-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      })
        // Animate the testimonial cards with a staggered effect
        .from(
          ".testimonial-card",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            stagger: 0.25,
          },
          "-=0.7"
        );
    },
    { scope: container }
  );

  return (
    <section
      id="testimonials"
      ref={container}
      className="bg-neutral-900 min-h-screen py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="section-supertitle text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.name}
              className="testimonial-card bg-neutral-800 p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.imageUrl}
                  alt={`Headshot of ${testimonial.name}`}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-neutral-100">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-neutral-100 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
