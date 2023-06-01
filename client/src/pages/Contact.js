import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';


function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setQuery(inputValue);
    }
  };

   const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setSuccessMessage(`Thank you for your query ${name}`)
      setEmail('');
      setName('');
      setQuery('')
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      } 
    } else {
        if (!e.target.value.length) {
          setErrorMessage(`A ${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
  };

  return (
    <>
        <h2 className='content'>Contact</h2>
        <hr />
        <form className="form">
      
      <p>Please fill out the below form with any queries:</p>
        <div className="form-group">
        <input className='form-input' 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          onBlur={handleChange}
        />
        </div>
        <div className="form-group">
        <input className='form-input'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          onBlur={handleChange}
        />
        </div>
        <div className="form-group">
        <textarea className='form-input' rows="8"
          value={query}
          name="query"
          onChange={handleInputChange}
          type="text"
          placeholder="Query"
          onBlur={handleChange}
        />
        </div>
        <button type="submit"  className="btn btn-primary" onClick={handleFormSubmit}>
          Submit
        </button> <br />
        
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
             {successMessage && (
        <div>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
      </form>
    </>
    );
}

export default Form;