import nav from "./nav.module.css"
import { NavLink } from "react-router-dom";

function Nav(){



    return(

        <div className={nav.nav}>
<NavLink to="/profil"  className={nav.nav_a} activeClassName={nav.active}>Ptofile</NavLink>
<NavLink to="/dialogs" className={nav.nav_a} activeClassName={nav.active}>Messages</NavLink>

<a className={nav.nav_a}>News</a>
<a className={nav.nav_a}>Music</a>
<a className={nav.nav_a}>Settings</a>
        </div>
    )
}
export default Nav;