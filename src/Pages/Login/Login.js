import React, { useContext } from "react";
import "./Login.css";
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import googleIcon from "../../assets/icons/google.png";
import facebookIcon from "../../assets/icons/fb.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { loginWithGoogle, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="mb-5">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <span className="icon">
                <MdMail />
              </span>
              <input
                placeholder="Username or Email"
                type="email"
                name="email"
                className=""
                required
              />
              {/* <label htmlFor="email">Username or Email</label> */}
            </div>

            <div className="form-control">
              <span className="icon">
                <FaLock />
              </span>
              <input
                placeholder="Password"
                type="password"
                name="password"
                className=""
                required
              />
              {/* <label htmlFor="password">Password</label> */}
            </div>
            <div className="remember-forget">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <Link className="text-yellow-300" to="">
                Forgot Password?
              </Link>
            </div>
            <input type="submit" value="Login" className="btn-submit" />
          </form>
          <p className="text-center mt-5 text-sm mb-8">
            Don't have an account
            <Link to="/sign-up">
              <span className="text-orange-400">create a New Account</span>
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
            onClick={handleGoogleLogin}
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

export default Login;
