import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default function Filter({filter, onFilter}) {
    
    const handleChange = ({target}) => {
        onFilter(target.value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="filter_1">Find contacts by name</label><br/>
            <input type="text" name="filter" id="filter_1" value={filter}  onChange={handleChange} />
        </form>
    );
}