import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (<div className={s.message}>{(props.id % 2 == 1) ? <div id={s.admin}>{props.message}</div> : <div id={s.user}>{props.message}</div>}</div>)
}

export default Message;