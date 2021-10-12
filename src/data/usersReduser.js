const FOLLOW ='FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ="SET_USERS"
let initialState = {
    users:[
        {id: 1, followed: false, fullname: 'Kirill', status:'I am a boss', location:{city:'Kazan', country:'Russia'}},
        {id: 2, followed: false, fullname: 'Dmitry', status:'I am a friend', location:{city:'Minsk', country:'Belarus'}},
        {id: 3, followed: true, fullname: 'Katya', status:'I am a wife', location:{city:'Zelenodolsk', country:'Russia'}},
        {id: 4, followed: true, fullname: 'Nadin', status:'I am a chaild', location:{city:'Halifax', country:'Canada'}},
    ]

}

const usersReducer = (state = initialState, action)=>{
switch(action.type){
   case FOLLOW:
   return{
    ...state,
    //  users:[...state.users], //копирует всех юзеров
    //копируем юзеров с изменением followed
     users:state.users.map(user=>{
         if(user.id === action.userId){
             return{...user, followed:true}
         }
         return user;    
     }),
    }
   case UNFOLLOW:
    return{
        ...state,
         users:state.users.map(user=>{
             if(user.id === action.userId){
                 return{...user, followed:false}
             }
             return user;    
         }),
        }
    case SET_USERS:
        return{
            //берем старый стейт, копируем и перезатераем 
            //их юзерами которые пришли в экшене
            ...state, users:[ ...state.users, ...action.users]
        }
        default:
            return state;
}
}

    export const followActionCreator =(userId)=>
      ({type: FOLLOW, userId});
    export const unfollowActionCreator =(userId)=> ({
       type: UNFOLLOW, userId});
    export const setUsersActionCreator =(users)=> ({
       type: SET_USERS, users});

export default usersReducer;