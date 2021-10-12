const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const DELETE_MESSAGE ="DELETE_MESSAGE";


let initialState = {  
dialogs:[
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Kirill'},
    {id: 4, name: 'Gubadiya'},
    {id: 5, name: 'Petya'},
    {id: 6, name: 'Chyvak'},
],
messages:[
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Privet'},
    {id: 3, message: 'How are you&'},
    {id: 4, message: 'Cannot complaine'},
    {id: 5, message: 'Andyou&'},
],
newMessageBody: ''}

const dialogeReducer = (state = initialState, action)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
         case DELETE_MESSAGE:
                 state.messages.pop();   
                return {...state}
        default:
            return state;

}
}
export const sendMessageCreator =()=>({
    type: SEND_MESSAGE});
export const updateNewMessageBodyCreator =(body)=> 
({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export const deleteCertenMessage =()=>
    ({type: DELETE_MESSAGE});

export default dialogeReducer;