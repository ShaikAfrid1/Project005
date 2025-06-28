import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCartSharp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer?.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const linkClasses = ({ isActive }) =>
    `hover:text-gray-300 transition ${
      isActive ? "text-[#BE3144]" : "text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-wider text-white hover:text-gray-300"
        >
          Luxora
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center text-lg">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/products" className={linkClasses}>Products</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>

          {user && (
            <>
              <NavLink to="/cart" className={linkClasses}>
                <ShoppingCartIcon fontSize="small" />
              </NavLink>
              {user?.isAdmin && (
                <NavLink to="/admin/create-product" className={linkClasses}>
                  Create
                </NavLink>
              )}
              <NavLink to="/admin/user-profile" className={linkClasses}>
                <AccountCircleSharpIcon fontSize="small" />
              </NavLink>
            </>
          )}

          {!user && (
            <NavLink to="/login" className={linkClasses}>
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col bg-[#121212] rounded-xl px-6 py-4 gap-4 text-lg border border-[#333]">
          <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClasses} onClick={toggleMenu}>
            Products
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={toggleMenu}>
            About
          </NavLink>

          {user && (
            <>
              <NavLink to="/cart" className={linkClasses} onClick={toggleMenu}>
                <ShoppingCartIcon fontSize="small" /> Cart
              </NavLink>
              {user?.isAdmin && (
                <NavLink
                  to="/admin/create-product"
                  className={linkClasses}
                  onClick={toggleMenu}
                >
                  Create
                </NavLink>
              )}
              <NavLink
                to="/admin/user-profile"
                className={linkClasses}
                onClick={toggleMenu}
              >
                <AccountCircleSharpIcon fontSize="small" /> Profile
              </NavLink>
            </>
          )}

          {!user && (
            <NavLink to="/login" className={linkClasses} onClick={toggleMenu}>
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
