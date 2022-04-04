import React from "react";
import styleSelect from "./Header.module.css";

const Header = () => {
    return (
        <header className={styleSelect.header}>
            <img className={styleSelect.header_logo} src="https://media.lpgenerator.ru/uploads/2019/07/11/1_thumb600x460.jpg" />
        </header>
    )
}


export default Header;