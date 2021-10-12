const ADD_POST =' ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState= {
    posts:[
        {id: 1, message: 'gssgfsfsg', likesCounter:12},
        {id: 2, message: 'gwrwrg', likesCounter:2},
        {id: 3, message: 'vxxxxfsg', likesCounter:19},
        {id: 4, message: 'vvv333gfsfsg', likesCounter:54}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action)=>{
switch(action.type){
    case ADD_POST:
        let newPost={
            id:5,
            message: state.newPostText,
            likesCounter: 0
        };
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        };
     case UPDATE_NEW_POST_TEXT:
        return {
            ...state,
            newPostText: action.newText
        }
         default:
            return state;
}
}

    export const addPostActionCreator =()=>
    ({type: ADD_POST});
   export const updateNewPostTextActionCreator =(text)=> ({
       type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;