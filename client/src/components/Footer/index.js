import React from "react";
import styled from 'styled-components'
import { Container } from "../../Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Image = styled.img `
  width: 100%;
  position: relative;
`

const Footer = () => {
  return (
  <footer>
<Container>
    <ul>
    <li><a href="mailto:emilylarkin11@hotmail.co.uk"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="fa-icon"/></a></li>
    <li><a href="https://www.instagram.com/cupcoffeeshop/"><FontAwesomeIcon icon={faInstagram} size="2xl" className="fa-icon"/></a></li>
    </ul>
</Container>
  </footer>
  )
}
export default Footer