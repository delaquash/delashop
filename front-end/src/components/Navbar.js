import { Search,  } from '@material-ui/icons';
import  ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import  { Container, Wrapper, Language, SearchContainer, Input, Left, Center, Logo, Right, MenuItem } from '../styles/Components/Navbar';


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    ENG
                </Language> 
                    <SearchContainer>
                        <Input />
                        <Search  style={{color: "gray", fontSize: "16px"}} />
                    </SearchContainer>      
            </Left>
            <Center><Logo>Delashop</Logo></Center>
            <Right>
                <MenuItem>
                    REGISTER                
                </MenuItem>
                <MenuItem>
                    SIGN IN                
                </MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>               
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;