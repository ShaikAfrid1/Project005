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

export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loaduser(data[0])); // ✅ important
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
    throw error; // rethrow for frontend to catch
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
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
