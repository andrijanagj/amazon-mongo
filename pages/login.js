import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function LoginScreen() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <Layout title="Login">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mx-auto max-w-screen-md"
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
            type="email"
            className="w-full"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-600">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full"
            id="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            autoFocus
          />
          {errors.password && (
            <div className="text-red-600">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4 text-sm">
          Don&apos;t have an account? &nbsp;
          <Link href="register">
            <span className="text-blue-700 text-sm font-semibold cursor-pointer hover:underline">
              Register here!
            </span>
          </Link>
        </div>
      </form>
    </Layout>
  );
}
