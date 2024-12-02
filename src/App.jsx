import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./Pages/SignUp";
import Forgot_Password from "./Pages/Forgot_Password";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Sch_result from "./Pages/sch_result";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/forgot_password" element={<Forgot_Password />} />
        <Route path="/search_result" element={<Sch_result />} />
        <Route path="/main_page" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
