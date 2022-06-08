import s from './Lang.module.css';

const Lang = () => {
    return (
        <ul className={s.lang}>
            <li><a href="#">Ukr</a></li>
            <li><a href="#">En</a></li>
            <li><a href="#">Ru</a></li>
        </ul>
    )
}

export default Lang;