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
    <div className="flex justify-center items-center min-h-screen bg-black px-4 text-white">
      <div className="w-full max-w-xl bg-[#121212] p-8 rounded-xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white tracking-wide">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit(updateUserHandler)}
          className="flex flex-col gap-4"
        >
          <label htmlFor="username" className="text-sm font-semibold">
            User Name
          </label>
          <input
            id="username"
            {...register("username")}
            type="text"
            placeholder="User Name"
            className="bg-[#1e1e1e] p-3 rounded text-white outline-none focus:ring-2 focus:ring-[#BE3144]"
          />

          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            placeholder="Email"
            className="bg-[#1e1e1e] p-3 rounded text-white outline-none focus:ring-2 focus:ring-[#BE3144]"
          />

          <label htmlFor="pass" className="text-sm font-semibold">
            Password
          </label>
          <input
            id="pass"
            {...register("password")}
            type="password"
            placeholder="********"
            className="bg-[#1e1e1e] p-3 rounded text-white outline-none focus:ring-2 focus:ring-[#BE3144]"
          />

          <button
            type="submit"
            className="bg-[#BE3144] hover:bg-[#F05941] text-white py-3 rounded-lg font-bold transition duration-200"
          >
            Update Profile
          </button>

          <button
            type="button"
            onClick={logoutUserHandler}
            className="bg-[#872341] hover:bg-[#BE3144] text-white py-3 rounded-lg font-bold transition duration-200"
          >
            Logout
          </button>

          <button
            type="button"
            onClick={deleteHandler}
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition duration-200"
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="text-white text-center mt-20 text-lg">Loading...</div>
  );
};

export default UserProfile;
