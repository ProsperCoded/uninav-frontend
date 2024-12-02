import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
// import LogoBg from "../assets/images/ui_bg.jpg";
const HomePage = () => {
  return (
    <div className="hm_page pt-3 vh-100">
      <div className="w-75 mx-lg-auto">
        <Nav login={false} />
        <div className="w-lg-75 text-center mt-4 mx-auto">
          <div>
            <div className="hm-gr">
              <bold className="m-0 p-0">
                Welcome <p className="hm_br d-block fs-1"> to Ui files</p>
              </bold>
            </div>
            <p className="mt-5 hm_inf w-50 mx-auto">
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
