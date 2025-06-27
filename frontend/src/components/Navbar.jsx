import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCartSharp";

const Navbar = () => {
  const users = useSelector((state) => state.userReducer?.users);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 bg-black text-white shadow-md backdrop-blur-sm">
      {/* Logo */}
      <div>
        <NavLink
          to="/"
          className="text-4xl font-extrabold tracking-wider text-white hover:text-gray-300 transition"
        >
          Luxora
        </NavLink>
      </div>

      {/* Links */}
      <div className="flex items-center gap-8 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-gray-300 transition ${isActive ? "text-[#BE3144]" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/Products"
          className={({ isActive }) =>
            `hover:text-gray-300 transition ${isActive ? "text-[#BE3144]" : ""}`
          }
        >
          Products
        </NavLink>

        {users ? (
          <>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${
                  isActive ? "text-[#BE3144]" : ""
                }`
              }
            >
              <ShoppingCartIcon />
            </NavLink>
            {users?.isAdmin && (
              <NavLink
                to="/admin/create-product"
                className={({ isActive }) =>
                  `hover:text-gray-300 transition ${
                    isActive ? "text-[#BE3144]" : ""
                  }`
                }
              >
                Create
              </NavLink>
            )}

            <NavLink
              to="/admin/user-profile"
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${
                  isActive ? "text-[#BE3144]" : ""
                }`
              }
            >
              <AccountCircleSharpIcon fontSize="medium" />
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              `hover:text-gray-300 transition ${
                isActive ? "text-[#BE3144]" : ""
              }`
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
