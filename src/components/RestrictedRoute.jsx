import {selectLoggedIn} from "../redux/auth/selectors.js";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function RestrictedRoute({component, redirectTo = '/'}) {
    const isLoggedIn = useSelector(selectLoggedIn);
    if (isLoggedIn) {
        return <Navigate to={redirectTo}/>
    }
    return component;

    // return isLoggedIn
    //     ? <Navigate to={redirectTo}/>
    //     : component;
}

export default RestrictedRoute;