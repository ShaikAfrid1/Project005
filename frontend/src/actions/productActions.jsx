/* eslint-disable no-unused-vars */
import axios from "../Api/AxiosConfig";
import { loadproduct } from "../reducers/ProductSlice";

export const asyncloadproduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.error(error);
  }
};

export const asynccreateproduct = (product) => async (dispatch, getState) => {
  try {
    await axios.get("/products", product);
    dispatch(asyncloadproduct);
  } catch (error) {
    console.error(error);
  }
};
