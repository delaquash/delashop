import { popularProducts } from "../data"
import { Container } from "../styles/Products"
import Product from "./Product"


const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product item={item}  key={item.id}/>
        ))}
    </Container>
  )
}

export default Products