import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Hamburger({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed w-full top-0 left-0 bg-gray-950 z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl cursor-pointer"
      >
        <RxCross2 />
      </button>

      <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl">
        Home
      </Link>

      <Link
        to="/about"
        onClick={() => setIsMenuOpen(false)}
        className="text-2xl"
      >
        About
      </Link>

      <Link
        to="/projects"
        onClick={() => setIsMenuOpen(false)}
        className="text-2xl"
      >
        Projects
      </Link>

      <Link
        to="/contact"
        onClick={() => setIsMenuOpen(false)}
        className="text-2xl"
      >
        Contact
      </Link>
    </div>
  );
}

export default Hamburger;
