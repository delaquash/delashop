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
                <Image src="https://images.unsplash.com/photo-1654878543861-36e3d79c00b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80" />
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