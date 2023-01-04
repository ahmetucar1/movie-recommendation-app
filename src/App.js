import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SuggestMe from './Components/SuggestMe';
import Home from './Components/Home';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';


function App() {
 

return (
  <div>
   <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='mx-3' href='/'>MOVİES</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className='nav-item nav-link active'>Home</Link>
            <Link to={"/suggestme"} className='nav-item nav-link'>Suggest Me</Link>
          </Nav>
        </Container>
    </Navbar>

    <Routes>
       <Route path='/' exact element={<Home />} />
       <Route path='/suggestme' element={<SuggestMe/>} />
    </Routes>
  
  </div>
)
}

export default App;
