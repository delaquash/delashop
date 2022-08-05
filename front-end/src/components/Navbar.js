import { useSelector } from 'react-redux';
import { Search,  } from '@material-ui/icons';
import  ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@mui/material';

import  { Container, Wrapper, Language, SearchContainer, Input, Left, Center, Logo, Right, MenuItem } from '../styles/Components/Navbar';


const Navbar = () => {
    const quantity = useSelector(state=> state.cart.quantity)
    
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
                    ABOUT US               
                </MenuItem>
                <MenuItem>
                    REGISTER                
                </MenuItem>
                <MenuItem>
                    LOGIN                
                </MenuItem>
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>               
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>

  )
};

export default Navbar;