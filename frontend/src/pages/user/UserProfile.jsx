/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncdeleteuser, asyncupdateuser } from "../../actions/userActions";

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);

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

  const deleteHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
  };

  return users ? (
    <div className="flex justify-center items-center min-h-screen bg-[#22092C] text-white">
      <div className="w-[90%] max-w-xl">
        <form
          onSubmit={handleSubmit(updateUserHandler)}
          className="flex flex-col bg-[#872341] p-6 rounded-xl shadow-md"
        >
          <h1 className="text-center text-4xl font-bold mb-6 ">Edit Profile</h1>

          <label htmlFor="username" className="text-xl mb-1">
            User Name:
          </label>
          <input
            id="username"
            {...register("username")}
            type="text"
            placeholder="User Name"
            className="outline-0 border-b mb-4 p-2 text-lg "
          />

          <label htmlFor="email" className="text-xl mb-1">
            Email:
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            placeholder="Email"
            className="outline-0 border-b mb-4 p-2 text-lg "
          />

          <label htmlFor="pass" className="text-xl mb-1">
            Password:
          </label>
          <input
            id="pass"
            {...register("password")}
            type="password"
            placeholder="********"
            className="outline-0 border-b mb-4 p-2 text-lg "
          />

          <button
            type="submit"
            className="bg-green-400 rounded-2xl mt-2 py-2 text-lg active:bg-green-500"
          >
            Update User!
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="bg-red-400 rounded-2xl mt-3 py-2 text-lg active:bg-red-500"
          >
            Logout User!
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
