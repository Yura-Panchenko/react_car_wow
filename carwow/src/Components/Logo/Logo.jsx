import s from './Logo.module.css';

const Logo = () => {
    return (
        <div className={s.logo}>
            <a href="#">
                <img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png" alt="logo" width="120"/>
            </a>
        </div>
    )
}

export default Logo;