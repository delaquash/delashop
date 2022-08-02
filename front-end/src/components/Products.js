import { useState, useEffect } from "react";
import axios from "axios";
import { popularProducts } from "../data";
import { Container } from "../styles/Components/Products";
import Product from "./Product";

const Products = ({cat, filters, sorts}) => {
    // const [products, setProducts] = useState([])
    // const [filteredProducts, setFilteredProducts] = useState([])


        useEffect(() => {
          const getProducts = async ()=> {
            try{
              const res = await axios.get("http://localhost:5000/api/products")
              // const data = await res.json()
              console.log(res)
            }
            catch(err){
              // console.log(err);
            }
          };
          getProducts()
        }, [cat]);
      

  return (
    <Container>
        {popularProducts.map((item) => (
            <Product 
                item={item}
                key={item.id} 
            />
        ))}
    </Container>  
  )
}

export default Products;