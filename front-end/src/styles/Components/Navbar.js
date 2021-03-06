import styled from 'styled-components';
import { mobileView } from '../../Responsive';

export const sticky = styled.div``;

export const Container = styled.div`
    height: 60px;
    
    ${mobileView({
        // backgroundColor: "red"
    })}
`;

 export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

 export const Language= styled.span`
    font-size: 14px;
    cursor: pointer;
    border: 1px solid gray;
`;
export const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

export const Input = styled.input`
    border: none;
`;
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const Center = styled.div`
    flex: 1;
    text-align: center;
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 50px;
`;

export const Logo = styled.h1`
    font-weight: bold;
`;