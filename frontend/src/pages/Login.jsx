import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mb-10 text-4xl items-center">Login!</h1>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-start flex-col w-1/3 p-2 "
        >
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="outline-0 border-b mb-3 p-2 text-3xl"
          />

          <label htmlFor="pass" className="text-xl">
            Password:
          </label>
          <input
            id="pass"
            {...register("password")}
            type="password"
            placeholder="********"
            className="outline-0 border-b mb-3 p-2 text-3xl"
          />

          <button
            type="submit"
            className="bg-[#BE3144] rounded-2xl mb-1 active:scale-90"
          >
            Login
          </button>
          <p>
            don't have an acoount?&nbsp;
            <Link className="text-blue-500" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
