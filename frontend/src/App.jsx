import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproduct } from "./actions/productActions";
import { Suspense } from "react";
import Loader from "./components/Loader";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer?.users);

  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncloadproduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <div className="bg-black text-white min-h-screen w-full font-sans">
      <Navbar />
      <main className="px-4 sm:px-8 lg:px-16 py-4">
        <Suspense fallback={<Loader />}>
          <Mainroutes />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
