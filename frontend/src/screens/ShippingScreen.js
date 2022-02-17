import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ShippingScreen(props) {
    const id= JSON.parse(localStorage.getItem("userId"))
    const [fullname, setFullname] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [postalcode, setPostalcode] = useState(0)
    const [phone, setPhone] = useState(0)
    const shipping = async () => {
        await axios.get(`/${id}/cart`).then(async (res) => {
            await axios.post(`/order/${id}`, {
                "userId": id,
                     "userName": fullname,
                    "usereEmail": email,
                    "userAddress": address,
                    "city": city,
                    "postalCode": postalcode,
                    "country": country,
                    "cart": res.data,
                    "phone":phone
            }).then((res) => {
                    alert("order plased successfully :)")
            })
        })


    }
    return (<
        div >



      <
        form className="form"
            onSubmit={shipping} >
            <
        h1 > shipping details < /h1>


                <
        div > <
        label htmlFor="fullname" >
                        Full name <
        /label>

                        <
                            input type="text"
                            id="fullname"

                            placeholder="enter your full name"
                            onChange={(e) => {
                                setFullname(e.target.value)
                            }}

                            required />

                        <
        /div >
                        <
        div > <
        label htmlFor="email" >
                                Email <
        /label>

                                <
                                    input type="email"
                                    id="email"
                                    placeholder="enter your email address"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}

                                    required />

                                <
        /div >



                                <
        div > <
        label htmlFor="phone" >
                                        phone number <
        /label>

                                        <
                                            input type="number"
                                            id="phone"
                                            placeholder="enter your phone number"
                                            onChange={(e) => {
                                                setPhone(e.target.value)
                                            }}

                                            required />

                                        <
        /div >




                                        <
        div > <
        label htmlFor="address" >
                                                Address < /
        label >

                                                <
                                                    input type="text"
                                                    id="address"
                                                    placeholder="enter your address"
                                                    onChange={(e) => {
                                                        setAddress(e.target.value)
                                                    }}

                                                    required />

                                                <
        /div > <
        div > <
        label htmlFor="city" >
                                                        City < /
        label >

                                                        <
                                                            input type="text"
                                                            id="city"
                                                            placeholder="enter city"
                                                            onChange={(e) => {
                                                                setCity(e.target.value)
                                                            }}

                                                            required />

                                                        <
        /div ><
        div > <
        label htmlFor="postalcode" >
                                                                postal code < /
        label >

                                                                <
                                                                    input type="number"
                                                                    id="postalcode"
                                                                    placeholder="enter postal code"
                                                                    onChange={(e) => {
                                                                        setPostalcode(e.target.value)
                                                                    }}

                                                                    required />

                                                                <
        /div ><
        div > <
        label htmlFor="country" >
                                                                        Country < /
        label >

                                                                        <
                                                                            input type="text"
                                                                            id="country"
                                                                            placeholder="enter country"
                                                                            onChange={(e) => {
                                                                                setCountry(e.target.value)
                                                                            }}

                                                                            required />

                                                                        <
        /div > <
        button className="primary"
                                                                            type="submit" >          place order   

                                                                           <
        /button>

                                                                            <
        /
        form >< /
        div >
                                                                            )
}