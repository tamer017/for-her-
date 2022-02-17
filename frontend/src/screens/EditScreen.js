import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditScreen(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [quantity, setQuantity] = useState("")
    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    const id = useParams();

    console.log(id.id.trim())
    const edit = async () => {
        props.history.push(redirect)
        await axios.delete(`/product/${id.id.trim()}`).then(async (res) => {
            await axios.post(`/product`, {
                name: name,
                image: res.data.image,
                price: price,
                countInStock: quantity,
                description: description,
                brand: brand,
                category: category,
                nreviews: res.data.nreviews,
                rating: res.data.rating
            })
        })
    }
    return (

        <
        div >
            <
        Link to="/adminproducts" > Back < /Link> <
        form className="form"
                    onSubmit={edit} > <
        h1 > Edit Product < /h1>

                        <
        div > <
        label htmlFor="productname" >
                                Product name <
        /label>

                                <
                                    input type="text"
                                    id="productname"
                                    placeholder="Enter product name "
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    required

                                /

                                >




                                <
        /div > <
        div > <
        label htmlFor="productprice" >
                                        Product price <
        /label>

                                        <
                                            input type="text"
                                            id="productprice"
                                            placeholder="Enter price"
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
        label htmlFor="productdescription" >
                                                Product description <
        /label>

                                                <
                                                    input type="text"
                                                    id="productdescription"
                                                    placeholder="Enter product decription"
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
        label htmlFor="product quantity" >
                                                        Product quantity <
        /label>

                                                        <
                                                            input type="number"
                                                            id="productquantity"
                                                            placeholder="Enter product quantity in stock "
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
        label htmlFor="productcategory" >
                                                                Product category <
        /label>

                                                                <
                                                                    input type="text"
                                                                    id="productcategory"
                                                                    placeholder="Enter product category"
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
        label htmlFor="productbrand" >
                                                                        Product brand <
        /label>

                                                                        <
                                                                            input type="text"
                                                                            id="productbrand"
                                                                            placeholder="Enter product brand"
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
                                                                                label />
                                                                            <
        button className="primary"
                                                                                type="submit" > Edit < /
        button > < /
        div >

                                                                                <
        /
        form >

                                                                                <
        /div>





                                                                                )
}