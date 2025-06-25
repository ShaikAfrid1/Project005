import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);

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
            {user && user?.isAdmin && (
              <NavLink to="/admin/create-product">Create Product</NavLink>
            )}
            <NavLink to="/admin/user-profile">
              <AccountCircleSharpIcon />
            </NavLink>
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
