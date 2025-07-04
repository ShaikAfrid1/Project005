import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    data.id = nanoid();
    data.isAdmin = false;
    data.cart = [];
    dispatch(asyncregisteruser(data));
    toast.success(`${data.username} account created!`, {
      position: "bottom-right",
    });
    reset();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-[#121212] p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 tracking-wide">
          Create Account 🖋️
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-gray-300 text-sm sm:text-base"
            >
              Username
            </label>
            <input
              id="username"
              {...register("username")}
              placeholder="lux_user"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F05941]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-gray-300 text-sm sm:text-base">
              Email Address
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F05941]"
            />
          </div>

          <div>
            <label htmlFor="pass" className="block mb-1 text-gray-300 text-sm sm:text-base">
              Password
            </label>
            <input
              id="pass"
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F05941]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#F05941] text-white font-semibold py-3 rounded-md hover:bg-[#BE3144] transition-all"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white underline hover:text-gray-300 transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
