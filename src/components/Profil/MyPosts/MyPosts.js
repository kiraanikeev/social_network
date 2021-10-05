import myPosts from "./MyPosts.module.css"
import posts from './Posts.mobule.css'
import Post from './Post/Post'
import React from 'react'

function MyPosts(props){


   

    const postElem= props.posts.map(el=>(<Post message={el.message} likesCount={ ' ' +  el.likesCounter} />))
 let newPostElement = React.createRef();
 let addPost = ()=>{
    //  let text = newPostElement.current.value;
     props.addPost();
    //  newPostElement.current.value = "";
 }

 let onPostChange=()=>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
 }


    return(

        <div className={myPosts.myPosts}>
<h1>MyPosts</h1>
<div>
<textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}></textarea>

</div>
<button onClick={addPost}>Add post</button>



<div className={posts.posts}>
{postElem}
</div>
        </div>

     
    )
}
export default MyPosts;