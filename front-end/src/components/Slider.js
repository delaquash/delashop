import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide } from '../styles/Slider'


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined  />    
        </Arrow>
        <Wrapper>
           <Slide>
           <ImgContainer>
                <Image src="https://media.istockphoto.com/photos/white-tshirt-clothes-picture-id685710150?k=20&m=685710150&s=612x612&w=0&h=JY6IbMc3Ij-Bkn3jLJW4GnA9k_Cc2fdAopSq6RB5o2E=" />
                </ImgContainer>
            <InfoContainer>

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