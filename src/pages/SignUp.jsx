import React, { useEffect } from "react";
import { SignUp as SignUpComponent } from "../components/index";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign-Up | Publishly";
  }, []);
  return (
    <div className="py-8">
      <SignUpComponent />
    </div>
  );
};

export default SignUp;
