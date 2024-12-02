import React from "react";
import Nav from "../Components/Nav";
import List_two from "../Components/List_two";

const Sch_result = () => {
  const result = "money";
  return (
    <div className="sch_pge  mx-auto w-100 px-lg-5 py-3">
      <Nav login={true} />
      <div className="px-3">
        <div className="sch_cv mt-3">
          <small className="sm_cov">
            <b>
              HOME <span> >> </span>
            </b>
            <span className="text-secondary sch_sm">{result}</span>
          </small>
        </div>
        <div className="sm_up mt-3">
          <h1>Search result for "{result}"</h1>
        </div>
        <div className="sch_sm_bar mt-3">
          <input type="text" className="sch_in" />
          <button className="badge">Search</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 m-0 border-end border-2 border-light  p-3">
          <div
            style={{
              top: "1rem",
            }}
            className="position-sticky rfn_sch p-3"
          >
            <h3 className="">
              {" "}
              <span className="badge gui ">Refine your search</span>
            </h3>
            <div className="">
              <div className="slt_cov">
                <div className="slt_in mt-3">
                  <select
                    class="form-select form-select-sm  "
                    aria-label="Small select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="slt_in mt-3">
                  <select
                    class="form-select form-select-sm  w"
                    aria-label="Small select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="slt_in mt-3">
                  <select
                    class="form-select form-select-sm  w"
                    aria-label="Small select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="slt_in mt-3">
                  <select
                    class="form-select form-select-sm  "
                    aria-label="Small select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="slt_in mt-3">
                  <select
                    class="form-select form-select-sm "
                    aria-label="Small select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className=" mx-lg-5 mx-2">
            <List_two />
            <List_two />
            <List_two />
            <List_two />
            <List_two />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sch_result;
