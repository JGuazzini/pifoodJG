import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../actions/actions';
import './searchBar.css';



export default function SearchBar({setPage}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    function handleChange(e) {    
        setInput(e.target.value);
    };
    
    function handleSubmit(e) {
        
        e.preventDefault();    
        setPage(1)
        dispatch(getRecipesByName(input));
        setInput("")
    };

   

    return (
        <div className="search">
            <input type="text" className="searchInput" placeholder="Search recipe by name" value={input} onChange={e => handleChange(e)}/>
            <button className="btn1" type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )

};