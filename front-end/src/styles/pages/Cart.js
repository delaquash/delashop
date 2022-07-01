import styled from 'styled-components';


export const Container = styled.div``;
export const Wrapper = styled.span`
    padding: 20px;
`;
export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TopButton = styled.button`
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        border: ${props=> props.type === "filled" && "none"};
        border-radius: 10px;
        background:${(props)=> props.type === "filled" ? "black" : "transaprent"};
        color: ${(props) => props.type === "filled" && "white"};
`;


export const Bottom = styled.div``;
export const TopText = styled.span`
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
    margin: 0px 20px;
`;
export const TopTextParent = styled.div``;