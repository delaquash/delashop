import React from 'react'
import { Search,  } from '@material-ui/icons';
import  ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Language= styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 125px;
`;

const Logo = styled.h1`
    font-weight: bold;
`;
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
                        <Search  style={{color: "gray", fontSize: "16px"}}/>
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

export default Navbar