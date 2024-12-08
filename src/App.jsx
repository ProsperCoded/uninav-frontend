import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./Pages/SignUp";
import Forgot_Password from "./Pages/Forgot_Password";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Sch_result from "./Pages/Sch_result";
import { ConfigProvider } from "antd";
import { message } from "antd";
import { USER_PROFILE_CONTEXT, MESSAGE_API_CONTEXT } from "./context";
import { useState } from "react";
function ContextWrapper({ children }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [userProfile, setUserProfile] = useState(null);
  return (
    <MESSAGE_API_CONTEXT.Provider value={messageApi}>
      <USER_PROFILE_CONTEXT.Provider value={{ userProfile, setUserProfile }}>
        {contextHolder}
        {children}
      </USER_PROFILE_CONTEXT.Provider>
    </MESSAGE_API_CONTEXT.Provider>
  );
}
function AntDesignConfig({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#143474",
          colorFill: "#b1b1b1",
          // Alias Token
          colorBgContainer: "#f0f8ff",
        },
        components: {},
      }}
    >
      {children}
    </ConfigProvider>
  );
}
const App = () => {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/forgot_password" element={<Forgot_Password />} />
          <Route path="/search_result" element={<Sch_result />} />
          <Route path="/main_page" element={<Main />} />
        </Routes>
      </ContextWrapper>
    </BrowserRouter>
  );
};

export default App;
