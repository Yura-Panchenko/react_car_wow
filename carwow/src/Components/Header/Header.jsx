import React from "react";
import s from"./Header.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Lang from "../Lang/Lang";

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header_holder}>
                    <Logo />
                    <div className={s.header_box}>
                        <Lang />
                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;