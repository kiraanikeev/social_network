import { NavLink } from "react-router-dom";
import dialogItem from "./DialogItem.module.css";
const DialogItem = (props)=>{
    const path = '/dialogs/' + props.id;

    return (
     <div className={`${dialogItem.dialog} ${dialogItem.active}`}>
    <NavLink className={dialogItem.links} to={path}>{props.name}</NavLink> </div>)
     {/* props.data.map(item=><NavLink to={path}</div>) */}

}
export default DialogItem