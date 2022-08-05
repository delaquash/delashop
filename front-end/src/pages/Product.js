
import { useState, useEffect } from 'react';
import { Add, Remove } from "@material-ui/icons";
import Announcement from '../components/Announcement.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Newletter from '../components/Newletter.js';
import { Container, Wrapper, ImageContainer, Image, InfoContainer, Title,Desc, Price, FilterSize, FilterContainer, FilterSizeOption, FilterTitle, FilterColor, Filter, AddContainer, AmountContainer, Amount, Button } from "../styles/pages/SingleProduct";
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../RequestMethod.js';
import { addProduct } from '../Redux/CartReducer.js';
import { useDispatch } from 'react-redux';


const Product = () => {
  /* Getting the current location of the user. */
  const location = useLocation();
  /* A hook that allows you to dispatch actions to the Redux store. */
  const dispatch = useDispatch()
  /* Getting the id of the product from the url. */
  const id = location.pathname.split("/")[2]
  const [product, setProduct ] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize]= useState("");
  const [ color, setColor ]= useState("")

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
        console.log(res);
      } catch (error) {
        
      }
    }
    getProducts()
  }, [id])
  
  const handleQuantity = (type)=> {
    if (type === "dec"){
      setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

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
          <Title>{product.title}</Title>
          <Desc> {product.desc}</Desc>
          <Price>&#8358; 20000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor 
                    color={c} 
                    key={c} 
                    onClick={() => setColor(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                  onChange={(e)=>setSize(e.target.value) }
              >
                {product.size?.map((s)=> (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
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