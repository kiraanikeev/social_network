import dialogs from "./dialogs.module.css"
import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props){
console.log('props' , props.dialogePage.messages)


    const dialogsElement = props.dialogePage.dialogs.map(el=>(<DialogItem name={el.name} id={el.id}/>))
    const messageElement = props.dialogePage.messages.map(el=>(<Message message={el.message} id={el.id} />))
  



    return(
        <div className={dialogs.dialogs}>

          <div className={dialogs.dealogsItems}> 
          {dialogsElement}
                </div>
          
        <div className="messages">
            {messageElement}
          </div>
          

           </div>
    )
}
export default Dialogs;