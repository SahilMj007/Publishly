import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import store from "./store/store";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.error(`There is Some Error in App.jsx 01 :: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="min-h-screen bg-gray-900 text-white flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap justify-center items-center min-h-screen w-full bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Loading....</h1>
    </div>
  );
};

export default App;
