import React, { useState } from "react";
import Logo from "../assets/images/logo_main.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Profile from "../assets/images/blank-profile-picture-973460_1280.webp";
import ModalPage from "./Modal";
import { BiLogOut } from "react-icons/bi";

const Nav = ({ login }) => {
  const [drop, setDrop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleTransitionEnd = () => {
    if (drop) setIsVisible(false); 
  };

  const changeDrop = () => {
    setDrop((s) => !s);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img src={Logo} className="img-fluid w-25 rounded-2" alt="" />
          </Link>
          {login ? (
            <div className="d-flex  align-items-center">
              <div>
                {/* <ModalPage icon={<CiSearch />} /> */}
                {login ? (
                  <ModalPage icon={<FaSearch style={{ fontSize: "20px" }} />} />
                ) : (
                  <input type="search" className="sch_nav"></input>
                )}
              </div>
              <div className="lg_out_cont ">
                <div className="nav_img_cov ms-3 mt-5" onClick={changeDrop}>
                  <img className="nav_img" src={Profile} alt="" />
                </div>
                <div
                  className="lg_out d-flex gap-1 align-items-center"
                  onClick={changeDrop}
                  style={{
                    transform: drop ? "translateY(-30px)" : "translateY(0)",
                    opacity: drop ? 0 : 1,
                    transition: "transform 0.5s ease, opacity 0.5s ease",
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  <BiLogOut />
                  logout
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex gap-3 hp_lg align-items-center">
              <Link className="hp_lg_btn" to={"/logIn"}>
                Log in
              </Link>
              <Link className="hp_lg_btn" to={"/signUp"}>
                Sign up{" "}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
