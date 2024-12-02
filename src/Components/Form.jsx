import React, { useState } from "react";
import Ui from "../assets/images/Ui.jpg";
import Ui_2 from "../assets/images/1726220935-university-of-ibadan_gfbmbo.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_main.png";

const Login = ({ signUp, welcome, user }) => {
  const [info, setInfo] = useState({
    username_Signin: "",
    password_Signin: "",
  });

  const [infoTwo, setInfoTwo] = useState({
    username_SignUp: "",
    password_SignUp: "",
  });

  return (
    <section className="login_cont mx-auto w-75 m-3 mt-lg-5">
      <div className="row">
        <div className="position-absolute top-0 start-0 w-50 ">
          <img src={Logo} className="img-fluid w-25 rounded-2" alt="" />
        </div>
        <div className="col-md-6">
          <div className="img_cov">
            <img src={user ? Ui : Ui_2} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div
            className={`fm_cov position-relative m-2  mx-lg-5 ${
              user ? "mt-lg-5" : "mt-lg-3"
            }`}
          >
            <form action="">
              <h1 className="fm_head">{signUp}</h1>
              <p>{welcome}</p>
              {user ? (
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
                    <div className="rem d-flex align-items-center gap-1">
                      <input type="checkbox" name="" id="" />
                      <small>Remeber me</small>
                    </div>
                    <div className="for_get">
                      <Link to={"/forgot_password"}>Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="lg_btn mt-2">
                    <button>{signUp}</button>
                  </div>
                  <div className="sn_ln mt-1">
                    <div className="d-flex align-items-center">
                      <small>New User?</small>
                      <Link to={"/signUp"} className="sn_link ms-1">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mt-2 in_put">
                    <label htmlFor="" className="mb-2">
                      Username:
                    </label>
                    <input name="username_SignUp" type="text" />
                  </div>
                  <div className="mt-3 in_put">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Faculty</option>
                      <option value="Agriculture and Forestry">
                        Agriculture and Forestry
                      </option>
                      <option value="Arts">Arts</option>
                      <option value="Basic Medical Sciences">
                        Basic Medical Sciences
                      </option>
                      <option value="Clinical Sciences">
                        Clinical Sciences
                      </option>
                      <option value="Dentistry">Dentistry</option>
                      <option value="Education">Education</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Environmental Design and Management">
                        Environmental Design and Management
                      </option>
                      <option value="Law">Law</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Public Health">Public Health</option>
                      <option value="Science">Science</option>
                      <option value="Social Sciences">Social Sciences</option>
                      <option value="Technology">Technology</option>
                      <option value="Veterinary Medicine">
                        Veterinary Medicine
                      </option>
                    </select>
                  </div>
                  <div className="mt-3 in_put">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Department</option>
                      <option value="Agricultural and Environmental Engineering">
                        Agricultural and Environmental Engineering
                      </option>
                      <option value="Agricultural Extension and Rural Development">
                        Agricultural Extension and Rural Development
                      </option>
                      <option value="Agronomy">Agronomy</option>
                      <option value="Anatomy">Anatomy</option>
                      <option value="Anthropology">Anthropology</option>
                      <option value="Arabic and Islamic Studies">
                        Arabic and Islamic Studies
                      </option>
                      <option value="Archaeology">Archaeology</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Biochemistry">Biochemistry</option>
                      <option value="Botany">Botany</option>
                      <option value="Chemical Engineering">
                        Chemical Engineering
                      </option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Civil Engineering">
                        Civil Engineering
                      </option>
                      <option value="Classics">Classics</option>
                      <option value="Communication and Language Arts">
                        Communication and Language Arts
                      </option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Dentistry">Dentistry</option>
                      <option value="Economics">Economics</option>
                      <option value="Education">Education</option>
                      <option value="Electrical and Electronics Engineering">
                        Electrical and Electronics Engineering
                      </option>
                      <option value="English">English</option>
                      <option value="Environmental Health Science">
                        Environmental Health Science
                      </option>
                      <option value="Fine and Applied Arts">
                        Fine and Applied Arts
                      </option>
                      <option value="Food Technology">Food Technology</option>
                      <option value="Forestry and Wildlife Management">
                        Forestry and Wildlife Management
                      </option>
                      <option value="Geography">Geography</option>
                      <option value="Geology">Geology</option>
                      <option value="History">History</option>
                      <option value="Human Nutrition and Dietetics">
                        Human Nutrition and Dietetics
                      </option>
                      <option value="Industrial and Production Engineering">
                        Industrial and Production Engineering
                      </option>
                      <option value="Library, Archival and Information Studies">
                        Library, Archival and Information Studies
                      </option>
                      <option value="Linguistics">Linguistics</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Mechanical Engineering">
                        Mechanical Engineering
                      </option>
                      <option value="Medicine and Surgery">
                        Medicine and Surgery
                      </option>
                      <option value="Microbiology">Microbiology</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Philosophy">Philosophy</option>
                      <option value="Physics">Physics</option>
                      <option value="Physiology">Physiology</option>
                      <option value="Political Science">
                        Political Science
                      </option>
                      <option value="Psychology">Psychology</option>
                      <option value="Religious Studies">
                        Religious Studies
                      </option>
                      <option value="Social Work">Social Work</option>
                      <option value="Sociology">Sociology</option>
                      <option value="Statistics">Statistics</option>
                      <option value="Veterinary Medicine">
                        Veterinary Medicine
                      </option>
                      <option value="Zoology">Zoology</option>
                    </select>
                  </div>
                  <div className="mt-2 in_put">
                    <label htmlFor="" className="mb-2">
                      Password:
                    </label>
                    <input name="password_SignUp" type="password" />
                  </div>
                  <div className="mt-2 in_put">
                    <label htmlFor="" className="mb-2">
                      Confirm password:
                    </label>
                    <input type="password" />
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3">
                    <input type="checkbox" name="" id="" />
                    <small className="fm_sm">Remeber me</small>
                  </div>
                  <div className="rem d-flex align-items-center gap-1"></div>
                  <div className="lg_btn mt-2">
                    <button>{signUp}</button>
                  </div>
                  <div className="sn_ln mt-1">
                    <div className="d-flex align-items-center">
                      <small>Already a user?</small>
                      <Link to={"/logIn"} className="sn_link ms-1">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
