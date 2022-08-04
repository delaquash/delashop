
import { useState, useEffect } from 'react';
import Announcement from '../components/Announcement.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Newletter from '../components/Newletter.js';
import Add from '../components/Add.js';
import Remove from '../components/Remove.js';
import { Container, Wrapper, ImageContainer, Image, InfoContainer, Title,Desc, Price, FilterSize, FilterContainer, FilterSizeOption, FilterTitle, FilterColor, Filter, AddContainer, AmountContainer, Amount, Button } from "../styles/pages/SingleProduct";
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../RequestMethod.js';



const Product = () => {
  const location = useLocation();
  /* Getting the id of the product from the url. */
  const id = location.pathname.split("/")[2]
  const [product, setProduct ] = useState({})

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
                <FilterColor color={c} key={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((s)=> (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
       </Wrapper>
       <Newletter />
       <Footer /> 
   </Container>
  )
}

export default Product;