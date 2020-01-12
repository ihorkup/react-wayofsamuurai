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

    let dialogs = [
        { id: "1", name: "Ihor" },
        { id: "2", name: "Maria" },
        { id: "3", name: "Nika" },
    ]

    let messages = [
        { id: "1", message: "Hdvsmdnvkjdi" },
        { id: "2", message: "How old are you?" },
        { id: "3", message: "Where xbdvndkfjnvdfkjvndkjv you from?" },
        { id: "4", message: "I love you" }
    ]

    let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;