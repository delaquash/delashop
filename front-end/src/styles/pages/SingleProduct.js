import styled from "styled-components";
export const Container = styled.div`

`;

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
export const ImageContainer = styled.div`
    flex: 1;
`;
export const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
export const Title = styled.h1`
    font-weight: 200;
    
`;
export const Price = styled.span`
    font-weight: 100px;
    font-size: 40px;
`;
export const Desc = styled.p`
    margin: 20px 0px;
`;
export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`;
export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
export const Filter= styled.div`
    display: flex;
    align-items: center;
`;
export const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 200;
`;
export const FilterSize = styled.select`
     margin-left: 20px;
     padding: 10px;
`; 
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div` 
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`;
export const AmountContainer = styled.div`
     display: flex;
     align-items: center;
     font-weight: 700;
`;
export const Amount = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
export const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    background-color: #fff;
    font-weight: 200;
    cursor: pointer;

    &:hover {
        background-color: red;
        color: white;

    }
`;