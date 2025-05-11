import AppBar from "./AppBar/AppBar.jsx";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <AppBar/>
            <Outlet/>
        </>
    );
}

export default Layout;