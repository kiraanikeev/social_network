const Post = (props)=>{

    return(
        <div>
       {props.message}{ props.likesCount}
    </div>
    )
}

export default Post;