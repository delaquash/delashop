import styled from "styled-components";

export const Container =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: #fcf5f5;
    flex-direction: column;
`;

export const Title =styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

export const Description =styled.div`
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

export const Input =styled.input`
     border: none;
    flex: 8;
    padding-left: 20px;
`;
export const Button =styled.button``;