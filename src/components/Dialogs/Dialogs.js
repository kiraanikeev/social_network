import dialogs from "./dialogs.module.css"
import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props){

    let dialigsData =[
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Kirill'},
        {id: 4, name: 'Gubadiya'},
        {id: 5, name: 'Petya'},
        {id: 6, name: 'Chyvak'},
    ]
    let messagesData =[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Privet'},
        {id: 3, message: 'How are you&'},
        {id: 4, message: 'Cannot complaine'},
        {id: 5, message: 'Andyou&'},
       
    ]

    const dialogsElement = dialigsData.map(el=>(<DialogItem name={el.name} id={el.id}/>))
    const messageElement = messagesData.map(el=>(<Message message={el.message} id={el.id} />))

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