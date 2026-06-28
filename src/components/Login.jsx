import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(authLogin(userData));
        }

        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="flex min-h-[85vh] items-center justify-center bg-slate-950 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="mb-8 flex justify-center">
          <div className="w-28">
            <Logo width="100%" />
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Sign in to continue to your account.
        </p>

        <p className="mt-2 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Create one
          </Link>
        </p>

        {error && (
          <div className="mt-6 rounded-xl border border-red-700 bg-red-900/30 px-4 py-3 text-center text-sm text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              validate: {
                matchPattern: (value) =>
                  /^([\w.-]+)?\w+@[\w-]+(\.\w+){1,}$/.test(value) ||
                  "Email address must be valid",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />

          <Button type="submit" className="w-full py-3 text-base">
            Sign In
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
