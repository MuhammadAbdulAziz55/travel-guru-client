import React, { useContext, useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

import googleIcon from "../../assets/icons/google.png";
import facebookIcon from "../../assets/icons/fb.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { CreateAccount, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(fullName, password, confirmPassword);

    if (password.length < 6) {
      toast.error("Your password should be at least 6 characters long");
    }

    if (password !== confirmPassword) {
      toast.error("Your password didn't match. Please try again");
    }
    if (password === confirmPassword) {
      return CreateAccount(email, password)
        .then((res) => {
          const user = res.user;
          console.log("user", user);
          toast.success("Your account successfully created");

          form.reset();
          setError("");
          handleUpdateUserProfile(fullName);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
        });
    }
  };

  const handleUpdateUserProfile = (fullName) => {
    const profile = {
      displayName: fullName,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Navbar />
      <div className="mb-5">
        <div className="form-container">
          <h2 className="form-title">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            {/* full name */}
            <div className="form-control">
              <input
                placeholder="Full Name"
                type="text"
                name="fullName"
                className=""
                required
              />
            </div>

            {/* username or email */}
            <div className="form-control">
              <input
                placeholder="Email"
                type="email"
                name="email"
                className=""
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <input
                placeholder="Password"
                type="password"
                name="password"
                className=""
                required
              />
            </div>

            {/* confirm password */}
            <div className="form-control">
              <input
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                className=""
                required
              />
            </div>

            <p className="text-red-600 text-center text-sm"> {error}</p>

            {/* create an account button */}
            <input
              type="submit"
              value="Create an Account"
              className="btn-create-account mt-4"
            />
          </form>

          <p className="text-center mt-5 text-sm mb-8">
            Already have an account?
            <Link to="/login">
              <span className="text-orange-400">Login</span>
            </Link>
          </p>
        </div>

        {/* <div>
      <h4 className="m-horizontal-line text-center ">or</h4>
    </div> */}
        {/* <div class="relative flex py-5 items-center w-3">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">Content</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div> */}

        {/* .................horizontal line divider division................. */}
        <div className="flex items-center justify-center">
          <div className="border-b border-white w-1/5 lg:w-40"></div>
          <span className="mx-3 text-white ">or</span>
          <div className="border-b border-white w-1/4 lg:w-40"></div>
        </div>

        {/* ................login with google division................ */}

        <div className="flex  justify-center items-center mt-2">
          <button
            className="loginWithGoogle flex items-center justify-center gap-2  py-2 font-medium tracking-wide text-white capitalize  bg-transparent rounded-3xl focus:outline-none border-solid border-2 border-orange-500
      hover:bg-transparent"
          >
            <img alt="" src={googleIcon} className="w-6 flex justify-start" />
            Continue with Google
          </button>
        </div>

        {/* ................login with facebook division................ */}
        <div className="facebook flex  justify-center items-center mt-5 ">
          <button
            className="loginWithGoogle flex items-center justify-center gap-2 py-2 font-medium tracking-wide text-white capitalize  bg-transparent rounded-3xl focus:outline-none border-solid border-2 border-orange-500
      hover:bg-transparent"
          >
            <img alt="" src={facebookIcon} className="w-6" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
