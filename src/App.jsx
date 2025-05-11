import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {lazy, Suspense, useEffect} from "react";
import {refreshUser} from "./redux/auth/operations.js";
import {selectRefreshing} from "./redux/auth/selectors.js";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import {Toaster} from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

import PrivateRoute from "./components/PrivateRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? null : (
      <>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="/contacts" element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }/>
            </Route>
            <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>}/>
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo='/contacts'/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
        <Toaster position="top-center" reverseOrder={false} />
      </>
  )
}

export default App;
