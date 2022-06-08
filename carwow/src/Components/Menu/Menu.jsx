import s from "./Menu.module.css";
import Item from "../Item/Item";

const Menu = (props) => {
    return (
        <nav>
            <ul className={s.menu}>
                <Item />
            </ul>
        </nav>
    )
}

export default Menu;