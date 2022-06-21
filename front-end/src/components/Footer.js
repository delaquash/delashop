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
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Twitter />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
            <SocialIcon>
              <YouTube />
            </SocialIcon>
           </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer