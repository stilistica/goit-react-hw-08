import s from './ContactsPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchContacts} from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import {selectError, selectLoading} from "../../redux/contacts/selectors.js";

function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm/>
            <SearchBox/>
            <ContactList/>
            {isLoading && <span className="loading loading-spinner loading-lg"></span>}
            {isError && <div>
                <label className="swap text-6xl">
                    <div className="swap-off">🥶</div>
                </label>
                Server is dead..</div>}
        </>
    );
}

export default ContactsPage;