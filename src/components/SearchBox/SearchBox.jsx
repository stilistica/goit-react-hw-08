import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";
import {selectNameFilter} from "../../redux/filters/selectors.js";

function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const filtersContacts = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.container}>
      <p>Find contacts by name or number</p>
      <input
        type="text"
        value={value}
        onChange={filtersContacts}
        className={s.input}
      />
    </div>
  );
}

export default SearchBox;
