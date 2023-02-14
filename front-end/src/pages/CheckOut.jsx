import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './CheckOut.css'
import { CartDetails, CheckOutForm, Container, Input, Item, ItemDetails, Label, PaymentButton } from '../styles/pages/CheckOut';


const CheckOut = () => {
    const store = useSelector(state=>state.cart)
    console.log(store);
  
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
  return (
    <div className='Container'>
        <Item>
            <img src="https://image.shutterstock.com/image-vector/vector-shopping-cart-icon-260nw-1377206405.jpg" alt="" />
            <ItemDetails>
            <CartDetails>Dancing Shoes</CartDetails>
            <p  style={{fontWeight: 'bolder'}}>100</p>
            </ItemDetails>
        </Item>
        <CheckOutForm>
            <Label>Name</Label>
            <Input
              value={name}
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name..."
            />
            <Label>Email</Label>
            <Input
              value={email}
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email..."
            />
            <Label>Phone</Label>
            <Input
              value={phone}
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Entr phone number"
            />
 
        </CheckOutForm>
    </div>
  )
 }

export default CheckOut;