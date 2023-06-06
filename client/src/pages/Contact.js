import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/client';
import { SEND_MAIL } from '../utils/mutations';

import styled from 'styled-components'
import { Container, Col, Row } from '../Styled'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const StyledForm = styled.form`
  min-width: 400px;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  margin: 0px auto;
`
const StyledLabel = styled.label`
  display: block;
  margin: 10px;
`

const StyledInput = styled.input`
  font-family: 'Comfortaa', cursive;
  font-size: 15px;
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`
const StyledText = styled.textarea`
  font-family: 'Comfortaa', cursive;
  font-size: 15px;
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`
const StyledDiv = styled.div`
  
  
  & a {
    text-decoration: none;
  }

  & li {
    padding: 20px;
  } 
`
const Icon = styled.span`
  padding: 20px;
`

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [sendMail, { error }] = useMutation(SEND_MAIL);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else {
      setQuery(inputValue);
    }
  };

   const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await sendMail({
        variables: { email: email, name: name, subject: subject, query: query},
      });
      setSuccessMessage(`Thank you for your query ${name}`);
      setEmail('');
      setName('');
      setSubject('');
      setQuery('');

    } catch (e) {
      console.log(e)
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
    <Container>
      <Row>
        <h3>Contact</h3>
      </Row>
        <hr />
        <Row>
        <Col size={2}>
        <StyledForm>
      <p>Please fill out the below form with any queries:</p>
      <StyledLabel>Email:</StyledLabel>
        <StyledInput
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="youremail@email.com"
          onBlur={handleChange}
        />
        <StyledLabel>Name:</StyledLabel>
        <StyledInput
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          onBlur={handleChange}
        />
        <StyledLabel>Subject:</StyledLabel>
        <StyledInput
          value={subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="Subject"
          onBlur={handleChange}
        />
        <StyledLabel>Query:</StyledLabel>
        <StyledText
          value={query}
          name="query"
          onChange={handleInputChange}
          type="text"
          placeholder="Query"
          onBlur={handleChange}
        />
        <div>
        <button type="submit" value="submit" className="btn btn-primary" onClick={handleFormSubmit}>
          Submit
        </button> <br />
        </div>
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
      </StyledForm>
      </Col>
      <Col size={1}>
        <StyledDiv>
        <ul className='contact'>
          <li><a href="mailto:emilylarkin11@hotmail.co.uk"><Icon><FontAwesomeIcon icon={faEnvelope} size="2xl"/></Icon>Send us an email</a></li>
          <li><Icon><FontAwesomeIcon icon={faPhone} size="2xl" /></Icon>0102184299</li>
        </ul>
        </StyledDiv>
      </Col>
      </Row>
    </Container>
    );
}

export default Form;