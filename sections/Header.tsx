import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10">
        <Link href="/" className="nav-item">
          Home
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
        <Link href="#about" className="nav-item">
          About
        </Link>
        <Link
          href="#contact"
          className="nav-item text-main bg-secondary hover:bg-secondary/90 hover:text-main"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
