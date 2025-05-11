import s from "./Contact.module.css";
import { GrUserManager } from "react-icons/gr";
import { RiPhoneLine } from "react-icons/ri";
import ModalDelete from "../ModalDelete/ModalDelete.jsx";
import ModalChange from "../ModalChange/ModalChange.jsx";

function Contact({ contact: { id, name, number } }) {
  return (
      <div className={s.container}>
          <div className={s.info}>
              <p>
                  <GrUserManager/> {name}
              </p>
              <p>
                  <RiPhoneLine/> {number}
              </p>
          </div>
          <div className={s.buttons}>
              <button onClick={() => document.getElementById(`my_modal_${id}`).showModal()} className={s.btn}>Change
              </button>
              <button onClick={() => document.getElementById('my_modal_5').showModal()} className={s.btn}>
                  Delete
              </button>
          </div>
          <ModalDelete id={id} name={name}/>
          <ModalChange id={id} name={name} number={number} dialogId={`my_modal_${id}`}/>
      </div>
  );
}

export default Contact;
