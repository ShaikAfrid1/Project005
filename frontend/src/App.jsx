/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Suspense } from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproduct } from "./actions/productActions";
import Loader from "./components/Loader";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer?.user);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (!user) dispatch(asynccurrentuser());
  }, [user]);

  useEffect(() => {
    if (products.length === 0) dispatch(asyncloadproduct());
  }, [products]);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Responsive Navbar stays sticky at the top */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <Navbar />
      </header>

      {/* Main content area with padding that adapts to screen size */}
      <main className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 transition-all duration-300">
        <Suspense fallback={<Loader />}>
          <Mainroutes />
        </Suspense>
      </main>

      {/* Optional footer if needed */}
      {/* <footer className="text-center py-4 text-gray-500 text-sm">
        © 2025 Luxora. All rights reserved.
      </footer> */}
    </div>
  );
};

export default App;
