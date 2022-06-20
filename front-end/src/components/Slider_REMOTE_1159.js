import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide, Title, Desc, Button } from '../styles/Slider'


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined  />    
        </Arrow>
        <Wrapper>
           <Slide bg="green">
           <ImgContainer>
                <Image src="https://media.istockphoto.com/photos/mens-white-blank-tshirt-templatefrom-two-sides-natural-shape-on-for-picture-id1151955708?b=1&k=20&m=1151955708&s=170667a&w=0&h=g35sZS5Nw1P0HD8gqGrcl1t-oY-1bgmpxQcWn0RqBW4=" />
                </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALES AND UNLIMITED OFFERS</Title>
              <Desc>Dont compromise on your look, get quality and affordable wears at discounted prices.</Desc>
              <Button>BUY NOW</Button>
            </InfoContainer>
           </Slide>
           <Slide bg="red">
           <ImgContainer>
                <Image src="https://media.istockphoto.com/photos/mens-white-blank-tshirt-templatefrom-two-sides-natural-shape-on-for-picture-id1151955708?b=1&k=20&m=1151955708&s=170667a&w=0&h=g35sZS5Nw1P0HD8gqGrcl1t-oY-1bgmpxQcWn0RqBW4=" />
                </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALES AND UNLIMITED OFFERS</Title>
              <Desc>Dont compromise on your look, get quality and affordable wears at discounted prices.</Desc>
              <Button>BUY NOW</Button>
            </InfoContainer>
           </Slide>
           <Slide bg="blue">
           <ImgContainer>
                <Image src="https://media.istockphoto.com/photos/mens-white-blank-tshirt-templatefrom-two-sides-natural-shape-on-for-picture-id1151955708?b=1&k=20&m=1151955708&s=170667a&w=0&h=g35sZS5Nw1P0HD8gqGrcl1t-oY-1bgmpxQcWn0RqBW4=" />
                </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALES AND UNLIMITED OFFERS</Title>
              <Desc>Dont compromise on your look, get quality and affordable wears at discounted prices.</Desc>
              <Button>BUY NOW</Button>
            </InfoContainer>
           </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined  />    
        </Arrow>
    </Container>
  )
}

export default Slider