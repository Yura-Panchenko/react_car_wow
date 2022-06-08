import s from "./Menu.module.css";
console.log(s);
const Menu = () => {
    return (
        <ul className={s.menu}>
            <li className={`${s.item} ${s.active}`}><a href="#">item-1</a></li>
            <li className={s.item}><a href="#">item-2</a></li>
            <li className={s.item}><a href="#">item-3</a></li>
        </ul>
    )
}

export default Menu;