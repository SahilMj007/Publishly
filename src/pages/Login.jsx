import React, { useEffect } from "react";
import { Login as LoginComponent } from "../components/index";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Publishly";
  }, []);
  return (
    <div className="py-8">
      <LoginComponent />
    </div>
  );
};

export default Login;
