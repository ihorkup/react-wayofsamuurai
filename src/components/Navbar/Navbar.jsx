import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sitebar from './Sitebar/Sitebar';

const Navbar = (props) => {

    let friendsElements = props.state.friends.map(d => <Sitebar name={d.name} id={d.id} src={d.src} />)

    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink> {/*NavLink - змінює URL без перезавантаження сторінки, працює як посилання*/}
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/media" activeClassName={s.active}>Media</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <p> </p>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            </div>
            <div className={s.sitebar}>                
                {friendsElements}
            </div>
        </div>
    );
}

export default Navbar;