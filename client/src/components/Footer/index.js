import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const StyledFooter = styled.footer`
font-family: 'Comfortaa', cursive;
width: 30%;
margin: 200px auto 5px auto;
text-align: center;
& a {
    color: inherit;
    &:hover {
      color: #217262;
    }
  }
`
const StyledIcon = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & li {
    list-style-type: none;
    padding: 0px 40px 0px 0px;
  }
`
const Footer = () => {
  return (
  <StyledFooter>
    <h4>
        01562884168 <br />
        121 Worcester Rd, Hagley, DY9 0NG
    </h4>
   <StyledIcon>
    <li><a href="mailto:emilylarkin11@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="fa-icon"/></a></li>
    <li><a href="https://www.instagram.com/cupcoffeeshop/"><FontAwesomeIcon icon={faInstagram} size="2xl" className="fa-icon"/></a></li>
    </StyledIcon>
  </StyledFooter>
  )
}
export default Footer