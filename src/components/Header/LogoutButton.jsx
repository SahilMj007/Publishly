import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.error(
          `There is Some Error While Logout in LogoutButton :: ${err}`,
        );
      });
  };

  return (
    <button
      onClick={logoutHandler}
      className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/40 active:scale-95"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
