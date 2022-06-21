import { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
<<<<<<< HEAD
import React from 'react'
import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide, Title, Desc, Button } from '../styles/Slider'

||||||| 3446245
import React from 'react'
import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide } from '../styles/Slider'

=======
import { sliderItems } from '../data'
import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide, Title, Desc, Button } from '../styles/Slider';
>>>>>>> dev-space

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick=(direction)=> {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
    }
  }
  return (
    <Container>
        <Arrow direction="left" 
          onClick={()=>handleClick("left")}
        >
            <ArrowLeftOutlined  />    
        </Arrow>
<<<<<<< HEAD
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
||||||| 3446245
        <Wrapper>
           <Slide>
           <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1654878543861-36e3d79c00b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80" />
                </ImgContainer>
            <InfoContainer>

            </InfoContainer>
           </Slide>
=======
        <Wrapper slideIndex={slideIndex}>
           {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
                 <Image src={item.img} />
                 </ImgContainer>
             <InfoContainer>
               <Title>{item.title}</Title>
               <Desc>{item.desc}</Desc>
               <Button>BUY NOW</Button>
             </InfoContainer>
            </Slide>
           ))}
>>>>>>> dev-space
        </Wrapper>
        <Arrow direction="right"
           onClick={()=>handleClick("left")}
        >
            <ArrowRightOutlined  />    
        </Arrow>
    </Container>
  )
}

export default Slider