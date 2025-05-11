import s from './AuthNav.module.css'
import {NavLink} from "react-router-dom";
import clsx from "clsx";

function AuthNav() {
    return (
        <div>
            <NavLink to='/login' className={s.link}>
                Login
            </NavLink>
            <NavLink to='/register' className={s.link}>
                Register
            </NavLink>
        </div>
    );
}

export default AuthNav;