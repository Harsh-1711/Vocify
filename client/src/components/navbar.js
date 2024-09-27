import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/homepage"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/abt"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/course"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/campaign"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/video"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      ></NavLink>
      {/* Add other navigation links */}
    </nav>
  );
}

export default Navbar;
