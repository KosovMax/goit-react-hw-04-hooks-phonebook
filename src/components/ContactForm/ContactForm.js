import React, { Component, useState } from 'react';
import './ContactForm.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const INITIAL_STATE = {
    name:"",
    phone:""
}

export default function ContactForm({ onFindName, onAddContact }) {

    const [state, setState] = useState({...INITIAL_STATE})
    const {name, phone} = state;


    const handleChange = ({target}) => {
        const { name, value } = target;
        
        setState(prevState => ({...prevState, [name]:value}))
    }

    const handleSubmit = evt =>{
        evt.preventDefault();


        if(!name || !phone){
            toast.error("Name or phone filed is empty.", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false; 
        }

        if( onFindName(name) != null){
            toast.warn(name + ' is already in contacts.', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }

        onAddContact({id:uuidv4(), name:name, phone:phone});

        reset();
    }


    const reset = () => {
        setState({ ...INITIAL_STATE });
    };

    return (
        <>
        <form className="phonebook" onSubmit={handleSubmit}>
            <label htmlFor="name_1">Name</label><br/>
            <input type="text" name="name" id="name_1" value={name} onChange={handleChange}/>
            <br/>
            <label htmlFor="phone_1">Number</label><br/>
            <input type="tel" name="phone" id="phone_1" value={phone} onChange={handleChange}/>
            <br/>
            <br/>
            <button type="submit">Add contact</button>
        </form>
        <ToastContainer />
        </>

    );
    
}

ContactForm.defaultProps = {
    contacts:[],
    onFindName:()=>{}, 
    onAddContact:()=>{}
}

ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
    onFindName:PropTypes.func, 
    onAddContact:PropTypes.func
}

// export default class ContactForm extends Component{

//     state={
//         ...INITIAL_STATE
//     }

//     handleChange = ({target}) => {
//         const { name, value } = target;
//         this.setState({ [name] : value })
//     }

//     handleSubmit = evt => {
//         evt.preventDefault();

//         const { onFindName, onAddContact } = this.props;
//         const { name, phone } = this.state;

//         if(!name || !phone){
//             alert('Name or phone filed is empty.');
//             return false; 
//         }

//         if( onFindName(name) != null){
//             alert(name + ' is already in contacts.');
//             return false;
//         }


//         onAddContact({id:uuidv4(), name:name, phone:phone});

//         this.reset();

//     }

//     validName = (name) => {
//         const { contacts } = this.props;
//         return contacts.filter((contact) => {
//             return contact.name === name
//         })
//     }

//     reset = () => {
//         this.setState({ ...INITIAL_STATE });
//     };

//     render(){

//         const { name, phone } = this.state;
//         return (
            
//             <form className="phonebook" onSubmit={this.handleSubmit}>
//                 <label htmlFor="name_1">Name</label><br/>
//                 <input type="text" name="name" id="name_1" value={name} onChange={this.handleChange}/>
//                 <br/>
//                 <label htmlFor="phone_1">Number</label><br/>
//                 <input type="tel" name="phone" id="phone_1" value={phone} onChange={this.handleChange}/>
//                 <br/>
//                 <br/>
//                 <button type="submit">Add contact</button>
//             </form>

//         );

//     }
// }