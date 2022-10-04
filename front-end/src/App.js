import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Payment from "./pages/Payment";


function App() {
  return (
      <Routes> 
          <Route path="/" element={<Home />} />      
          <Route path='/products/:category' element={<ProductList />}  />
          <Route path="/product/:id" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
      </Routes>   
  );
}

export default App;
