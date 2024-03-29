// import { Announcement, Navbar, Footer} from '../index.jsx';
import { Add, Remove } from "@material-ui/icons";
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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector(state=> state.cart);
    const hello =() => {
        console.log(hello);
    }
    console.log(cart)
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
                            <Image src={product.img} />
                            <Details>
                                <ProductName><b>Product:</b> Your favorite {product.title}</ProductName>
                                <ProductId><b>ID: </b> {product._id} </ProductId>
                                <ProductColor color={product.color} />
                                <ProductSize><b>Size:</b>{product.size} </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                    <ProductAmount>
                                        {product.quantity}
                                    </ProductAmount>
                                {/* Remove is suppose to be here */}
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>
                                &#8358; {product.price * product.quantity}
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
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice> &#8358; 500</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice> &#8358; {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    
                        <Button onClick={hello}>
                            <Link to='/payment'>
                            Make Payment
                            </Link>
                        </Button>
                    
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart