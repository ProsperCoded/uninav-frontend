import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
// import LogoBg from "../assets/images/ui_bg.jpg";
const HomePage = () => {
  return (
    <div className="pt-3 vh-100 hm_page">
      <div className="mx-lg-auto w-75">
        <Nav login={false} />
        <div className="mx-auto mt-4 w-lg-75 text-center">
          <div>
            <div className="hm-gr">
              <bold className="m-0 p-0">
                Welcome to <p className="d-block fs-1 hm_br"> UNINAV</p>
              </bold>
            </div>
            <p
              className="mx-auto mt-5 w-50 hm_inf"
              style={{ fontSize: "20px" }}
            >
              Effortlessly access all your study files in one place. Say goodbye
              to the hassle of searching and enjoy a streamlined, stress-free
              study experience!
            </p>
            <div className="mt-5">
              <Link className="hm_start" to={"/signUp"}>
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
