import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UnAuthWrapper from "../components/UnAuthWrapper";

// Lazy-loaded components
const Cart = lazy(() => import("../pages/Cart"));
const GuestLanding = lazy(() => import("../components/GuestLanding"));
const AuthWrapper = lazy(() => import("../components/AuthWrapper"));
const PageNotFound = lazy(() => import("../pages/user/PageNotFound"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Products = lazy(() => import("../pages/Products"));
const Home = lazy(() => import("../pages/Home"));

const Mainroutes = () => {
  const user = useSelector((state) => state.userReducer?.user);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={user ? <Home /> : <GuestLanding />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/login"
        element={
          <UnAuthWrapper>
            <Login />
          </UnAuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <UnAuthWrapper>
            <Register />
          </UnAuthWrapper>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      {/* 404 Page */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
