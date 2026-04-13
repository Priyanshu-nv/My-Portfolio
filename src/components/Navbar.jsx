import { useEffect } from "react";
import Logo from "./Logo";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg px-1 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-17">
          <Logo />

          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono"
          >
            <IoMenuOutline />
          </div>

          <div className="flex md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-14">
              <Link className="text-2xl hover:underline transition-all" to="/">
                Home
              </Link>
              <Link
                className="text-2xl hover:underline transition-all"
                to="/about"
              >
                About
              </Link>
              <Link
                className="text-2xl hover:underline transition-all"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-2xl hover:underline transition-all"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
