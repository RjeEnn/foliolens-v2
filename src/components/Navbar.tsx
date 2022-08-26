import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logoWhite from "../assets/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  const [nav, setNav] = useState(false);
  const [portalNav, setPortalNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-screen">
      <div
        className={`${
          location !== "/" && location !== "/signup" && location !== "/login"
            ? "hidden"
            : ""
        } w-screen h-[80px] z-50 bg-[#07031F] fixed top-0`}
      >
        <div className="px-8 flex justify-between items-center w-full h-full">
          <div className="w-full flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <input
                type="image"
                className="h-full"
                src={logoWhite}
                alt="logo"
              />
            </Link>
            <ul className="nav-l hidden md:flex items-center text-white">
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
            !nav
              ? "hidden"
              : "md:hidden nav-l absolute bg-[#07031F] w-full px-8"
          }
        >
          <div className="flex items-center justify-around mb-4">
            <button
              className="text-white bg-transparent border border-white w-2/5"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="text-[#07031F] bg-white border border-white w-2/5"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </ul>
      </div>

      <div
        className={`${
          location === "/dashboard" ||
          location === "/suggestions" ||
          location === "/profile" ||
          location.includes("/history/")
            ? ""
            : "hidden"
        } w-screen h-[80px] lg:hidden z-50 bg-[#07031F] fixed top-0`}
      >
        <div className="px-8 flex justify-between items-center w-full h-full">
          <div className="w-full flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <input
                type="image"
                className="h-full"
                src={logoWhite}
                alt="logo"
              />
            </Link>
          </div>
          <div className="lg:hidden" onClick={() => setPortalNav(!portalNav)}>
            {!portalNav ? (
              <MenuIcon className="w-5 text-white" />
            ) : (
              <XIcon className="w-5 text-white" />
            )}
          </div>
        </div>
        <ul
          onClick={() => setPortalNav(false)}
          className={
            !portalNav
              ? "hidden"
              : "md:hidden nav-l absolute bg-[#07031F] w-full p-8"
          }
        >
          <div className="flex flex-col items-center gap-4">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/suggestions">Suggestions</Link>
            <Link to="/history/2022-05-17">History</Link>
            <Link to="/profile">Settings</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
