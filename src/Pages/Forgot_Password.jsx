import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Forgot_Password = () => {
  return (
    <div className="fg_pass">
      <div className="position-absolute  top-0 start-0 m-lg-4">
        <Link to={"/"} className="text-dark">
          <FaArrowLeft className="fs-5 ar_lf" />
        </Link>
      </div>
      <h3 className="text-black text-center pt-4 fg_head">Forgot Password</h3>
      <div className="w-50  mx-auto p-2 pt-2 pt-lg-5">
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="ic_cv">
            <lord-icon
              //   src="https://cdn.lordicon.com/ukwexxlc.json"
              src="https://cdn.lordicon.com/acydszgh.json"
              trigger="loop"
              delay="2000"
              stroke="bold"
              colors="primary:#a1b5b7,secondary:#3f83f8"
              style={{
                width: "150px",
                height: "150px",
              }}
            ></lord-icon>
          </div>
          <p className="text-center fg_des">
            Please enter your email address to receive your verification
          </p>
          <div className="in_forgot me-auto ms-lg-5 ps-md-4 mt-2">
            <form action="">
              <div className="in_fm">
                <label htmlFor="" className="mb-2">
                  Email Address
                </label>
                <input type="text" />
              </div>
            </form>
          </div>
          <div className="btn_snd mt-2 mt-lg-5">
            <button className="btn_ln">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot_Password;
