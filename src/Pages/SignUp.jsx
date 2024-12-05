import React, { useState } from "react";
import Ui from "../assets/images/UI.jpg";
import Ui_2 from "../assets/images/1726220935-university-of-ibadan_gfbmbo.jpg";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_main.png";
import { useEffect } from "react";
import { getDepartments, getFaculties, signupApi } from "../api";
import { useMemo } from "react";

const SignUp = () => {
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function signUpHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password does not match");
      console.error("Password does not match");
      return;
    }
    let join = selectedDepartment
      ? { faculty: selectedFaculty, department: selectedDepartment }
      : {};
    const payload = {
      firstName,
      lastName,
      email,
      password,
      ...join,
    };
    const errorHandler = (error) => {
      console.error(error);
      setError(error);
    };
    const response = await signupApi(payload, errorHandler, console.log);
    if (!response) return;
    const authData = await loginApi(
      { email, password },
      errorHandler,
      console.log
    );
    if (!authData) return;
  }
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
          <div className={`fm_cov position-relative m-2  mx-lg-5`}>
            <form action="" onSubmit={signUpHandler}>
              <h1 className="fm_head">Sign up</h1>
              <p>Welcome Signup here</p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="mt-2 in_put">
                  <label htmlFor="" className="mb-2">
                    First Name:
                  </label>
                  <input
                    name="lastname"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-2 in_put">
                  <label htmlFor="" className="mb-2">
                    Last Name:
                  </label>
                  <input
                    name="firstname"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2 in_put">
                  <label htmlFor="" className="mb-2">
                    Email:
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
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
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-2 in_put">
                  <label htmlFor="" className="mb-2">
                    Confirm password:
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <input type="checkbox" name="" id="" />
                  <small className="fm_sm">Remeber me</small>
                </div>
                {error && <small className="text-danger">{error}</small>}
                <div className="d-flex align-items-center gap-1 rem"></div>
                <div className="mt-2 lg_btn">
                  <button type="submit">Sign up</button>
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

export default SignUp;
