import React from "react"
import { NavLink } from "react-router-dom";
import styleSelect from "./Navbar.module.css";

const navData = ({isActive}) => isActive ? styleSelect.active : ""


const Navbar = () => {
    return (
    <nav className={styleSelect.nav}>
      <ul>
        <li className={styleSelect.item}>
          <NavLink className={navData} to="/main">Profile </NavLink>
        </li>
        <li className={styleSelect.item}>
          <NavLink className={navData} to="/dialogs">Messages</NavLink>
        </li>
        <li className={styleSelect.item}>
          <NavLink className={navData} to="/news">News</NavLink>
        </li>
        <li className={styleSelect.item}>
          <NavLink className={navData} to="/music">Music</NavLink>
        </li>
        <li className={styleSelect.item}>
         <NavLink className={navData} to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
    );
}
    

export default Navbar;