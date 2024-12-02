import React from "react";
import { FaFileArchive } from "react-icons/fa";

const List_two = () => {
  return (
    <div className="ltw_cov  p-3 mt-2">
      <div className="">
        <div className="ltw_in_head">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex align-items-center gap-2 ">
              <div className="tt">
                <FaFileArchive />
              </div>
              <span className="tt_badge fs-6">CSC103</span>
            </div>
            <div>
              <button className="rd_fl">View</button>
            </div>
          </div>
        </div>
        <div className="ltw_mid mt-1">
            <h3>INTRODUCTION TO PROGRAMMING</h3>
        </div>
        <div className="ltw_btm">
            <small className="fm_p d-flex align-items-center">
                <span className="">FROM: </span>
                <b className="badge">TECH_PRO</b>
            </small>
        </div>
      </div>
    </div>
  );
};

export default List_two;
