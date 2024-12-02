import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const FgPassTwo = () => {
  const [maxValue, setMaxValue] = useState(10);

  const code = (e) => {
    setMaxValue(1); 
  };

  return (
    <div className="fg_pass">
      <div className="position-absolute  top-0 start-0 m-lg-4">
        <FaArrowLeft className="fs-5 ar_lf" />
      </div>
      <h3 className="text-black text-center pt-4 fg_head">Verify your Email</h3>
      <div className="w-50  mx-auto p-2 pt-2 pt-lg-5">
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="ic_cv">
            <lord-icon
              src="https://cdn.lordicon.com/mwxbnfcf.json"
              trigger="loop"
              delay="1500"
              stroke="bold"
              colors="primary:#a1b5b7,secondary:#3f83f8"
              style={{
                width: "150px",
                height: "150px",
              }}
            ></lord-icon>
          </div>
          <p className="text-center fg_des">
            Please enter the 4 digit code sent to {"olaoluwaoyetibo@gmail.com"}
          </p>
          <div className="in_forgot mt-2">
            <form action="">
              <div className="in_fm d-flex justify-content-between align-items-center gap-2">
                <input
                  max={maxValue}
                  onChange={code}
                  className="cd_in"
                  type="number"
                />
                <input max={"1"} min={"1"} className="cd_in" type="number" />
                <input max={"1"} min={"1"} className="cd_in" type="number" />
                <input max={"1"} min={"1"} className="cd_in" type="number" />
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

export default FgPassTwo;
