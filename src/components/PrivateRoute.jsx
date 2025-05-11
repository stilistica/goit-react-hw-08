import {useSelector} from "react-redux";
import {selectLoggedIn} from "../redux/auth/selectors.js";
import toast from "react-hot-toast";
import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
    const isLoggedIn = useSelector(selectLoggedIn);

    if (!isLoggedIn) {
        toast.error('This private page for logged users');
        return <Navigate to='/login'/>
    }
    return children;
}

export default PrivateRoute;