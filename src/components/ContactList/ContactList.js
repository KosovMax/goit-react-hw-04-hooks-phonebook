import React from 'react';
import  PropTypes from 'prop-types';

export default function ContactList({ filter, contacts, removeContactId }){
    return(
            <ul>
                {
                    contacts.filter(contact => {
                        return contact.name.toLowerCase().startsWith(filter.toLowerCase());
                    }).map(({id, name, phone}) => (
                        <li key={id}><span> {name}: {phone} </span><button onClick={()=>{removeContactId(id)}}>Delete</button> </li>
                    ))
                }
            </ul>
    )
}

ContactList.defaultProps = {
    filter:'',
    contacts:[],
    removeContactId:() =>{}
}
ContactList.propTypes = {
    filter:PropTypes.string.isRequired,
    contacts:PropTypes.array.isRequired,
    removeContactId:PropTypes.func
}