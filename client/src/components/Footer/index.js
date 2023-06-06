import React from "react";
import styled from 'styled-components'
import { Row } from "../../Styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const StyledFooter = styled.footer`
font-family: 'Comfortaa', cursive;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
& a {
    color: inherit;
    &:hover {
      color: #217262;
    }
  }
`
const StyledIcon = styled.a`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100px;
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