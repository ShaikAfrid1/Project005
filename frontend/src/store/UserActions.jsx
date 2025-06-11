import axios from "../Api/AxiosConfig";

export const asyncGetUsers = async () => {
  try {
    const res = await axios.get("/users");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
