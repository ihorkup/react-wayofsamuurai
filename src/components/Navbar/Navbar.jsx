import React from 'react';
import s from './Navbar.module.css';
// import Item from './Item/Item.jsx';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='media' activeClassName={s.active}>Media</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' activeClassName={s.active}>Music</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to='news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings' activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Navbar;