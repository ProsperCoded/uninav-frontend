import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_main.png";
import Ui from "../assets/images/UI.jpg";
const Login = () => {
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const user = true;
  return (
    <section className="m-3 mx-auto mt-lg-5 w-75 login_cont">
      <div className="row">
        <Link to={"/"}>
          <div className="top-0 position-absolute w-50 start-0">
            <img src={Logo} className="rounded-2 w-25 img-fluid" alt="" />
          </div>
        </Link>
        <div className="col-md-6">
          <div className="img_cov">
            <img src={Ui} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className={`fm_cov position-relative m-2  mx-lg-5 ${
              user ? "mt-lg-5" : "mt-lg-3"
            }`}
          ></div>
          <form action="" className="p-3">
            <h1 className="fm_head">Login</h1>
            <p>Welcome back! Please login to your account</p>
            <div>
              <div className="mt-4 in_put">
                <label htmlFor="" className="mb-2">
                  Username:
                </label>
                <input name="username_Sign" type="text" />
              </div>
              <div className="mt-4 in_put">
                <label htmlFor="" className="mb-2">
                  Password:
                </label>
                <input name="password_Signin" type="text" />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                {error && <small className="text-danger">{error}</small>}
                <div className="d-flex align-items-center gap-1 rem">
                  <input
                    type="checkbox"
                    name=""
                    id="remember-me"
                    onChange={(e) => {
                      e.target.checked
                        ? setRememberMe(true)
                        : setRememberMe(false);
                    }}
                  />
                  <label htmlFor="remember-me">Remeber me</label>
                </div>
                <div className="for_get">
                  <Link to={"/forgot_password"}>Forgot Password?</Link>
                </div>
              </div>
              <div className="mt-2 lg_btn">
                <button>sign up</button>
              </div>
              <div className="mt-1 sn_ln">
                <div className="d-flex align-items-center">
                  <small>New User?</small>
                  <Link to={"/signUp"} className="ms-1 sn_link">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
