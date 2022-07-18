
import { 
  Register,
  Home,
  // Product
  // ProductList 
  Announcement, 
  Cart,
  Login
} from './index.jsx';
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import React from 'react';

function App() {
  
  return (
    // <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />      
          {/* <Route path='Announcement' element={<Announcement />} /> */}
          {/* <Announcement /> */}
          {/* <ProductList /> */}
          {/* <Product /> */}
          <Route path="/register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path='cart' element={<Cart />} />
          {/* <Cart /> */}
      {/* </div>    */}
      </Routes>   
    // </BrowserRouter>
  );
}

export default App;
