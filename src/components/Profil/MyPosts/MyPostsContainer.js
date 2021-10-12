import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../data/profileReducer"

let mapStateToprops = (state) =>{

    return{
     profilePage: state.profilePage
    }
}

let mapDispatchToProps =(dispatch)=>{

    return{
        updateNewPostText:(text)=>{
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}




const MyPostsContainer = connect(mapStateToprops, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;