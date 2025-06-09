import { useEffect } from "react";
import axios from "./Api/AxiosConfig";
const App = () => {
  const getProduct = async () => {
    try {
      const res = await axios.get("/products");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return <div className="bg-black h-screen w-screen font-black text-white">App</div>;
};

export default App;
