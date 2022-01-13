import * as axios from "axios";
import React from "react";
import dialogeReducer from "../../data/dialogeReducer";
import styles from './users.module.css'
const Users = (props)=>{
  

if (props.users.length === 0) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
 .then(response=>{
     props.setUsers(response.data.items);
     props.setUsersTotalCount(response.data.totalCount)

 })}

 let pageCount = Math.ceil(props.totalUserCounter / props.pageSize);
let pages =[];
for(let i=1; i<=pageCount && i<=10; i++){
    pages.push(i);
}
let onPageChanged=(pageNumber)=>{
    props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
 .then(response=>{

     props.setUsers(response.data.items);

 })
}

    return(

       <div>
           <div>
            {/* {props.isFetching ? <img src=''/> : null} */}
      
               {pages.map(item=>{ 
               return <span className={styles.stylePage, props.currentPage === item && styles.selectedPage} 
 
               onClick={()=>{onPageChanged(item)}}>{item}</span>
               })}
  
           </div>
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