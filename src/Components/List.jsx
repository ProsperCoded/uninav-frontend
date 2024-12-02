import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const List = () => {
  return (
    <div className="list_cov mb-2 p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-1 align-items-center">
          <div className="fl_cv d-flex align-items-center justify-content-center">
            <FaFileAlt className="fa_right" />
          </div>
          <div className="fl_title">
            <span className="badge fs-5">Introduction to programming</span>
          </div>
        </div>
        <button className="d-flex btn_ls gap-2 align-items-center">
            <div className="fl_txt">
                <span>View</span>
            </div>
            <div className="right_arr">
                <FaAngleRight />
            </div>
            
        </button>
      </div>
    </div>
  );
};

export default List;
