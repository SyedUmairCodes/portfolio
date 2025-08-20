const socialLinks = [
  { id: 1, name: "Threads", url: "https://threads.com/syedumaircodes" },
  { id: 2, name: "GitHub", url: "https://github.com/syedumaircodes" },
  { id: 3, name: "LinkedIn", url: "https://linkedin.com/in/syedumaircodes" },
  { id: 4, name: "Email", url: "mailto:syedumairali.617@gmail.com" },
];

const Socials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:space-x-16">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 md:mb-0
                         md:w-1/4 md:flex-shrink-0 text-left"
          >
            Socials
          </h2>

          <div className="flex-grow flex gap-4 space-y-3 md:space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
