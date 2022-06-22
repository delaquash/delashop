import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
import { Container, Logo, Desc, SocialContainer, SocialIcon,Center, Title, List, ListItem, Right, ContactItem, Left } from '../styles/Footer';


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
        </Center>
        <Right>
          {/* <Title>Contact Us</Title>
          <ContactItem>
            80, Alakija Close, Lekki, Lagos.
          </ContactItem>
          <ContactItem>
            +2348065889756
          </ContactItem> */}
        </Right>
    </Container>
  )
}

export default Footer