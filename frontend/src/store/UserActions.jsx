import axios from "../Api/AxiosConfig";
import { loadUser } from "./UserSlice";

export const asyncGetUsers = () => async (dispatch, getState) => {
  try {
    console.log(getState());

    const res = await axios.get("/users");
    dispatch(loadUser(res.data));
  } catch (error) {
    console.log(error);
  }
};
