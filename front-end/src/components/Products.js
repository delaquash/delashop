import { useState, useEffect } from "react";
import axios from "axios";
// import { popularProducts } from "../data";
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


        useEffect(() => {
            if(sorts === "newest"){
                setFilteredProducts((prev) => 
                  /* Sorting the array by the date it was created. */
                  [...prev].sort((a, b) => a.createdAt - b.createdAt)
                )
            } else if (sorts === 'asc'){
              setFilteredProducts((prev) => {
                  [...prev].sort((a, b) => a.price - b.price)
              })
            } else{
              setFilteredProducts((prev) => {
                [...prev].sort((a, b)=> b.createdAt - a.createdAt)
              })
            }
        }, [sorts])

  return (
    <Container>
        {cat ? filteredProducts.map((item) => 
            <Product
                item={item}
                key={item.id} 
            />) : products.slice(0, 8).map((item)=> 
            <Product
                item={item}
                key={item.id} 
            />)}
    </Container>
  )
}

export default Products;