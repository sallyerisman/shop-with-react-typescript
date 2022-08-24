import React from 'react'
import './Navbar.css'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CartFill } from 'react-bootstrap-icons'

const Navbar = () => {

  return (
    <NavbarBs className="navbar">
      <Container>
        <Nav className="navbar__nav">
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
          <Nav.Link to="/store" as={NavLink}>Shop</Nav.Link>
        </Nav>
        <Button className="button button__cart">
          <CartFill className="icon__cart"/>
          <div className="icon__indicator">3</div>
        </Button>
      </Container>
    </NavbarBs>
  )
}

export {Navbar}