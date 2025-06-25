import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, googleLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const existingUser = Object.fromEntries(formData.entries());
    const { email, password } = existingUser;

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          Swal.fire({
            title: "Logged In!",
            text: "You have successfully Logged In!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(location?.state || "/");
            }
          });
        }
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            title: "Logged In!",
            text: "You have successfully Logged In!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(location?.state || "/");
            }
          });
        }
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
      });
  };

  return (
    <div className="hero h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl text-center py-4">Log In</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
              </div>
              <div className="space-y-1.5">
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
              </div>
              <input
                type="submit"
                className="btn btn-neutral w-full"
                value={"Log In"}
              />
              <button
                onClick={handleGoogleLogin}
                className="btn btn-neutral w-full"
              >
                <FaGoogle />
                Log In with Google
              </button>
              <p>
                Don't have an account?{" "}
                <Link
                  className="font-bold hover:underline hover:text-blue-500"
                  to="/register"
                >
                  Sign up
                </Link>{" "}
                here.
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
