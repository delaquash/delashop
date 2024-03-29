import styled from 'styled-components';

export const Payment = styled.div `
  text-align: center;
  font-family: Roboto;
  letter-spacing: 0.1rem;
`;
export const Container = styled.div `
       display: flex;
       background-color: black;
      flex-direction: row;
      margin: 5% auto;
      width: 635px;
      height: 430px;
      background: white;
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
`;


export const Item = styled.div `
      width: 50%;
      position: relative;
`;
export const ItemImage = styled.div `
      height: 430px;
      width: 100%;
      object-fit: cover;
`;
export const ItemDetails = styled.div `
    position: absolute;
    bottom: 0;
    margin-bottom: 5px;
    margin-left: 20px;
    color: #84a17d;
    text-align: left;
`;

export const CheckOut = styled.div `
    background: #84a17d; /* fallback for old browsers */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 430px;
    width: 50%;
`;
export const CheckOutForm = styled.form `
      padding: 20px 20px;
`;
// export const CheckOutField = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 20px;
// `;
export const Label = styled.label `
      text-align: left;
      color: #e0eafc;
      font-size: 10px;
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
`;
export const PaymentButton = styled.div `
      cursor: pointer;
      text-align: center;
      font-size: 10px;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      background-color: #bfbfbf;
      font-weight: bold;
      color: #e0eafc;
      border: none;
      border-radius: 5px;
      width: 100%;
      height: 45px;
      margin-top: 40px;
`;

export const CartDetails = styled.p `
      font-size: 22px;
      display: flex;
      padding: 40px;
      /* align-items: center;
      justify-content: center; */
      /* margin-top: 45px; */
      position: absolute;
`;


export const Input = styled.input `
background - color: transparent;
border: 1 px solid# cecece;
border - radius: 5 px;
color: #e0eafc;
height: 35 px;
`;
// export const Payment = styled.div`
// `;


// .overlay-effect {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   opacity: 0.2;
//   background-color: #303030;
//   overflow: hidden;
//   z-index: 1;
// }

// .item-details {

// }

// .item-details__title {
//   font-size: 22px;
// }

// .item-details__amount {
//   font-weight: bolder;
// }

// .checkout {

// }

// .checkout-form {

// }

// .checkout-field {

// }

// .checkout-field label {
//   text-align: left;
//   color: #e0eafc;
//   font-size: 10px;
//   margin-bottom: 5px;
//   text-transform: uppercase;
//   letter-spacing: 0.1rem;
// }

// .checkout-field input {
//   
// }

// .paystack-button {

// }