let store = {
    _state : {
        profilePage:{
            posts:[
                {id: 1, message: 'gssgfsfsg', likesCounter:12},
                {id: 2, message: 'gwrwrg', likesCounter:2},
                {id: 3, message: 'vxxxxfsg', likesCounter:19},
                {id: 4, message: 'vvv333gfsfsg', likesCounter:54}
            ],
            newPostText: 'text'
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
            ]
        },
        sidebar: {}
        },
  _callsubscriber(){     
       console.log('_callsubscriber');
        },
  getState(){
            return this._state
        },
  addPost (){
            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callsubscriber(this._state);
        },
  updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callsubscriber(this._state);
        },
  subscribe(observer){
            this._callsubscriber = observer;
        }
}


window.store = store;
export default store;