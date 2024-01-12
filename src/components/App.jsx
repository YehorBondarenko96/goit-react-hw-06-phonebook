import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from './Styles.module.css';
import { useState, useEffect } from "react";

export const App = () => {

  const contactsLS = localStorage.getItem('contacts');
  const valueContacts = contactsLS ? JSON.parse(contactsLS) : [];
  
  const [contacts, setContacts] = useState(valueContacts);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  


  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#010101',
        margin: 20
      }}
    >
      <div>
  <h1 className={css.phonebook}>Phonebook</h1>
  <ContactForm />

  <h2 className={css.contacts}>Contacts</h2>
  <Filter />
  <ContactList />
</div>
    </div>
  )
};