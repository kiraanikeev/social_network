import { combineReducers, createStore } from "redux";
import dialogeReducer from "./dialogeReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReduser";

//ветки стейта
let redusers = combineReducers({
profilePage: profileReducer,
dialogePage: dialogeReducer,
sidebar: sidebarReducer,
usersPage: usersReducer

});

//создаем редаксовский стор
let store = createStore(redusers);

export default store;