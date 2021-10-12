import React from "react";
import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../data/usersReduser";
import Users from "./Users";
//функция mapStateToProps которая принимает весь
// state целиком и возвращает обьект только с теми данными 
//которые нам в state нужны
let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users
    }
}
//  mapDispatchToProps служит чтобы передавать 
//презинтационной компаненте через пропсы, колбеки
let mapDispatchToProps=(dispatch)=>{
    return{
follow: (userId)=>{
    dispatch(followActionCreator(userId))
},
unfollow: (userId)=>{
    dispatch(unfollowActionCreator(userId))
},
setUsers: (users)=>{
    dispatch(setUsersActionCreator(users))
}
    }
}
// export default connectAdvanced (mapStateToProps, mapDispatchToProps)(Users);
export default connect(mapStateToProps, mapDispatchToProps)(Users);