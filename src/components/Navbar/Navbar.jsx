import React from "react"
import { Link } from "react-router-dom";
import styleSelect from "./Navbar.module.css";

const Navbar = () => {
    return (
    <nav className={styleSelect.nav}>
      <ul>
        <li className={styleSelect.item}>
          <Link className={styleSelect.item_link} to="/main">Profile </Link>
        </li>
        <li className={styleSelect.item}>
          <Link className={styleSelect.item_link} to="/dialogs">Messages</Link>
        </li>
        <li className={styleSelect.item}>
          <a className={styleSelect.item_link} href="#">News</a>
        </li>
        <li className={styleSelect.item}>
          <a className={styleSelect.item_link} href="#">Music</a>
        </li>
        <li className={styleSelect.item}>
         <a className={styleSelect.item_link} href="#">Settings</a>
        </li>
      </ul>
    </nav>
    );
}
    

export default Navbar;