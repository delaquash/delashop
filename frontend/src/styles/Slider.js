import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:  flex;
    background-color: coral;
    position: relative;
`;

export const Wrapper = styled.div`

`;

export const Slide = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;

`;

export const Image = styled.img`
    height: 80%;
    width: 30vw;
    `;

export const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`;

