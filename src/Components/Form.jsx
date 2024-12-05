import React, { useState } from "react";
import Ui from "../assets/images/UI.jpg";
import Ui_2 from "../assets/images/1726220935-university-of-ibadan_gfbmbo.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_main.png";
import { useEffect } from "react";
import { getDepartments, getFaculties } from "../api";
import { useMemo } from "react";

const Login = ({ signUp, welcome, user }) => {
  const [faculties, setFaculties] = useState();
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getFaculties((error) => {
      console.error(error);
      setError(error);
    }).then((faculties) => {
      if (faculties) {
        console.log(faculties);
        setFaculties(faculties);
      }
    });
  }, []);
  const [signInData, setSignInData] = useState({
    username_Signin: "",
    password_Signin: "",
  });

  const [signUpData, userSignUpData] = useState({
    username_SignUp: "",
    password_SignUp: "",
  });

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
            <img src={user ? Ui : Ui_2} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className={`fm_cov position-relative m-2  mx-lg-5 ${
              user ? "mt-lg-5" : "mt-lg-3"
            }`}
          >
            <form action="">
              <h1 className="fm_head">{signUp}</h1>
              <p>{welcome}</p>
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
                    disabled={!faculties}
                    onChange={(e) => {
                      const selected = e.target.value;
                      console.log("Selected", selected);
                      setSelectedFaculty(selected);
                    }}
                  >
                    <option selected>Select Faculty</option>
                    {faculties && (
                      <>
                        {faculties.map((faculty) => {
                          return (
                            <option
                              value={faculty._id}
                              key={faculty.facultyName}
                            >
                              {faculty.facultyName}
                            </option>
                          );
                        })}
                      </>
                    )}
                  </select>
                </div>
                <div className="mt-3 in_put">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    disabled={!faculties}
                    onChange={(e) => {
                      if (e.target) {
                        setSelectedDepartment(e.target.value);
                      }
                    }}
                  >
                    <option selected>
                      Select Department {!faculties && "Select a departments"}
                    </option>
                    {selectedFaculty && (
                      <>
                        {faculties
                          .find((faculty) => faculty._id === selectedFaculty)
                          .departments.map((department) => {
                            return (
                              <option
                                value={department._id}
                                key={department.departmentName}
                              >
                                {department.departmentName}
                              </option>
                            );
                          })}
                      </>
                    )}
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
                <div className="d-flex align-items-center gap-2 mt-3">
                  <input type="checkbox" name="" id="" />
                  <small className="fm_sm">Remeber me</small>
                </div>
                <div className="d-flex align-items-center gap-1 rem"></div>
                <div className="mt-2 lg_btn">
                  <button>{signUp}</button>
                </div>
                <div className="mt-1 sn_ln">
                  <div className="d-flex align-items-center">
                    <small>Already a user?</small>
                    <Link to={"/logIn"} className="ms-1 sn_link">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
