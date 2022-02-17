import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { detailsProduct } from '../Actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { listProducts } from '../Actions/productActions';
export default function ProductScreen(props) {
    const id = useParams();
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    const deleteproduct = async () => {
        axios.delete(`/product/${id.id.trim()}`)    
        props.history.push(redirect)
           
    }
    // const products = data.products;
    // const id = props.match.params.id
    console.log(id)
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { products } = productList;
    let product = {
        "name": " ",
        "category": " ",
        "image": " ",
        "countInStock": 0,
        "price": 0,
        "brand": " ",
        "rating": 0,
        "nreviews": 0,
        "description": " "
    };

    useEffect(() => {


        dispatch(listProducts());
    }, [dispatch]);

    const tempProduct = products
    for (let i = 0; i < tempProduct.length; i++) {
        if (tempProduct[i]._id == id.id.trim()) {
            product = tempProduct[i];
            console.log(product)
            break;
        }
    }
    console.log(product)


    return (<
        div >

        <
        Link to="/" > Back to result < /Link> <
        div className="row" > < div className="col-2" > < img src={(product) ? product.image : ""}
                /> < /
        div > < div className="col-1" > < ul > < li > < h1 > {
                        product.name

                    } < /
        h1 > < /li > <li>{product.price}$ < /li > < li > {

                        } {
                                product.nreviews
                            }
                            reviews <
        div className="rating" >
                                <
        span > <
        i className={
                                            product.rating >=
                                                1 ?
                                                'fa fa-star' : product.rating >= .5 ?
                                                    'fa fa-star-half-o' : 'fa fa-star-o'
                                        } > < /i> <
        i className={
                                                product.rating >=
                                                    2 ?
                                                    'fa fa-star' : product.rating >= 1.5 ?
                                                        'fa fa-star-half-o' : 'fa fa-star-o'
                                            } > < /i> <
        i className={
                                                    product.rating >= 3 ?
                                                        'fa fa-star' : product.rating >=
                                                            2.5 ?
                                                            'fa fa-star-half-o' : 'fa fa-star-o'
                                                } > < /i> <
        i className={
                                                        product.rating >= 4 ?
                                                            'fa fa-star' : product.rating >= 3.5 ?
                                                                'fa fa-star-half-o' : 'fa fa-star-o'
                                                    } > < /i> <
        i className={
                                                            product.rating >= 5 ?
                                                                'fa fa-star' : product.rating >= 4.5 ?
                                                                    'fa fa-star-half-o' : 'fa fa-star-o'
                                                        } > < /i> < /
        span >

                                                        <
        /div>

                                                        <
        /li > < li >{product.description} < /li > < /ul > < /div > < div className="col-1" > < div className="card card-body" > < ul > < li > < div className="row" > <
        div > Price < /div> <
        div className="price" > {product.price}
                                                                $ < /div> < /
        div > < /li > < li >   <div className="row"> <
        div > status < /div> <
        div className="status" >

                                                                        <
        div > {
                                                                                product.countInStock > 0 ? (< span className="success" > In stock < /span>): ( < span className="error" > Unavailable< /span > )
        }

                                                                                    <
        /div>




                                                                                    <
        /div> < /
        div > < /li >




               <li>                                                                                                                                                                        
                <
                button onClick=      {deleteproduct}
                                                                                                             
                className="primary block" >                                                                                  
                 Delete item <
                /button> < /
                li > 
                                                                                                                                    
        



                                                                                                                                    <

        /ul > < /
        div > < /div >


                                                                                                                                    <
        /div >< /div >
                                                                                                                                    );



   




}

