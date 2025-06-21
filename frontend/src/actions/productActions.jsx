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
    await axios.post("/products", product);
    dispatch(asyncloadproduct());
  } catch (error) {
    console.error(error);
  }
};

export const asyncupdateproduct =
  (id, product) => async (dispatch, getState) => {
    try {
      await axios.patch("/products/" + id, product);
      dispatch(asyncloadproduct());
    } catch (error) {
      console.error(error);
    }
  };

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncloadproduct());
  } catch (error) {
    console.error(error);
  }
};
