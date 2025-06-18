import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../actions/userActions";
import { useDispatch } from "react-redux";
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    data.id = nanoid();
    data.isAdmin = false;
    dispatch(asyncregisteruser(data));
    toast.success(`${data.username} New Account Registered!`, {
      position: "bottom-right",
    });
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="mb-10 text-4xl items-center">Register!</h1>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-start flex-col w-1/3 p-2 "
        >
          <label htmlFor="user-name" className="text-xl">
            User Name:
          </label>
          <input
            id="user-name"
            {...register("username")}
            placeholder="Type your username"
            className="outline-0 border-b mb-3 p-2 text-3xl"
          />

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
            className="bg-[#BE3144] rounded-2xl mb-1 active:bg-[#ff314c]"
          >
            Register
          </button>
          <p>
            already have an acoount?&nbsp;
            <Link className="text-blue-500" to="/Login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
