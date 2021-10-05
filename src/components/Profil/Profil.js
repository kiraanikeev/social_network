import MyPosts from "./MyPosts/MyPosts"
import profil from "./profil.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

function Profil(props){



    return(

        <div className={profil.profil}>
<h1>Profil</h1>
<ProfileInfo/>
<MyPosts posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profil;