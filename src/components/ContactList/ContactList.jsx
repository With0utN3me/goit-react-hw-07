import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { useSelector } from 'react-redux';
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (contacts, nameFilter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
}

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter);
    const visibleContacts = getVisibleContacts(contacts, nameFilter);

    return(<ul className={css["contacts-list"]}>
        {visibleContacts.map(contact => {
            return(
                <li className={css["list-item"]} key={contact.id}>
                    <Contact 
                    name = {contact.name}
                    number = {contact.number}
                    id = {contact.id}
                    />
                </li>
            )
        })}
    </ul>)
}
export default ContactList;