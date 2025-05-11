import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import clsx from "clsx";

function Navigation() {
    const setActiveLink = ({isActive}) => {
        return clsx(s.link, isActive && s.active)
    }

    return (
        <nav>
            <NavLink to='/' className={setActiveLink}>
                Home
            </NavLink>
            <NavLink to='/contacts' className={setActiveLink}>
                Contacts
            </NavLink>
        </nav>
    );
}

export default Navigation;