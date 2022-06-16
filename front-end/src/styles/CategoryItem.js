import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const  Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    cursor: pointer;
    border:none;
    padding: 10px;
    color: gray;
    background-color: white;
`;

export const Info  = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    widows: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 