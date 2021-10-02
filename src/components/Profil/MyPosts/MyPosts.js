import myPosts from "./MyPosts.module.css"
import posts from './Posts.mobule.css'
function MyPosts(props){


    const Post = (props)=>{

        return(
            <div>
           {props.message}{ props.likesCount}
        </div>
        )
    }

    let postData =[
        {id: 1, message: 'gssgfsfsg', likesCounter:12},
        {id: 2, message: 'gwrwrg', likesCounter:2},
        {id: 3, message: 'vxxxxfsg', likesCounter:19},
        {id: 4, message: 'vvv333gfsfsg', likesCounter:54}
    ]

    const postElem= postData.map(el=>(<Post message={el.message} likesCount={ ' ' +  el.likesCounter} />))
 


    return(

        <div className={myPosts.myPosts}>
<h1>MyPosts</h1>
<div>
<textarea></textarea>

</div>
<button>Add post</button>



<div className={posts.posts}>
{postElem}
    {/* <Post message={postData[0].message} likesCount={postData[0].likesCounter} />
    <Post message={postData[1].message} likesCount={postData[1].likesCounter} />
    <Post message={postData[2].message} likesCount={postData[2].likesCounter} /> */}
</div>
        </div>

     
    )
}
export default MyPosts;