import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddProduct(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [quantity, setQuantity] = useState("")
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    const add = async () => {
        props.history.push(redirect)     
        axios.post('/product',{
            name: name,
            image:'/images/p1.webp',
            price: price,
            countInStock: quantity,
            description: description,
            brand: brand,
            category: category,
            nreviews :5,
            rating :3
        })        
    }
    return ( <
        div >
        <
        Link to = "/adminproducts" > Back < /Link> <
        form className = "form"
        onSubmit={add}  > <
        h1 > Add New Product < /h1>

        <
        div > <
        label htmlFor = "productname" >
        Product name <
        /label>

        <
        input type = "text"
        id = "productname"
        placeholder = "Enter product name "
        onChange={(e) => {
            setName(e.target.value)
        }}
        required
        /

        >




        <
        /div > <
        div > <
        label htmlFor = "productprice" >
        Product price <
        /label>

        <
        input type = "text"
        id = "productprice"
        placeholder = "Enter price"
        onChange={(e) => {
            setPrice(e.target.value)
        }}
        required
        /
        >
        <
        /
        div >
        <
        div > <
        label htmlFor = "productdescription" >
        Product description <
        /label>

        <
        input type = "text"
        id = "productdescription"
        placeholder = "Enter product decription"
        onChange={(e) => {
            setDescription(e.target.value)
        }}
        required

        /
        >
        <
        /
        div >
        <
        div > <
        label htmlFor = "product quantity" >
        Product quantity <
        /label>

        <
        input type = "number"
        id = "productquantity"
        placeholder = "Enter product quantity in stock "
        onChange={(e) => {
            setQuantity(e.target.value)
        }}
        required
        /
        >
        <
        /
        div >
        <
        div > <
        label htmlFor = "productcategory" >
        Product category <
        /label>

        <
        input type = "text"
        id = "productcategory"
        placeholder = "Enter product category"
        onChange={(e) => {
            setCategory(e.target.value)
        }}
        required

        /
        >
        <
        /
        div > <
        div > <
        label htmlFor = "productbrand" >
        Product brand <
        /label>

        <
        input type = "text"
        id = "productbrand"
        placeholder = "Enter product brand"
        onChange={(e) => {
            setBrand(e.target.value)
        }}
        required

        /
        >
        <
        /
        div >


        <
        div >
        <
        label / >
        <
        button className = "primary"
        type = "submit" 
        > Add < /
        button > < /
        div >

        <
        /
        form >

        <
        /div>)
    }