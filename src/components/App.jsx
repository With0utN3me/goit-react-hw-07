import './App.css'
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from "./ContactForm/ContactForm"
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { selectNameFilter } from '../redux/filtersSlice';

const getVisibleContacts = (contacts, nameFilter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
}

const App = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
  {visibleContacts.length === 0 ? (
    contacts.length !== 0 ? (
      <Notification text = {"There are no contacts matching your request."}/>) :
      <>
        <Notification text = {"There are no contacts yet, but you can add new one's!"}/>
      </>
    ) : <ContactList/>
}
    </div>)
}
export default App;

