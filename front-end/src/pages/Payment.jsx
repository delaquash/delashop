import React, { useState } from "react"
import { createGlobalStyle } from "styled-components";
import { useSelector } from 'react-redux';
import { PaystackButton } from "react-paystack"
import {Label, Input, PaymentButton,CheckOut, CheckOutForm, ItemDetails,Item, Container } from "../styles/pages/CheckOut.js"

const publicKey = process.env.PAYSTACK_KEY

// const GlobalStyles = createGlobalStyle `
//     body {
//       font-family: 'Roboto', sans-serif;
//     }
// `

const Payment = () => {
//   const publicKey = "pk_your_public_key_here"
  const amount = useSelector(state=> state.cart);
  // const amount = 10000
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <Payment>
      {/* <GlobalStyles /> */}
      <Container>
        <Item>
          <img src="https://image.shutterstock.com/image-vector/vector-shopping-cart-icon-260nw-1377206405.jpg" alt=""/>
          <ItemDetails>
            <p style={{fontSize: '22px'}}>Dancing Shoes</p>
            <p  style={{fontWeight: 'bolder'}}>{amount}</p>
          </ItemDetails>
        </Item>
        <CheckOutForm>
          <form>
            <Label>Name</Label>
            <Input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label>Email</Label>
            <Input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label>Phone</Label>
            <Input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaymentButton>
            <PaystackButton {...componentProps} />
          </PaymentButton>
        </CheckOutForm>
      </Container>
    </Payment>
  );
}

export default Payment;