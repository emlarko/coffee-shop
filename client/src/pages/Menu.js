import React, { useState } from 'react';
import styled from 'styled-components'
import { Container } from "../Styled";
import { Footer } from "../Styled";
import Coffee from '../assets/coffee-menu.jpg'
import Brunch from '../assets/brunch-menu.JPG'
import Cocktail from '../assets/cup-cocktail.jpg.jpg'
import Beer from '../assets/cup-beer.jpg.jpg'

const Button = styled.button`
  background: grey;
  border-radius: 50%;
  border:none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding:20px;
  margin:auto;
  font-size: 16px;
  cursor: pointer;
  width:8%
  `
  const ButtonGroup = styled.div`
  display: flex;
  text-align: center;
  margin-top: 10%;

`
const Image = styled.img `
  width: 40%;
  border-radius: 8px;
  padding: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  `
  const Description = styled.div`
  margin: 5px auto;
  text-align: center
`

function Menu() {
    const menuImages = {
        coffee: Coffee,
        brunch: Brunch,
        cocktail: Cocktail,
        beer: Beer
    }

    const [selectedMenuImage, setSelected] = useState('')

    const selectMenuImage = (menu) => {
        setSelected(menuImages[menu])
    }

  return (
    
    <Container>

        <Description>
        <p>
          Cup brings a casual dining experience to the neighbourhood of Hagley. <br />
          Expect pop-ups from the best street food traders around!! <br />
          The only big decision, do you eat in or takeway??!!
        </p>
        </Description>
        <ButtonGroup>
        <Button onClick={() => selectMenuImage('coffee')}>Coffee</Button>
        <Button onClick={() => selectMenuImage('brunch')}>Brunch</Button>
        <Button onClick={() => selectMenuImage('cocktail')}>Cocktails</Button>
        <Button onClick={() => selectMenuImage('beer')}>Beer/Wine</Button>
        </ButtonGroup>
      
      <Image src={selectedMenuImage} />

    </Container>
    
  )
}
export default Menu