import React, { useState } from 'react';
import Error from './Error';

const Form = ({search, saveSearch, saveConsult}) => {


    const [error, saveError] = useState(false);

    // get city and country
    const {city, country } = search;

    // function that place the inputs in the state
    const handleChange = e => {
        // update state
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    // when user submits the form
    const handleSubmit = e => {
        e.preventDefault();

        // validate
        if (city.trim() === '' || country.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        saveConsult(true);
    }

    return(
        <form 
        onSubmit={handleSubmit}
        >
        { error ? <Error message="Both fields are required"/> : null}
            <div className="input-field col s12">
                <input 
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select 
                name="country" 
                id="country"
                value={country}
                onChange={handleChange}>
                    <option value="">-- Select a country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>
            <div className="input-field col s12">
                <button 
                type="submit"
                className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Get Weather</button>
            </div>
        </form>
    );
}

export default Form;