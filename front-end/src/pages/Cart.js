import { Announcement, Navbar, Footer, Add, Remove } from '../index.jsx';
import {Container, Wrapper, Title, Top,ProductColor, Bottom, TopButton, Image, PriceDetails, ProductPrice, ProductId,TopTextParent, TopText, Info, Summary, Product, ProductDetails, Details, ProductName, ProductSize, ProductAmountContainer, ProductAmount } from '../styles/pages/Cart';


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
            <Bottom>
                <Info>
                    <Product marginBottom="0 0 30px 0">
                        <ProductDetails>
                            <Image src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                            <Details>
                                <ProductName><b>Product:</b> Your favourite Sneakers</ProductName>
                                <ProductId><b>ID: </b> 1234567 </ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> 40.5 </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>
                                &#8358;
                            </ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Product>
                        <ProductDetails>
                            <Image src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                            <Details>
                                <ProductName><b>Product:</b> Your favourite Sneakers</ProductName>
                                <ProductId><b>ID: </b> 1234567 </ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> 40.5 </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>
                                &#8358;
                            </ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>

                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart