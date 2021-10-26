import myPosts from "./MyPosts.module.css"
import posts from './Posts.mobule.css'
import Post from './Post/Post'
import React from 'react'


function MyPosts(props){


   let state = props.profilePage;

    const postElem= state.posts.map(item=>(<Post key={item.id} message={item.message} likesCount={ ' ' +  item.likesCounter} />))
 let newPostText = state.newPostText;


 let addPost = ()=>{
     props.addPost();
 }

 let onPostChange=(e)=>{
    let text = e.target.value;
    props.updateNewPostText(text);
 }

    return(

        <div className={myPosts.myPosts}>
<h1>MyPosts</h1>
<div>
<textarea onChange={onPostChange} 
 value={newPostText}></textarea>

</div>
<button onClick={addPost}>Add post</button>



<div className={posts.posts}>
{postElem}
</div>
        </div>

     
    )
}
export default MyPosts;