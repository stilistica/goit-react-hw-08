import React from 'react';
import s from "../Contact/Contact.module.css";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contacts/operations.js";
import toast from "react-hot-toast";

function ModalDelete({name, id}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
        toast.success("Contact deleted successfully.");
    };
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                {/*<h3 className="font-bold text-lg">Hello!</h3>*/}
                <p className="py-4">Are you sure you want to delete the contact {name}?</p>
                <div className="modal-action">
                    <button onClick={handleDelete} className={s.btn}>Yes</button>
                    <form method="dialog">
                        <button className={s.btn}>No</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ModalDelete;