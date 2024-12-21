import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

import PhoneBook from './phoneBook.json'
import { useState, useEffect } from "react";
const App = () => {

  const [book, setBook] = useState(() => {
      const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : PhoneBook
    });

  const [filter, setFilter] = useState('');

 useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(book));
    }, [book]);

  const addPhoneBook = (NewPhoneBook) => {
    setBook((prevBook) => {
      return [...prevBook, NewPhoneBook];
    });
  };

  const deletePhoneBook = (id) => {
    setBook((prevBook) => prevBook.filter((contact) => contact.id !== id));
  };

  const visibleBook = book.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onPhoneBook={ addPhoneBook} />
      <SearchBox value = {filter} onFilter={setFilter} />
      <ContactList book={visibleBook} onDelete={deletePhoneBook} />
    </div>
  )
}

export default App
