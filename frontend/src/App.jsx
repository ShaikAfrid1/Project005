import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./actions/userActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#22092C] p-5 h-screen w-screen  text-white font-black">
      <Navbar />

      <Mainroutes />
    </div>
  );
};

export default App;
