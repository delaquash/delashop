import { Facebook, Instagram, Twitter, YouTube,Call, AddLocation, Mail, Payment } from '@material-ui/icons';
import { Container, Logo, Desc, Copyright, SocialContainer, SocialIcon,Center, Title, List, ListItem, Right, ContactItem, Left, FooterIcon, FooterSpace } from '../styles/Components/Footer';


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DELASHOP</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam architecto explicabo reiciendis minima deleniti ullam quod modi! 
                Aspernatur quis, consequatur delectus expedita maxime, quos perferendis officia fugit minus, vero quae.
           </Desc>
           <SocialContainer>
            <SocialIcon color='385999'>
              <Facebook />
            </SocialIcon>
            <SocialIcon color='E4405F'>
              <Twitter />
            </SocialIcon>
            <SocialIcon color='555ACE'>
              <Instagram />
            </SocialIcon>
            <SocialIcon color="c4302b" >
              <YouTube />
            </SocialIcon>
           </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Link.</Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>Cargo Tracking</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms and Condition</ListItem>
            </List>
            <Copyright>
          Delashop 2022. Built with React
            </Copyright>
        </Center>
        <Right>
          <Title>Contact Us</Title>
          <ContactItem>
              <AddLocation style={{ marginRight : "10px" }}/>
              <FooterSpace>
              80, Alakija Close, Lekki, Lagos.
            </FooterSpace>
          </ContactItem>
          <ContactItem>
            <FooterIcon>
              <Call style={{ marginRight : "10px" }} />                   
            </FooterIcon>
            <FooterSpace>
              +2348064965574
            </FooterSpace>
          </ContactItem>
          <ContactItem>
              <Mail style={{ marginRight : "10px" }} /> 
            <FooterSpace>
              info@delashop.com.ng
            </FooterSpace>
          </ContactItem>

          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
        
    </Container>
  )
}

export default Footer