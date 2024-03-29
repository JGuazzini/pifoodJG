import React from "react";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { getDietTypes, addRecipe } from '../actions/actions'
import './addRecipe.css';



function validate(input) {
    const errors = {};
    if (!input.name) errors.name = 'Complete with a recipe name';
    if (!input.summary) errors.summary = 'Add some comments about your recipe';
    if (input.healthScore < 1 || input.healthScore > 100) errors.healthScore = 'Only numbers between 1 and 100';
    if (!input.steps.length) errors.steps = 'Detail the steps for your recipe';
    if (!input.dietTypes.length) errors.dietTypes = 'You must select at least one diet type';
    return errors;
};


export default function AddRecipe() {
    const dispatch = useDispatch();
    const dietTypes = useSelector(state => state.dietTypes);
    const history = useHistory();
    const [errors, setErrors] = useState({})
    
    const [input, setInput] = useState({
        name: ''  ,
        summary: '',
        healthScore: '',
        steps: '',
        dietTypes: []
    })
    
    useEffect(() => {
        dispatch(getDietTypes());
    }, [dispatch]);

    function handleChange(e) {
        e.preventDefault();
        setInput((prevInput) => {   //// de esta manera el componente muestra los cambios (componentdidupdate?) para poder ir validando
            const newInput = {
                ...prevInput,
                [e.target.name]: e.target.value
            }
            const validations = validate(newInput);
            setErrors(validations)
            return newInput
        });

    };
    
    function handleCheckBox(e) {
       
        let newArray = input.dietTypes;
        let find = newArray.indexOf(e.target.value);
        
        if (find >= 0) {
            newArray.splice(find, 1)
        } else {
            newArray.push(e.target.value)
        }
        
        setInput({
            ...input,
            dietTypes: newArray
        });
        const validations = validate(input);
        setErrors(validations)
        
    }
    
    function handleSubmit(e) {
         e.preventDefault();

         if (Object.values(errors).length > 0) {
             alert("Please complete the information required");
         } else if (
            input.name === '' && 
            input.summary === '' && 
            input.healthScore === '' &&
            input.steps === '' &&
            !input.dietTypes.length) {
            alert("Please complete the form");}
        else {
            dispatch(addRecipe(input));
            alert('New recipe added successfully!')
            setInput({
                name: "",
                summary: '',
                healthScore: '',
                steps: [],
                dietTypes: []
            });
            history.push('/home')
        }
    };
    
    
    return (
        <div className="bkg">
            <h1 className="msg">Creat your own recipe!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form1">
                    <div className="container">
                        <div className="nameInput">
                            <label className="h1">Name:</label>
                            <input className="inputname" name="name" type="text" value={input.name} onChange={e => handleChange(e)}/>
                            {errors.name && (
                                <span className="errors">{errors.name}</span>
                            )}
                        </div>
                        <div className="nameInput">
                            <label className="h1">Summary:</label>
                            <textarea className="inputsum" name="summary" type="text" rows="4" cols="30" value={input.summary} onChange={e => handleChange(e)}/>
                            {errors.summary && (
                                <span className="errors">{errors.summary}</span>
                            )}
                        </div>
                    
                        <div className="nameInput">
                            <label className="h1">Health Score:</label>
                            <input className="inputhealt" name="healthScore" type="number" value={input.healthScore} onChange={e => handleChange(e)}/>
                            {errors.healthScore && (
                                <span className="errors">{errors.healthScore}</span>
                            )}
                        </div>
                        <div className="nameInput">
                            <label className="h1">Steps:</label>
                            <textarea className="inputstep" name="steps" type="text" rows="4" cols="40" value={input.steps} onChange={e => handleChange(e)}/>
                            {errors.steps && (
                                <span className="errors">{errors.steps}</span>
                            )}
                        </div>
                    </div>
                    <div className="checkSelect">
                        <label className="msgs">Diet Types:</label>
                        {dietTypes.map(d =>{
                            return (
                                <div key={d} className="checks">
                                    <label className="dietTypes">{d}</label>
                                    <input className="checks" type="checkbox" name={d} value={d} selected={input.dietTypes.includes(d)} onChange={e => handleCheckBox(e)}/>
                                </div>
                            )
                        })}
                        {errors.dietTypes && (
                            <span className="errors">{errors.dietTypes}</span>
                        )}
                    </div>
                </div>
                <button className="btnadd" type="submit">Submit Recipe</button>
                <Link to="/home"><button className="btnadd">Go back</button></Link>
            </form>
        </div>



    )

};