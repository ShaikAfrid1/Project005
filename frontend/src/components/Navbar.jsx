import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutuser } from "../actions/userActions";
import { toast } from "react-toastify";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    toast.error(`Logged Out Successfully!`, {
      position: "bottom-right",
      icon: false,
    });
    navigate("/");
  };

  return (
    <nav className="flex mb-10 justify-between items-center p-10">
      <div>
        <NavLink to="/" className="text-xl font-bold">
          Website Name
        </NavLink>
      </div>

      <div className="flex gap-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Products">Products</NavLink>
        {user ? (
          <>
            <NavLink to="/admin/create-product">Create Product</NavLink>
            <button onClick={logoutHandler}>Log Out</button>
          </>
        ) : (
          <>
            <NavLink to="/Login">Login</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
