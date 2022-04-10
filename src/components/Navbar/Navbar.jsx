import React from "react"
import styleSelect from "./Navbar.module.css";

const Navbar = () => {
    return (
    <nav className={styleSelect.nav}>
      <ul>
        <li className={styleSelect.item}><a className={styleSelect.item_link} href="/main">Profile</a></li>
        <li className={styleSelect.item}><a className={styleSelect.item_link} href="/dialogs">Messages</a></li>
        <li className={styleSelect.item}><a className={styleSelect.item_link} href="#">News</a></li>
        <li className={styleSelect.item}><a className={styleSelect.item_link} href="#">Music</a></li>
        <li className={styleSelect.item}><a className={styleSelect.item_link} href="#">Settings</a></li>
      </ul>
    </nav>
    );
}
    export default Navbar;