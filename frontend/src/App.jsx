import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./actions/userActions";
import { useDispatch } from "react-redux";
import { asyncloadproduct } from "./actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full font-sans">
      <Navbar />
      <main className="px-4 sm:px-8 lg:px-16 py-4">
        <Mainroutes />
      </main>
    </div>
  );
};

export default App;
