import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/productActions';


function HomeScreen() {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { products } = productList;
    useEffect(() => {


        dispatch(listProducts());
    }, [dispatch]);
    console.log(products)


    return ( <
            div className = "row center " > {

                products.map(product => ( <
                        div key = { product._id }
                        className = "card" >
                        <
                        a href = {
                            `/product/
                ${product._id}`

                        } > <
                        img className = "medium"
                        src = { product.image }
                        alt = { product.name }
                        /> < /a > <
                        div className = "card-body" >
                        <
                        a href = {
                            `/product/
              ${product._id}`

                        } >
                        <
                        h2 > { product.name } < /h2> < /
                        a > <
                        div className = "rating" >
                        <
                        span > <
                        i className = {
                            product.rating >=
                            1 ?
                            'fa fa-star' : product.rating >= .5 ?
                                'fa fa-star-half-o' : 'fa fa-star-o'
                        } > < /i> <
                        i className = {
                            product.rating >=
                            2 ?
                            'fa fa-star' : product.rating >= 1.5 ?
                                'fa fa-star-half-o' : 'fa fa-star-o'
                        } > < /i> <
                        i className = {
                            product.rating >= 3 ?
                            'fa fa-star' : product.rating >=
                                2.5 ?
                                'fa fa-star-half-o' : 'fa fa-star-o'
                        } > < /i> <
                        i className = {
                            product.rating >= 4 ?
                            'fa fa-star' : product.rating >= 3.5 ?
                                'fa fa-star-half-o' : 'fa fa-star-o'
                        } > < /i> <
                        i className = {
                            product.rating >= 5 ?
                            'fa fa-star' : product.rating >= 4.5 ?
                                'fa fa-star-half-o' : 'fa fa-star-o'
                        } > < /i> < /
                        span > < a href = "/" > { product.nreviews }
                        reviews < /a>< /
                        div > <
                        div className = "price" > { product.price }
                        $

                        <
                        /div>




                        <
                        /
                        div > <
                        /div>  ))
                    } <
                    /
                    div >
                );
            }

            export default HomeScreen;