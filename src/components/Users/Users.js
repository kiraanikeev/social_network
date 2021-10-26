import * as axios from "axios";
import React from "react";
import dialogeReducer from "../../data/dialogeReducer";
import styles from './users.module.css'
const Users = (props)=>{
  
    let getUsers =()=>{
if (props.users.length === 0) {
 axios.get('https://social-network.samuraijs.com/api/1.0/users')
 .then(response=>{
     props.setUsers(response.data.items);


 })}}
    return(

       <div>
           <button onClick={getUsers}>GetUsers</button>
           {
props.users.map(item=><div key={item.id}>
<span>
    <div>
        <img src={item.photoUrl} className={styles.userPhoto}/>
    </div>
    <div>
        {item.followed 
        ? <button onClick={()=>
        props.unfollow(item.id)}>Unfollow</button> 
        : <button onClick={()=>
            props.follow(item.id)}>Follow</button>}
  
    </div>
</span>
<span>
<span>
    <div>{item.name}</div>
    <div>{item.status}</div>
</span>
<span>
    <div>{'item.location.country'}</div>
    <div>{'item.location.city'}</div>
</span>
</span>


</div>)}

        </div>
    )
}

export default Users;