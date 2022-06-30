import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://images.pexels.com/photos/128299/pexels-photo-128299.jpeg?cs=srgb&dl=pexels-mabel-amber-128299.jpg&fm=jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    display: flex;
    align-items: center;
    justify-content: center; 
`;
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    justify-content: center;
`;
export const Wrapper  = styled.div`
    width: 25%;
    padding: 50px;
    background-color: #fff;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    border: 3px solid gray;
    border-radius: 10px;
    margin:10px 0px;
    padding: 10px;
`;
export const Agreement = styled.span`
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0px;
`;
export const Button = styled.button`
    /* width: 30%; */
    border: none;
    border-radius: 10px;
    margin-top: 15px;
    padding: 15px 20px;
    color: white;
    background-color: black;
    cursor: pointer;
    /* position: relative; */
    display: grid;
    justify-content: center;
    

    &:hover {
        background-color: black;
        color: green;
        font-size: 15px;
        font-weight: 500;
    }
`;

export const Link = styled.a`
    margin: 10px 5px;
    font-size: 20px;
    font-weight: 300;
    text-decoration: underline;
    display: grid;
    justify-content: center;
    cursor: pointer;
`;
