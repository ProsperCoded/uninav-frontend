import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Forgot_Password = () => {
  const [passValue, setPassValue] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [submittedForm, setSubmittedForm] = useState();

  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passValue.newPassword === passValue.confirmPassword) {
      setSubmittedForm(passValue);
      toast.success("Password successfully reset!");
    } else {
      toast.error("Passwords do not match");
    }
  };

  const toggleVisibility = () => setVisible((v) => !v);
  const toggleVisibilityTwo = () => setVisibleTwo((v) => !v);

  return (
    <div className="fg_pass">
      <div className="position-absolute top-0 start-0 m-lg-4">
        <FaArrowLeft className="fs-5 ar_lf" />
      </div>
      <h3 className="text-black text-center pt-4 fg_head">Forgot Password</h3>
      <div className="w-50 mx-auto p-2 pt-2 pt-lg-3">
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="ic_cv">
            <lord-icon
              src="https://cdn.lordicon.com/xcrmpfbb.json"
              trigger="loop"
              delay="2000"
              stroke="bold"
              colors="primary:#a1b5b7,secondary:#3f83f8"
              style={{ width: "150px", height: "150px" }}
            ></lord-icon>
          </div>
          <p className="text-center fg_des">
            Your password must be different from previously used passwords.
          </p>
          <div className="in_forgot me-auto ms-lg-4 ps-md-4 mt-2">
            <form onSubmit={handleSubmit}>
              <div className="in_fm mb-3">
                <label htmlFor="newPassword" className="mb-2">
                  New Password
                </label>
                <input
                  type={visible ? "text" : "password"}
                  name="newPassword"
                  value={passValue.newPassword}
                  onChange={handleChange}
                  required
                />
                {visible ? (
                  <FaEyeSlash
                    onClick={toggleVisibility}
                    className="ms-auto eye_fg"
                  />
                ) : (
                  <FaEye
                    onClick={toggleVisibility}
                    className="ms-auto eye_fg"
                  />
                )}
              </div>
              <div className="in_fm mb-3">
                <label htmlFor="confirmPassword" className="mb-2">
                  Confirm New Password
                </label>
                <input
                  type={visibleTwo ? "text" : "password"}
                  name="confirmPassword"
                  value={passValue.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {visibleTwo ? (
                  <FaEyeSlash
                    onClick={toggleVisibilityTwo}
                    className="ms-auto eye_fg"
                  />
                ) : (
                  <FaEye
                    onClick={toggleVisibilityTwo}
                    className="ms-auto eye_fg"
                  />
                )}
              </div>
              <div className="btn_snd mt-2">
                <button type="submit" className="btn_ln">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot_Password;
