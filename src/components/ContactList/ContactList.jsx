import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import {
    selectError,
    selectLoading,
} from "../../redux/contacts/selectors.js";
import {selectFilteredContacts} from "../../redux/filters/selectors.js";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
      <div>
        <ul className={s.contactsList}>
          {visibleContacts.map((contact) => (
              <li key={contact.id}>
                <Contact contact={contact}/>
              </li>
          ))}
        </ul>
        {loading && <h2>Loading..</h2>}
        {error && <h2>Server is dead</h2>}
      </div>
  );
}

export default ContactList;
