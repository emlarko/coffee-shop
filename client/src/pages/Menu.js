import React, { useState } from 'react';
import styled from 'styled-components'
import Coffee from '../assets/coffee-menu.jpg'
import Brunch from '../assets/brunch-menu.JPG'
import Cocktail from '../assets/cup-cocktail.jpg.jpg'
import Beer from '../assets/cup-beer.jpg.jpg'
import Banner from '../assets/flat-white.jpg'

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  font-family: 'Comfortaa', cursive;
`

const BannerImage = styled.img `
  width: 100%;
  position: relative;
`

const Button = styled.button`
font-family: "Bebas Neue", sans-serif;
  font-size: 30px;
  background: #217262;
  border-radius: 50%;
  border: 0px;
  color: white;
  text-align: center;
  padding:20px;
  margin:auto;
  cursor: pointer;
  width: 140px;
  height: 140px;
  &:hover,
  &.active {
    background: #5DB7A5;
  }
  `
const ButtonGroup = styled.div`
  display: flex;
  text-align: center;
  margin-top: 10px;
`
const Image = styled.img `
  width: 40%;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  margin: 40px auto;
  `
const Description = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 60px;
  padding: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  color: white;
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
    <BannerImage src={Banner}/>
        <Description>
        <p>
          Cup brings a casual dining experience to the neighborhood of Hagley. <br />
          Expect pop-ups from the best street food traders around!! <br />
          The only big decision, do you eat in or takeaway??!!
        </p>
          </Description>
        <ButtonGroup>
        <Button onClick={() => selectMenuImage('coffee')}>Coffee</Button>
        <Button onClick={() => selectMenuImage('brunch')}>Brunch</Button>
        <Button onClick={() => selectMenuImage('cocktail')}>Cocktails</Button>
        <Button onClick={() => selectMenuImage('beer')}>Beer &<br />Wine</Button>
        </ButtonGroup>
      
      <Image src={selectedMenuImage} />
    </Container>
    
  )
}
export default Menu