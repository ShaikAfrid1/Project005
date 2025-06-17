import { NavLink } from "react-router-dom";
const Navbar = () => {
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
        <NavLink to="/Login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
