import React from "react";
import Form from "../Components/Form";

const SignUp = () => {
  return (
    <div>
      <Form
        signUp={"SignUp"}
        welcome={"Welcome! Create your account to get started."}
        user={false}
      />{" "}
    </div>
  );
};

export default SignUp;
