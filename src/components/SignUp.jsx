import React, { useState } from "react";
import { Button, Logo, Input } from "./index";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const signUp = async (data) => {
    setError("");

    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const currentUser = await authService.getCurrentUser();

        if (currentUser) {
          dispatch(login(currentUser));
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
          Create Your Account
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Join the community and start publishing your own articles.
        </p>

        <p className="mt-2 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Sign In
          </Link>
        </p>

        {error && (
          <div className="mt-6 rounded-xl border border-red-700 bg-red-900/30 px-4 py-3 text-center text-sm text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(signUp)} className="mt-8 space-y-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              validate: {
                matchPattern: (value) =>
                  /^([\w.-]+)?\w+@[\w-]+(\.\w+){1,}$/.test(value) ||
                  "Please enter a valid email address",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            {...register("password", {
              required: true,
            })}
          />

          <Button type="submit" className="w-full py-3 text-base">
            Create Account
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
