import logo from "../assets/folioLens-logo.png";
import {
  ClipboardIcon,
  ChartPieIcon,
  CalendarIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "./auth/Auth";

const UserSidebar = () => {
  const location = useLocation().pathname;
  const auth = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    if (auth) {
      nav("/");
      auth.logout();
    }
  };

  return (
    <aside className="hidden lg:block w-64 fixed top-0" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white h-[100vh]">
        <div className="h-full flex flex-col justify-between">
          <div>
            <Link to="/" className="flex items-center pl-2.5 mb-5">
              <img src={logo} className="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
              <span className="self-center text-xl whitespace-nowrap">
                FolioLens
              </span>
            </Link>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className={`${
                    location === "/dashboard" ? "bg-indigo-700 text-white" : ""
                  } flex items-center p-2 text-base font-normal rounded-lg hover:bg-indigo-400`}
                >
                  <ChartPieIcon className="h-6" />
                  <span className="ml-3 font-medium">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/suggestions"
                  className={`${
                    location === "/suggestions"
                      ? "bg-indigo-700 text-white"
                      : ""
                  } flex items-center p-2 text-base font-normal rounded-lg hover:bg-indigo-400`}
                >
                  <ClipboardIcon className="h-6" />
                  <span className="ml-3 font-medium">Suggestions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/history/2022-05-17"
                  className={`${
                    location.includes("/history")
                      ? "bg-indigo-700 text-white"
                      : ""
                  } flex items-center p-2 text-base font-normal rounded-lg hover:bg-indigo-400`}
                >
                  <CalendarIcon className="h-6" />
                  <span className="ml-3 font-medium">History</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={`${
                    location === "/profile" ? "bg-indigo-700 text-white" : ""
                  } flex items-center p-2 text-base font-normal rounded-lg hover:bg-indigo-400`}
                >
                  <CogIcon className="h-6" />
                  <span className="ml-3 font-medium">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="flex items-center p-2 text-base font-normal bg-transparent text-red-500 rounded-lg hover:bg-red-100"
            onClick={() => handleLogout()}
          >
            <LogoutIcon className="h-6" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default UserSidebar;
