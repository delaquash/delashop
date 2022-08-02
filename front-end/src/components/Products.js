import { useState, useEffect } from "react";
import axios from "axios";
import { popularProducts } from "../data";
import { Container } from "../styles/Components/Products";
import Product from "./Product";

const Products = ({cat, filters, sorts}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])


        useEffect(() => {
          const getProducts = async ()=> {
            try{
              const res = await axios.get( cat ?
                `http://localhost:5000/api/products?category=${cat}`
                :
                "http://localhost:5000/api/products" 
                )
              setProducts(res.data)
              
            }
            catch(err){
              // console.log(err);
            }
          };
          getProducts()
        }, [cat]);
      

        useEffect(() => {
            cat && 
              setFilteredProducts(
                /* Filtering the products array. */
                products.filter((item) => 
                  /* Checking if the value of the key in the filters object is included in the
                  item[key] of the products array.
                  </code> */
                  Object.entries(filters).every(([key, value]) =>
                  item[key].includes(value)
                )))
        }, [products, cat, filters])


  return (
    <Container>
        {filteredProducts.map((item) => (
            <Product 
                item={item}
                key={item.id} 
            />
        ))}
    </Container>  
  )
}

export default Products;