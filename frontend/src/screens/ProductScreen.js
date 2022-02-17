import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { detailsProduct } from '../Actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { listProducts } from '../Actions/productActions';
import axios from 'axios';
export default function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    // const products = data.products;
    // const id = props.match.params.id
    const id = useParams();
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
        const userId= JSON.parse(localStorage.getItem("userId"))
    console.log(userId)

    const addToCartHandler = async(id,qty) => {
        await axios.post(`/${userId}/cart/${id}`,{"amount":qty}).then(
            (res)=> {alert("added successfully")
        console.log(res)}
        )
      }


    useEffect(() => {


        dispatch(listProducts());
    }, [dispatch]);

    const tempProduct = products
    for (let i = 0; i < tempProduct.length; i++) {
        if (tempProduct[i]._id == id.id.trim()) {
            product = tempProduct[i];
            break;
        }
    }

    console.log(id)

    /* const addToCartHandler = () => {
        console.log(id)

        props.history.push({
            pathname: '/cart',
              state: [{id:id.id.trim(),qty:qty}] // your data array of objects
          })
          
                  // Axios.post()
    } */
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




                                                                                    {
                                                                                        product.countInStock > 0 && ( <
                >
                                                                                            <
                li >
                                                                                                <
                div className="row" >
                                                                                                    <
                div > Qty < /div> <
                div >
                                                                                                   
                <select value={qty}
            onChange={
                (e) => setQty(e.target.value)
            } > {
                [...Array(product.countInStock).keys()].map(
                    (x) => (<option key={x + 1} value={x + 1} > {x + 1} </option> ))} </select> < /
                div > <
                /div> < /
                li > <
                li >                                                                                                            
                <
                button                                                                                                                
                className="primary block" onClick={()=>{addToCartHandler(id.id.trim(),qty)}} >ADD TO CART  
                 <
                /button> < /
                li > <
                />
                                                                                                                                    )
        }



                                                                                                                                    <

        /ul > < /
        div > < /div >


                                                                                                                                    <
        /div >< /div >
                                                                                                                                    );



   




}

