
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";

import { Container, Wrapper, ImageContainer, Image, InfoContainer, Title,Desc, Price } from "../styles/pages/SingleProduct";



const Product = () => {
  return (
    <Container>
         <Navbar />
       <Announcement />
       <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Agbada Full Pieces</Title>
          <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit molestiae eligendi delectus placeat quae maiores, earum totam fugiat officiis. 
            Accusantium ullam incidunt id! Eius molestiae aspernatur facilis fugit alias? 
            Nesciunt libero dicta odit sit accusantium excepturi necessitatibus molestiae maiores perferendis, voluptate aliquid expedita ut rem aspernatur incidunt, esse eius! Neque cupiditate rem iusto quae explicabo sit praesentium quam magnam.</Desc>
          <Price>&#8358; 20000</Price>
        </InfoContainer>
       </Wrapper>
       <Newletter />
       <Footer /> 
   </Container>
  )
}

export default Product