import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { useTypewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const currentTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have successfully Logged Out!",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
      });
  };

  const [text] = useTypewriter({
    words: ["HobbyHub"],
  });

  const links = (
    <div className="flex-col md:flex lg:flex-row text-lg">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allGroups">All Groups</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
    </div>
  );
  return (
    <div>
      <div className="shadow-sm">
        <div className="navbar w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100"
              >
                {links}
                <div className="flex items-center justify-between">
                  <p>Theme</p>
                  <label className="toggle mr-3 text-base-content">
                    <input
                      type="checkbox"
                      className="theme-controller"
                      checked={theme === "dark"}
                      onChange={handleToggleTheme}
                    />
                  </label>
                </div>
                <div className="flex flex-col md:hidden gap-2 mt-3">
                  {user ? (
                    <div className="flex flex-col">
                      <div className="avatar relative group mr-3">
                        <div className="w-12 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                        <p className="absolute z-10 top-2 text-base-content text-2xl right-2 rounded-sm px-3 hidden group-hover:flex bg-base-100">
                          {user.displayName}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <NavLink to="/dashboard">
                          <button className="btn btn-outline hover:bg-base-100 w-full">
                            Dashboard
                          </button>
                        </NavLink>
                        <button
                          onClick={handleLogOut}
                          className="btn btn-outline mt-2"
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-around">
                      <NavLink to="/login" className="btn btn-outline mr-2">
                        Login
                      </NavLink>
                      <NavLink to="/register" className="btn btn-outline">
                        Register
                      </NavLink>
                    </div>
                  )}
                </div>
              </ul>
            </div>
            <a href="/" className="text-2xl font-bold">
              {text}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
          </div>
          <div className="hidden md:navbar-end">
            <label className="toggle mr-3 text-base-content">
              <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "dark"}
                onChange={handleToggleTheme}
              />
            </label>
            {user ? (
              <div className="flex items-center">
                <div className="avatar relative group mr-3">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                  <p className="absolute z-10 top-14 text-2xl right-4 bg-base-100 rounded-sm px-3 hidden group-hover:flex">
                    {user.displayName}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <NavLink to="/dashboard">
                    <button className="btn btn-outline hover:bg-base-100 text-lg">
                      Dashboard
                    </button>
                  </NavLink>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline hover:bg-base-100 text-lg"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <NavLink to="/login" className="btn btn-outline text-lg mr-2">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline text-lg">
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
