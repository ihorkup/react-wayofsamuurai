import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <img src={props.src} />
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;