import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  activeBgColor = "active:bg-blue-700",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${bgColor} ${textColor} ${activeBgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;