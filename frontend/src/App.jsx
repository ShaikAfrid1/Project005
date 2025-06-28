/* eslint-disable react-hooks/exhaustive-deps */
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
  const user = useSelector((state) => state.userReducer?.user);

  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    console.log("Redux user on App mount:", user);
  }, [user]);

  // useEffect(() => {
  //   !user && dispatch(asynccurrentuser());
  // }, [user]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncloadproduct());
  }, [products]);

  console.log("Redux user:", user);

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
