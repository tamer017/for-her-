import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function CartScreen(props) {
    const userId= JSON.parse(localStorage.getItem("userId"))
console.log(userId)
const [Subtotal,setSubtotal]=useState(0);
    const [products, setProducts] = useState([])
    const [flag, setFlag] = useState(true)
    useEffect((
    ) => {
    }, [products,Subtotal])
    if (flag) {
        axios.get(`/${userId}/cart`).then((res) => {
            console.log(res.data)

            setProducts(res.data)
            let total=0;
            for(let i=0;i<products.length;i++){
                total+=products[i].countInStock*products[i].price;
            }
            setSubtotal(total)
            setFlag(false)
        })
    }


    const deleteproduct = async (ID) => {
        await axios.delete(`/${userId}/cart/${ID
            }`).then(() => {
                setFlag(true)
            })
        // setFlag(true)
    }
    return (
        <
   div >
            <
   h1 > cart screen < /h1>
                <
   div className="row top" >
                    <
   div className="col-2" >
                        <
   h1 > Shopping Cart < /h1> <ul>



                                {

                                    (products.length!==0) ? products.map(product => {
                                        return (
                                            <li key={product.id}>



                                                <
   div className="row" >
                                                    <
                                                        img src={
                                                            product.image
                                                        }
                                                        className="small" />

                                                    < div className="row" >{product.name
                                                    }</div>

                                                    < div className="row" > < div > {
                                                        product.countInStock
                                                    } < /div>  < /div >

                                                        <
div className="row" > {
                                                                product.price

                                                            }
                                                            $ < /div>


                                                            <
div > < button onClick={() => deleteproduct(product.id)}
                                                                > delete < /button>< /div >




                                                                    <
/div >






                                                                    < /li >)}):<h1></h1>}






                                                                    <
li >
                                                                        <
h2 >
                                                                            Subtotal :{Subtotal} $<
/h2> < /
li >



                                                                            <
button
                                                                                type="button"
                                                                                className="primary block" >
                                                                                <
Link to={`/shipping/${userId}`} > order < /Link>< /
button > < /
ul >



                                                                                    <
/
div >

                                                                                    <
/div>

                                                                                    <
/div> );
}