import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
    <header className={s.header}>
        {/* <img src='https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png'/> */}
        <img src={ require('./logo-w.png') } />
    </header>
    );
}

export default Header;