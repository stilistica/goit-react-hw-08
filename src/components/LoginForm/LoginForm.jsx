import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth/operations.js";
import * as Yup from "yup";
import s from "../RegistrationForm/RegistrationForm.module.css";

const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    password: Yup.string()
        .min(4, "Too Short!")
        .max(18, "Too Long!")
        .required("Required"),
});

function LoginForm() {
    const dispatch = useDispatch();
    const initialValues = {
        email: "",
        password: "",
    }
    const handleSubmit = (values, actions) => {
        dispatch(login(values));
        actions.resetForm();
    }
    return (
        <div className="hero min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold">Login</h1>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={FeedbackSchema}>
                        <Form>
                            <fieldset className="fieldset">
                                <div className={s.formItem}>
                                    <label className="label">Email</label>
                                    <Field name='email' type="email" className="input" placeholder="Email"/>
                                    <ErrorMessage name="email" component="span"/>
                                </div>
                                <div className={s.formItem}>
                                    <label className="label">Password</label>
                                    <Field name='password' type="password" className="input" placeholder="Password"/>
                                    <ErrorMessage name="password" component="span"/>
                                </div>
                                <Link to='/register' className="link link-hover">
                                    You don't have account? Sign up!
                                </Link>
                                <button type='submit' className="btn btn-neutral mt-4 hover:bg-accent-content">
                                    Login
                                </button>
                            </fieldset>
                        </Form>
                    </Formik>
                    <div className="divider divider-neutral"></div>
                    <Link to='/' className='text-lg text-center hover:text-success'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;