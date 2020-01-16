import React, {createRef} from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id} src={d.src} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let messageInputRef = React.createRef();

    let newMessage = () => {
        let textMessage = messageInputRef.current.value;
        alert(textMessage);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div className={s.areaInputMessage}>
                    <textarea ref={messageInputRef} className={s.areaInputText}></textarea>
                    <div>
                        <button onClick={newMessage} className={s.buttonSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;