import message from './Message.module.css'

const Message = (props)=>{

    return(
        <div className={message.dialog}>
       {props.message}
    </div>
    )
}

export default Message;