import React from 'react';
import dialogs from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogePage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onDeletePreviousMessage =()=>{
        props.deleteMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log('body',body)
        props.updateNewMessageBody(body);
    }

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dealogsItems}>
                { dialogsElements }
            </div>
            <div className="messages">
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                    <div><button onClick={onDeletePreviousMessage}>Delete previous message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;