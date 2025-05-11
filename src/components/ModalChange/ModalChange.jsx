import {ErrorMessage, Field, Form, Formik} from "formik";
import s from './ModalChange.module.css'
import * as Yup from "yup";
import {useId} from "react";
import {useDispatch} from "react-redux";
import {changeContact} from "../../redux/contacts/operations.js";
import toast from "react-hot-toast";

const FeedbackSchema = Yup.object().shape({
    contactName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    contactNumber: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});


function ModalChange({id, name, number, dialogId}) {
    const nameFormId = useId();
    const numberFormId = useId();
    const dispatch = useDispatch();

    const initialValues = {
        contactName: name || '',
        contactNumber: number || '',
    };

    const handleSubmit = (values, actions) => {
        dispatch(
            changeContact({
                id,
                newData: {
                    name: values.contactName,
                    number: values.contactNumber,
                },
            })
        );
        toast.success('Contact changed successfully');

        actions.resetForm();
        document.getElementById(dialogId)?.close();
    };

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box w-[400px]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={FeedbackSchema}
                    enableReinitialize={true}
                >
                    <Form className={s.form}>
                        <div className={s.formItem}>
                            <label htmlFor={nameFormId} className={s.nameForm}>New name</label>
                            <Field type="text" name="contactName" id={nameFormId} />
                            <ErrorMessage name="contactName" component="span" />
                        </div>

                        <div className={s.formItem}>
                            <label htmlFor={numberFormId} className={s.nameForm}>New number</label>
                            <Field type="tel" name="contactNumber" id={numberFormId} />
                            <ErrorMessage name="contactNumber" component="span" />
                        </div>

                        <button type="submit" className={s.btn}>
                            Change contact
                        </button>
                    </Form>
                </Formik>
            </div>
        </dialog>
    );
}

export default ModalChange;