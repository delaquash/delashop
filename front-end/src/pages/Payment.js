import React, { useState } from "react"
import { useSelector } from 'react-redux';
import { PaystackButton } from "react-paystack"
import "./CheckOut.js"

const publicKey = process.env.PAYSTACK_KEY


const Payment = () => {
//   const publicKey = "pk_your_public_key_here"
  // const amount = useSelector(state=> state.cart);
  const amount = 10000
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
      <div className="container">
        <div className="item">
          <img src="https://image.shutterstock.com/image-vector/vector-shopping-cart-icon-260nw-1377206405.jpg" alt=""/>
          <div className="item-details">
            <p style={{fontSize: '22px'}}>Dancing Shoes</p>
            <p  style={{fontWeight: 'bolder'}}>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <Label>Name</Label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label>Email</Label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label>Phone</Label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </Payment>
  )
}

export default Payment