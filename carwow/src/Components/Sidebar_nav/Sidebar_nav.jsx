import s from './Sidebar_nav.module.css';
import Item from '../Item/Item';

const SidebarNav = () => {
    return (
        <ul className={s.menu}>
            <Item url="#" text="item" />
            <Item url="#1" text="item 2" />
            <Item url="#2" text="item 3" />
            <Item url="#3" text="item 4" />
            <Item url="#4" text="item 5" />
        </ul>
    )
}

export default SidebarNav;