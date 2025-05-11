import s from './HomePage.module.css';
import {useSelector} from "react-redux";
import {selectLoggedIn} from "../../redux/auth/selectors.js";
import {Navigate, useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);

    const NavigateTo = () => {
        navigate(isLoggedIn ? '/contacts' : '/login');
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-[900px]">
                    <h1 className="text-5xl font-bold ">Welcome to your personal contact list!</h1>
                    <p className="py-6">
                        Store, edit, and manage your contacts easily and quickly.
                        Click "Get Started" to get started.
                    </p>
                    <button className={s.btn} onClick={NavigateTo}>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;