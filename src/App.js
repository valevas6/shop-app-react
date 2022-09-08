import React from 'react';
import Nav from './Nav';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductsList from './pages/ProductList';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productList' element={<ProductsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
