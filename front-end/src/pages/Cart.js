import { Announcement, Navbar, Footer } from '../index.jsx';
import {Container, Wrapper, Title, Top, Bottom, TopButton, TopTextParent, TopText } from '../styles/pages/Cart';


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your 3 Piece Suits</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTextParent>
                    <TopText>Shopping Cart(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTextParent>
                <TopButton type='filled'>Checkout</TopButton>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart