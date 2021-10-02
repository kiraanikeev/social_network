import MyPosts from "./MyPosts/MyPosts"
import profil from "./profil.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

function Profil(){



    return(

        <div className={profil.profil}>
<h1>Profil</h1>
<ProfileInfo/>
<MyPosts/>
        </div>
    )
}
export default Profil;