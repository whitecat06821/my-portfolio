import { RxHamburgerMenu } from "react-icons/rx";
import { TbHexagonLetterA } from "react-icons/tb";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { NAV_ITEMS } from "./data";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Iprops {}

const Navbar = ({}: Iprops) => {
  const [isShow, setIsShow] = useState(false);
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
  };
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <nav className="flex justify-between items-center flex-wrap ">
        <TbHexagonLetterA size={25} />
        <div
          className="lg:hidden focus:bg-gray-400 p-1 rounded focus:ring-2 focus:ring-gray-700"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          <RxHamburgerMenu size={25} />
        </div>
        <div className={`${isShow && "hidden"} w-full lg:block lg:w-auto`}>
          <ul className="my-4 p-4 lg:space-x-10 mr-3 bg-gray-400 rounded font-light lg:flex lg:bg-transparent">
            {NAV_ITEMS.map((item, index) => (
              <NavLink
                className={`block p-2 z-10 hover:bg-gray-700 rounded text-lg dark:hover:text-white active:scale-75 ${
                  (currentPath === "/" || currentPath === "/about") &&
                  (index === 3 || index === 4)
                    ? "text-zinc-800 hover:bg-gray-800 hover:text-white"
                    : ""
                }`}
                to={item.to}
              >
                {item.text}
              </NavLink>
            ))}
          </ul>
        </div>

        <div
          onClick={toggleDarkMode}
          className={`fixed bottom-4 right-4 z-10  dark:text-zinc-800  w-10 h-10 shadow-xl :text-white rounded-full flex justify-center items-center lg:static`}
        >
          <FaRegMoon size={25} className="dark:hidden" />
          <FaRegSun size={25} className="hidden dark:block" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
