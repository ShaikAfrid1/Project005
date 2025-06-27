import axios from "axios";

const instance = axios.create({
  baseURL: "https://project005.onrender.com",
});

export default instance;
