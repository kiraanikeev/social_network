import dialogeReducer from "./dialogeReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReduser from "./usersReduser"
let store = {
    _state : {
        profilePage:{
            posts:[
                {id: 1, message: 'gssgfsfsg', likesCounter:12},
                {id: 2, message: 'gwrwrg', likesCounter:2},
                {id: 3, message: 'vxxxxfsg', likesCounter:19},
                {id: 4, message: 'vvv333gfsfsg', likesCounter:54}
            ],
            newPostText: ''
        },
        dialogePage:{
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
            newMessageBody: ''
        },
        sidebar: {}
        },
        
  _callsubscriber(){     
       console.log('_callsubscriber');
        },

  getState(){
            return this._state
        },
  subscribe(observer){
            this._callsubscriber = observer;
        },

 dispatch(action){

            this._state.profilePage = profileReducer( this._state.profilePage, action);
            this._state.dialogePage = dialogeReducer(this._state.dialogePage, action);
            this._state.sidebar = sidebarReducer( this._state.sidebar, action);
            this._callsubscriber(this._state);

}}




window.store = store;
export default store;