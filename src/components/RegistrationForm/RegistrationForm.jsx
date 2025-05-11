import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../../redux/auth/operations.js";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
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

function RegistrationForm() {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    }
    return (
        <div className="hero min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <div className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold">Register</h1>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={FeedbackSchema}>
                        <Form>
                            <fieldset className="fieldset">
                                <div className={s.formItem}>
                                    <label className="label">Name</label>
                                    <Field name='name' type="name" className="input" placeholder="Name"/>
                                    <ErrorMessage name="name" component="span" />
                                </div>
                                <div className={s.formItem}>
                                    <label className="label">Email</label>
                                    <Field name='email' type="email" className="input" placeholder="Email"/>
                                    <ErrorMessage name="email" component="span" />
                                </div>
                                <div className={s.formItem}>
                                    <label className="label">Password</label>
                                    <Field name='password' type="password" className="input" placeholder="Password"/>
                                    <ErrorMessage name="password" component="span" />
                                </div>
                                <Link to='/login' className="link link-hover">
                                    You already have account? Sign in!
                                </Link>
                                <button type='submit' className="btn btn-neutral mt-4 hover:bg-accent-content">
                                    Register
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

export default RegistrationForm;