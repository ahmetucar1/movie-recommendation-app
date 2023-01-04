import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarNav from './Components/Navbar'
import Home from './Components/Home';
import SuggestMe from './Components/SuggestMe';
import {  Routes, Route } from 'react-router-dom';



function App() {
 

return (
  <div>

    <NavbarNav></NavbarNav>
  <div className='container'>
    <Routes>
       <Route path='/' exact element={<Home />} />
       <Route path='/suggestme' element={<SuggestMe/>} />
    </Routes>
     </div>
  

  </div>
)
}

export default App;
