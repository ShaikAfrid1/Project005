import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { asyncregisteruser } from "../actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.id = nanoid();
    dispatch(asyncregisteruser(data));
    reset();
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
            className="bg-[#BE3144] rounded-2xl mb-1 active:scale-90"
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
