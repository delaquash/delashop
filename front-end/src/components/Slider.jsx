import { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems } from '../data'
import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide, Title, Desc, Button } from '../styles/Components/Slider';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
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