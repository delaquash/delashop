import styled from 'styled-components';
import { Announcement, Navbar, Footer } from '../index.jsx';

const Container = styled.div``;
const Wrapper = styled.span``;
const Title = styled.h1``;
const Top = styled.div``;
const Bottom = styled.div``;

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your 3 Piece Suits</Title>
            <Top></Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart