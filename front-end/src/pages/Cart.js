// import { Announcement, Navbar, Footer} from '../index.jsx';
import { useSelector } from 'react-redux';
import  { Add, Remove}  from "@material-ui/icons";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import {Container, Hr, Wrapper, Title, 
        Top,ProductColor, Bottom, TopButton, 
        Image, PriceDetails, ProductPrice, ProductId,
        TopTextParent, TopText, Info, Summary, Product, 
        ProductDetails, Details, ProductName, ProductSize, 
        ProductAmountContainer, ProductAmount, SummaryTitle,
        SummaryItem, SummaryItemText, SummaryItemPrice, Button
    } from '../styles/pages/Cart';


const Cart = () => {
    const cart = useSelector(state=> state.cart)
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
                    {cart.products.map((product)=> (
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
                    ))} 
                    <Hr />  
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