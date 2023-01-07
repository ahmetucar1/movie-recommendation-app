import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavbarNav = () => {
  return (
    <div>
       <Navbar  variant="dark">
        <Container>
          <Navbar.Brand className='mx-3' href='/'>MOVİES</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className='nav-item nav-link active'>Home</Link>
            <Link to={"/suggestme"} className='nav-item nav-link'>Rastgele Öner</Link>
            <Link to={"/filteredsuggest"} className='nav-item nav-link'>Filtrele Öner</Link>
          </Nav>
        </Container>
    </Navbar>

    </div>
  )
}

export default NavbarNav
