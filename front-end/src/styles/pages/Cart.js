import styled from 'styled-components';

export const Container = styled.div`

`;
export const Wrapper = styled.span`
    padding: 20px;
`;
export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
export const Top = styled.div`
    padding: 30px;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const TopButton = styled.button`
        font-size: 20px;
        margin-right: 3em;
        font-weight: 500;
        cursor: pointer;
        border: ${props=> props.type === "filled" && "none"};
        border-radius: 10px;
        background:${(props)=> props.type === "filled" ? "black" : "transaprent"};
        color: ${(props) => props.type === "filled" && "white"};
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
    font-size: 30px;
    margin: 5px;
`;
export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 400;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Info = styled.div`
    flex: 3;
`;


export const TopText = styled.span`
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
    margin: 0px 20px;
`;
export const TopTextParent = styled.div``;

export const Image = styled.img`
    width:250px;
    padding-left: 30px;
`;
export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${(props)=> props.marginBottom};
`;
export const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;
export const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color}
`;
export const ProductName = styled.span`

`;
export const ProductSize = styled.span ``;
export const ProductId = styled.span ``;

export const Hr = styled.hr`
    background-color: #fff;
    border: none;
    height: 1px;
`;

export const Summary = styled.div`
    flex: 1;
    border:1px solid #40E0D0;
    border-radius: 10px;
    padding: 20px;
    height: 30vh;
    margin-right: 5em;
`;
export const SummaryTitle = styled.div`
    font-weight: 500;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-style: italic;
`;
export const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props => props.type === "total" && "500")};
    font-size: ${(props => props.type === "total" && "24px")};
`;
export const SummaryItemText = styled.div``;
export const SummaryItemPrice = styled.div``;
export const Button = styled.button`
    width: 100%;
    padding: 20px;
    border: 1px solid #f4f4f4;
    border-radius: 50px;
    background-color: black;
    color: white;
`;
