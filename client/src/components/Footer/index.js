import React from "react";
import styled from 'styled-components'
import { Row } from "../../Styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const StyledFooter = styled.footer`
font-family: 'Comfortaa', cursive;
width: 30%;
margin: 0 auto;
display; flex;
text-align: center;
position: relative;
top: 20rem;
justify-content: center;

& a {
    color: inherit;
    &:hover {
      color: #217262;
    }
  }
`
const StyledIcon = styled.a`
padding: 2rem;
margin: 1em auto;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Footer = () => {
  return (
  <StyledFooter>
    <Row>
    <h4>
        01562884168 <br />
        121 Worcester Rd, Hagley,DY9 0NG  <br />
    </h4>
    </Row>
   <StyledIcon>
    <a href="mailto:emilylarkin11@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="fa-icon"/></a>
    <a href="https://www.instagram.com/cupcoffeeshop/"><FontAwesomeIcon icon={faInstagram} size="2xl" className="fa-icon"/></a>
    </StyledIcon>
  </StyledFooter>
  )
}
export default Footer