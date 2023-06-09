import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import styled from 'styled-components'
import { Container, Row, Title } from "../Styled";

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

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Title><h1>Login</h1></Title>
      <StyledForm onSubmit={handleFormSubmit}>
      <p>Don't have an account?</p><Link to="/signup">Signup Instead</Link>
        <Row>
          <StyledLabel htmlFor="email">Email address:</StyledLabel>
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <Row>
          <button type="submit">Submit</button>
        </Row>
      </StyledForm>
      </Container>
  );
}

export default Login;
