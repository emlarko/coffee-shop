import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import styled from 'styled-components';
import { Container, Row } from "../Styled";

const StyledForm = styled.form`
  min-width: 400px;
  background-color: #efe5da;
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

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <h3>Signup</h3>
      <StyledForm onSubmit={handleFormSubmit}>
      <p>Already have an account?</p><Link to="/login">Login Instead</Link>
        <Row>
          <StyledLabel htmlFor="firstName">First Name:</StyledLabel>
          <StyledInput
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
       </Row>
       <Row>
          <StyledLabel htmlFor="lastName">Last Name:</StyledLabel>
          <StyledInput
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </Row>
        <Row>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput
            placeholder="youremail@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </Row>
        <Row>
          <StyledLabel htmlFor="pwd">Password:</StyledLabel>
          <StyledInput
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </Row>
        <Row>
          <button type="submit">Submit</button>
        </Row>
      </StyledForm>
    </Container>
  );
}

export default Signup;
