/* eslint-disable no-unused-vars */
import axios from "../Api/AxiosConfig";
import { loaduser, removeuser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
  } catch (error) {
    console.error(error);
  }
};

export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (!data.length) {
      throw new Error("Invalid credentials");
    }

    const matchedUser = data[0];

    localStorage.setItem("user", JSON.stringify(matchedUser));
    dispatch(loaduser(matchedUser));
  } catch (error) {
    console.log("Login failed:", error.message);
    throw error;
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    if (!user.email || !user.password) {
      throw new Error("Missing email or password");
    }

    const res = await axios.post("/users", {
      email: user.email.trim(),
      password: user.password.trim(),
    });

    console.log("User registered:", res.data);
  } catch (error) {
    console.log("Register error:", error);
  }
};

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    // console.log(data);

    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asynccurrentuser());
  } catch (error) {
    console.log(error);
  }
};

export const asyncdeleteuser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/users/" + id);
    dispatch(asynclogoutuser());
  } catch (error) {
    console.log(error);
  }
};
