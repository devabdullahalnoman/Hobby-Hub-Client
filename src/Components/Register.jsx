import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const displayError = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-left",
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    const { name, email, photoURL, password } = newUser;

    const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (passwordRegEx.test(password) === false) {
      displayError(
        "Password must be 6 characters and must contain an uppercase and a lowercase character"
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const userData = userCredential.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...userData, displayName: name, photoURL: photoURL });
          })
          .catch((error) => {
            setUser(userData);
            displayError(error.message);
          });
        if (userData) {
          Swal.fire({
            title: "Signed Up!",
            text: "You have successfully Signed Up!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      })
      .catch((error) => {
        displayError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl text-center py-4">Register</h1>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-1.5">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Name"
                />
              </div>
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
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input w-full"
                  placeholder="Photo URL"
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
                value={"Sign Up"}
              />
              <p>
                Already have an account?{" "}
                <Link
                  className="font-bold hover:underline hover:text-blue-500"
                  to="/login"
                >
                  Log in
                </Link>{" "}
                instead.
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
