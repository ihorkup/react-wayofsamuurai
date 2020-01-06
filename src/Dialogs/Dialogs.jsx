import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.allMessages}>
            <div className={s.dialogs}>
                <div className={s.dialogItem + ' ' + s.active}>
                    Ihor
                </div>
                <div className={s.dialogItem}>
                    Lera
                </div>
                <div className={s.dialogItem}>
                    Vova
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>What is your name?</div>
            </div>
        </div>
    );
}

export default Dialogs;