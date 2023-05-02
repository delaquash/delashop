
import { useState, useEffect } from 'react';
import { Add, Remove } from "@material-ui/icons";
import Announcement from '../components/Announcement.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Newletter from '../components/Newletter.jsx';
import { Container, Wrapper, ImageContainer, Image, InfoContainer, Title,Desc, Price, FilterSize, FilterContainer, FilterSizeOption, FilterTitle, FilterColor, Filter, AddContainer, AmountContainer, Amount, Button } from "../styles/pages/SingleProduct";
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../RequestMethod.js';
import { addProduct } from '../Redux/CartReducer.js';
import { useDispatch } from 'react-redux';


const Product = () => {
  
  /* Getting the current location of the user. */
  const location = useLocation();
  /* A hook that allows you to dispatch actions to the Redux store. */
  const dispatch = useDispatch();

  /* Getting the id of the product from the url. */
  const id = location.pathname.split("/")[2]
  const [product, setProduct ] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize]= useState("");
  const [ color, setColor ]= useState("")
  const { title, desc, price} = product

  useEffect(() => {  
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      } catch (error) {
        
      }
    }
    getProducts()
  }, [id])

  const handleQuantity = (type) => type === "dec" ? quantity > 1 && setQuantity(quantity - 1) : setQuantity(quantity + 1)
  const handleClick= () => {
    // update cart
    dispatch(addProduct({...product, quantity, color, size }))
  }

  return (
    <Container>
         <Navbar />
       <Announcement />
       <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc> {desc}</Desc>
          <Price>&#8358; {price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
                {product.colors?.map((color)=> (
                   <FilterColor 
                      color={color}
                      key={color.id}
                      onClick={()=>setColor(color)}
                    />
                ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                  onChange={(e)=>setSize(e.target.value)}
              >
                {product.sizes?.map((size)=> (
                  <FilterSizeOption key={size._id}>
                      {size}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=> handleQuantity("dec")} />
                  <Amount>{quantity}</Amount>
              <Add onClick={()=> handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
       </Wrapper>
       <Newletter />
       <Footer /> 
   </Container>
  )
}

export default Product;