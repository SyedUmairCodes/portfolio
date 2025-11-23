import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6  pt-12 md:flex-row md:items-center md:pt-0 md:border-none">
        {/* Left Side: Copyright */}
        <div className="text-lg text-white uppercase">
          <span>&copy;{currentYear} Syed Umair Ali</span>
        </div>

        {/* Right Side: Links */}
        <nav className="flex items-center gap-8 md:gap-12">
          <a
            href="https://linkedin.com/in/syedumaircodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-gray-200"
          >
            Linkedin
          </a>
          <a
            href="mailto:syedumairali.617@gmail.com"
            className="text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-gray-200"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
