import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name="Ihor" id="1"/>
                <Dialog name="Maria" id="2"/>
                <Dialog name="Nika" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How old are you?" />
                <Message message="Where are you from?" />
                <Message message="I love you" />
            </div>
        </div>
    );
}

export default Dialogs;