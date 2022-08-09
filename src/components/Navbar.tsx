import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logoWhite from "../assets/logo-white.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  const [nav, setNav] = useState(false);

  return (
    <div
      className={`${
        location !== "/" && location !== "/signup" && location !== "/login"
          ? "hidden"
          : ""
      } w-screen h-[80px] z-10 bg-[#07031F] fixed top-0`}
    >
      <div className="px-8 flex justify-between items-center w-full h-full">
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <input type="image" className="h-full" src={logoWhite} alt="logo" />
          </Link>
          <ul className="nav-l hidden md:flex items-center text-white">
            <li>
              <a href="/#how-it-works">How it works</a>
            </li>
            <li>
              <Link to="/login">
                <button className="text-white bg-transparent border border-white">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="text-[#07031F] bg-white border-none">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {!nav ? (
            <MenuIcon className="w-5 text-white" />
          ) : (
            <XIcon className="w-5 text-white" />
          )}
        </div>
      </div>

      <ul
        onClick={() => setNav(false)}
        className={
          !nav ? "hidden" : "md:hidden nav-l absolute bg-[#07031F] w-full px-8"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full mb-4 text-center">
          How it works
        </li>
        <div className="flex items-center justify-around mb-4">
          <button className="text-white bg-transparent border border-white w-2/5">
            Login
          </button>
          <button className="text-[#07031F] bg-white border border-white w-2/5">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
