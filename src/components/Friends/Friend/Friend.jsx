import React from 'react';
import s from './../Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {

    let path = "/friends/" + props.id

    return (
        <div className={s.friend}>
            <img src={props.src} />
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default Friend;