// import { Announcement, Navbar, Footer} from '../index.jsx';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons";
import {Container, Hr, Wrapper, Title, 
        Top,ProductColor, Bottom, TopButton, 
        Image, PriceDetails, ProductPrice, ProductId,
        TopTextParent, TopText, Info, Summary, Product, 
        ProductDetails, Details, ProductName, ProductSize, 
        ProductAmountContainer, ProductAmount, SummaryTitle,
        SummaryItem, SummaryItemText, SummaryItemPrice, Button
    } from '../styles/pages/Cart';


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
                                <ProductColor color="blue" />
                                <ProductSize><b>Size:</b> 40.5 </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                    <ProductAmount>
                                        2
                                    </ProductAmount>
                                {/* Remove is suppose to be here */}
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>
                                &#8358; 30,000
                            </ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetails>
                            <Image src='https://images.unsplash.com/photo-1648329008114-bce0ec0b5950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                                <Details>
                                    <ProductName><b>Product:</b> Your Elite Yourba Agbada</ProductName>
                                    <ProductId><b>ID: </b> 1234567 </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 21 </ProductSize>
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
                                &#8358; 20,000
                            </ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice> &#8358; 50,000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Cost</SummaryItemText>
                        <SummaryItemPrice> &#8358; 5000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shippiong Discount</SummaryItemText>
                        <SummaryItemPrice> &#8358; 500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice> &#8358; 54500</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart;