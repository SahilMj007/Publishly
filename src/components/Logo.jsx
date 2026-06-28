import React from "react";

const Logo = ({ width = "180px" }) => {
  return (
    <h1
      style={{ width }}
      className="text-3xl font-black tracking-tight text-white"
    >
      Publishly
    </h1>
  );
};

export default Logo;
