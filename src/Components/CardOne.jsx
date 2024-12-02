import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const CardOne = ({ info }) => {
  const [bootmark, setBootmark] = useState(false);
  console.log(info);
  return (
    <div className="ag_cov">
      {info.courses.map((course) => (
        <div className="ag-courses_item position-relative">
          <div
            className="ag-courses-item_link text-decoration-none"
            key={course.course_code}
          >
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title d-flex gap-2">
              <h2 className="badge">Course Title:</h2>
              <small className="text-uppercase">{course.course_code}</small>
            </div>
            <div className="position-absolute top-0 end-0 ag_btn">
             <Link className="agBtn badge">View</Link>
            </div>
            <div className="bt_mark">
              {bootmark ? <FaRegBookmark /> : <FaBookmark />}
            </div>
            <div className="fm_p position-absolute bottom-0 end-0 display-block mb-3 me-2">
              <small className="text-danger badge">
                <span className="text-secondary">FROM: </span>
                {info.username}
              </small>
            </div>
            <div className="ag-courses-item_date-box">
              {course.course_title.substring(0, 22) + "..."}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardOne;
