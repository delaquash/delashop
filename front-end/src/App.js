
import { 
  // Register
  Home
  // Product
  // ProductList 
  // Announcement 
  // Cart
  // Login
} from './index.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <div className="App">
          <Route index element={<Home />}  />        
          {/* <Announcement /> */}
          {/* <ProductList /> */}
          {/* <Product /> */}
          {/* <Register /> */}
          {/* <Login /> */}
          {/* <Cart /> */}
      </div>   
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
