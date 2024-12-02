import React, { useState } from "react";
import Nav from "../Components/Nav";
import Slide from "../Components/Slide";
import List from "../Components/List";
import TechPro from "../assets/images/Tech_PRO (1).png";
import Footer from "../Components/Footer";
import records from "../files.json";

const Main = () => {
  const [items, setItems] = useState([])
  const mn_name = "Kemi";
  const department = "Computer Science";
  const faculty = "Science"

  const filteredItems = records.filter(item => item.faculty === faculty);
  // console.log(filteredItems)

  // console.log(records)
  // const data = records ? records.slice(0, 6) : "No files based on your chosen course"
  
  return (
    <div className="mn_page" tabIndex={0}>
      <Nav login={true} />
      <div className="mn_into mx-auto w-100 px-lg-5 mt-3">
        <h1 className="mn_txt">Welcome, {mn_name}</h1>
        <p>Welcome to UNINAV, the best platform to get your files</p>
        <div className="mn_dpt d-flex gap-3 align-items-center">
          <h4>Department:</h4>
          <p className="pt-2">{department}</p>
        </div>
        <div className="mt-5">
          <h1 className="csc_name badge fs-3">Courses:</h1>
          <div className="mt-3">
            <Slide data={filteredItems} />
          </div>
        </div>
        <div className="mt-3">
          <h1 className="csc_name badge fs-3">Bookmarks:</h1>
          <div className="mt-3">
            <Slide />
          </div>
        </div>
        <div className="py-3">
          <div className="row">
            <div className="col-md-8 col-12 ">
              <h1 className="csc_name badge fs-3">Recommendations:</h1>
              <div className="mt-3 ls_mn p-3">
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
              </div>
            </div>
            <div className="col-md-4 my-auto">
              <div className="ft_er d-flex flex-column ">
                <span className="badge text-dark">Developed by:</span>
                <img className="img-fluid" src={TechPro} alt="" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
