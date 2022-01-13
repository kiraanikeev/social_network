import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount } from "../../data/usersReduser";
import Users from "./Users";
//функция mapStateToProps которая принимает весь
// state целиком и возвращает обьект только с теми данными 
//которые нам в state нужны
let mapStateToProps = (state)=>{
    return{
    
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCounter: state.usersPage.totalUserCounter,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
//  mapDispatchToProps служит чтобы передавать 
// презинтационной компаненте через пропсы, колбеки
// let mapDispatchToProps=(dispatch)=>{
//     return{
// follow: (userId)=>{
//     dispatch(followActionCreator(userId))
// },
// unfollow: (userId)=>{
//     dispatch(unfollowActionCreator(userId))
// },
// setUsers: (users)=>{
//     dispatch(setUsersActionCreator(users))
// },
// setCurrentPage: (pageNumber)=>{
//     dispatch(setCurrentPageActionCreator(pageNumber))
// },
// setTotalUsersCount: (totalCount)=>{
//     dispatch(setUsersTotalCountActionCreator(totalCount))
// }
//     }
// }
export default connect(mapStateToProps,
{follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount})(Users);