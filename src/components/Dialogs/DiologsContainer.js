
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator, deleteCertenMessage} from "../../data/dialogeReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogePage: state.dialogePage
     
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        deleteMessage: ()=>{
            dispatch(deleteCertenMessage())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;