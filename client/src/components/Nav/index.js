import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import styled from 'styled-components'
import Logo from '../../assets/cup-logo.jpg'

const Image = styled.img `

`

const Navbar = () => {
  return (
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/menu" activeStyle>
            Menu
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Contact
          </MenuLink>
          <MenuLink to="/shop" activeStyle>
            Shop
          </MenuLink>
          <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>
        </Menu>
      <Image src={Logo}/>
      </PrimaryNav>
  )
}
export default Navbar