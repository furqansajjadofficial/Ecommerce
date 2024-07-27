import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import Light from "../../assets/Light.png";
import Dark from "../../assets/Dark.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import { NavLink, Link } from "react-router-dom";
import { nanoid } from "nanoid";

function Header() {
  const [darkMode, setDarkMode] = useState(
    useSelector((state) => state.theme.darkMode)
  );
  const [showManue, setshowManue] = useState(false);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.logined);
  const userData = useSelector((state) => state.auth.userData);

  const handleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  const toggleManue = () => {
    setshowManue(!showManue);
    if (showManue) {
      document.getElementById("mobile-manue").classList.remove("hidden");
      document.getElementById("mobile-manue").classList.add("inline-block");
    } else {
      document.getElementById("mobile-manue").classList.remove("inline-block");
      document.getElementById("mobile-manue").classList.add("hidden");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(darkMode ? "light" : "dark");
    dispatch(toggleTheme());
  }, [darkMode]);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
    },
    {
      name: "About",
      slug: "/about",
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900  w-full  start-0 border-b-2 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center md:text-2xl sm:text-lg text-sm font-semibold whitespace-nowrap dark:text-white">
            Universal Finds Hub
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          {authStatus ? (
            <>
              <Link to={`/${userData.user_name || "anonymous"}/cart`}>
                <button
                  type="button"
                  className="text-red-600 hidden md:inline-block focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-red-800"
                >
                  Your Cart
                </button>
              </Link>
              <button
                type="button"
                className="text-white hidden md:inline-block bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="dark:text-white hidden md:inline-block  hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Login
                </button>
              </Link>
              <button
                type="button"
                className="text-white hidden md:inline-block bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Sign up
              </button>
            </>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleManue}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <img
            src={darkMode ? Light : Dark}
            className="md:h-9 h-5  cursor-pointer hidden md:inline-block sm:inline-block"
            onClick={handleTheme}
          />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item, index) => (
              <li key={nanoid()}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-red-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-red-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        id="mobile-manue"
        className="w-full hidden md:hidden bg-white dark:bg-gray-900"
      >
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <>
              <li className="w-full" key={nanoid()}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded hover:bg-gray-100 ${
                      isActive
                        ? "text-red-600 dark:text-red-800 dark:hover:text-white dark:hover:bg-gray-700"
                        : "text-gray-900 dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            </>
          ))}
          <button
            className="text-white text-xl bg-blue-800 w-16 rounded-md"
            onClick={handleTheme}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          {authStatus ? (
            <>
              <Link to={`/${userData.user_name || "anonymous"}/cart`}>
                <button
                  type="button"
                  className={`my-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
                >
                  Your Cart
                </button>
              </Link>
              <button
                type="button"
                className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
            <Link to='/login'>
              <button
                type="button"
                className={`dark:text-white bg-transparent hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-red-700 dark:focus:ring-red-800`}
              >
                Login
              </button>
              </Link>
              <button
                type="button"
                className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
              >
                Sign up
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
