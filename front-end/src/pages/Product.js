import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Add from '../components/Add';
import Remove from '../components/Remove';

import { Container, Wrapper, ImageContainer, Image, InfoContainer, Title,Desc, Price, FilterSize, FilterContainer, FilterSizeOption, FilterTitle, FilterColor, Filter, AddContainer, AmountContainer, Amount, Button } from "../styles/pages/SingleProduct";

const Product = () => {
  return (
    <Container>
         <Navbar />
       <Announcement />
       <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMwr/jean.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Agbada Full Pieces</Title>
          <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit molestiae eligendi delectus placeat quae maiores, earum totam fugiat officiis. 
            Accusantium ullam incidunt id! Eius molestiae aspernatur facilis fugit alias? 
            Nesciunt libero dicta odit sit accusantium excepturi necessitatibus molestiae maiores perferendis, voluptate aliquid expedita ut rem aspernatur incidunt, esse eius! Neque cupiditate rem iusto quae explicabo sit praesentium quam magnam.</Desc>
          <Price>&#8358; 20000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="red" />
              <FilterColor color="darkblue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
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

export default Product