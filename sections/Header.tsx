import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3 fixed">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className="nav-item">
          Home
        </Link>
        <Link href="#project" className="nav-item">
          Project
        </Link>
        <Link href="#about" className="nav-item">
          About
        </Link>
        <Link
          href="#contact"
          className="nav-item text-gray-900 bg-white hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
