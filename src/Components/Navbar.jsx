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
    loop: 0,
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
        <NavLink to="/createGroup">Create Group</NavLink>
      </li>
      <li>
        <NavLink to="/myGroups">My Groups</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-300 shadow-sm py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            <div className="flex flex-col md:hidden gap-2 mt-3">
              {user ? (
                <div>
                  <div className="avatar relative group mr-3">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                    <p className="absolute z-10 top-2 text-2xl right-12 bg-gray-200 rounded-sm px-3 text-gray-800 hidden group-hover:flex">
                      {user.displayName}
                    </p>
                  </div>

                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-primary"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink to="/login" className="btn mr-2">
                    Login
                  </NavLink>
                  <NavLink to="/register" className="btn">
                    Register
                  </NavLink>
                </div>
              )}
              <label className="toggle text-base-content mr-3">
                <input
                  type="checkbox"
                  className="theme-controller"
                  checked={theme === "dark"}
                  onChange={handleToggleTheme}
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-2xl">
          {text}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="hidden md:navbar-end">
        <label className="toggle text-base-content mr-3">
          <input
            type="checkbox"
            className="theme-controller"
            checked={theme === "dark"}
            onChange={handleToggleTheme}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
        {user ? (
          <div>
            <div className="avatar relative group mr-3">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
              <p className="absolute z-10 top-2 text-2xl right-12 bg-gray-200 rounded-sm px-3 text-gray-800 hidden group-hover:flex">
                {user.displayName}
              </p>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-primary btn-outline text-lg"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <NavLink
              to="/login"
              className="btn btn-primary btn-outline text-lg mr-2"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-primary btn-outline text-lg"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
