import React, { useMemo, useState } from 'react';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

import useLocalStorage from './../hooks/useLocalStorage';


export default function App(){
    const [filter, setFilter] = useState('');
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    console.log(contacts)

    const findName = (name) => {
        return contacts.find((contact) => {
            return contact.name === name
        })
    }

    const addContact = (newContact) => {
        setContacts(prevContacts => ([...prevContacts, newContact] ))
    }

    const removeContactId = (id) => {
        setContacts(prevContacts => ([...prevContacts.filter(contact => contact.id !== id)]));
    }

    // const updateFilter = (filter) =>{
    //     setFilter(filter);
    // }

    const filterContacts = useMemo(()=>{
        return contacts.filter(contact => contact.name.toLowerCase().startsWith(filter.toLowerCase()))
    }, [filter, contacts])


    return (
        <>   
            <h2>Phonebook</h2>
            <ContactForm onFindName={findName} onAddContact ={addContact} />

            <h2>Contacts</h2>
            <Filter filter={filter} onFilter={(state) => setFilter(state)} />
            <ContactList contacts={filterContacts} removeContactId={removeContactId}/> 
        </>
    );
}
