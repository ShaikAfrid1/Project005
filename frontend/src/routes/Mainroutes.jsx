import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import { useSelector } from "react-redux";
import UserProfile from "../pages/user/UserProfile";

const Mainroutes = () => {
  const { users } = useSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path="/" element={users ? <Home /> : <Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/user-profile" element={<UserProfile />} />

      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Mainroutes;
