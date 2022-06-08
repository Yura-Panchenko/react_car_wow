import React from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import s from"./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <Menu />
        </header>
    )
}

export default Header;