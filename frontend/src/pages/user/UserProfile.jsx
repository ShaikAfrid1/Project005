/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from "../../actions/userActions";

const UserProfile = () => {
  const users = useSelector((state) => state.userReducer?.user);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
    toast.success(`Profile Updated Successfully!`, {
      position: "bottom-right",
    });
  };

  const logoutUserHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
    navigate(0);
  };

  const deleteHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
    navigate(0);
  };

  return users ? (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 py-10 text-white">
      <div className="w-full max-w-md sm:max-w-xl bg-[#121212] p-6 sm:p-10 rounded-xl shadow-lg border border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 tracking-wide">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit(updateUserHandler)}
          className="flex flex-col gap-5"
        >
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-gray-300 text-sm font-semibold"
            >
              Username
            </label>
            <input
              id="username"
              {...register("username")}
              type="text"
              placeholder="User Name"
              className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-gray-300 text-sm font-semibold"
            >
              Email Address
            </label>
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
            />
          </div>

          <div>
            <label
              htmlFor="pass"
              className="block mb-1 text-gray-300 text-sm font-semibold"
            >
              Password
            </label>
            <input
              id="pass"
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#BE3144] hover:bg-[#F05941] text-white py-3 rounded-lg font-bold transition-all"
          >
            Update Profile
          </button>

          <button
            type="button"
            onClick={logoutUserHandler}
            className="w-full bg-[#872341] hover:bg-[#BE3144] text-white py-3 rounded-lg font-bold transition-all"
          >
            Logout
          </button>

          <button
            type="button"
            onClick={deleteHandler}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-all"
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="text-white text-center mt-20 text-lg animate-pulse">
      Loading...
    </div>
  );
};

export default UserProfile;
