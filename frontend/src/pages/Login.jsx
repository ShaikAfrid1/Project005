import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await dispatch(asyncloginuser(data));
      toast.success("Logged in!");
      reset();
      navigate("/");
      window.location.reload();
    } catch {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-[#121212] w-full max-w-md sm:max-w-lg p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 tracking-wide">
          Welcome Back 👋
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-gray-300 text-base sm:text-lg"
            >
              Email Address
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label
              htmlFor="pass"
              className="block mb-1 text-gray-300 text-base sm:text-lg"
            >
              Password
            </label>
            <input
              id="pass"
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition-all text-base sm:text-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm sm:text-base text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-white underline hover:text-gray-300"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
