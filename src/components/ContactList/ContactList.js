import React from 'react';
import  PropTypes from 'prop-types';

export default function ContactList({ contacts, removeContactId }){
    return(
            <ul>
                {
                    contacts.map(({id, name, phone}) => (
                        <li key={id}><span> {name}: {phone} </span><button onClick={()=>{removeContactId(id)}}>Delete</button> </li>
                    ))
                }
            </ul>
    )
}

ContactList.defaultProps = {
    contacts:[],
    removeContactId:() =>{}
}
ContactList.propTypes = {
    contacts:PropTypes.array.isRequired,
    removeContactId:PropTypes.func
}