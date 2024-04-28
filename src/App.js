import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
import Additem from './components/Additem';
// import Products from './components/Products';
import Edititem from './components/Edititem';
import Cart from './components/Cart';
import Order from './components/Order';
import Main from './components/Main';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add_item' element={<Additem/>}/>
        <Route path='/edit_item' element={<Edititem/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;