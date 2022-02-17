import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function OrderDetails(props) {
    const [order, setOrder] = useState(null)
    const [orders, setOrders] = useState([])
    const [Subtotal,setSubtotal]=useState(0);

    const [flag, setFlag] = useState(true)
    const id =props.match.params.id
if(flag){
    axios.get("/order").then((res) => {
        setOrders(res.data)
        for(let i =0;i<orders.length;i++){
            if(orders[i].userId===id){
                setOrder(orders[i])
                let total=0;
                const cart =orders[i].cart;
               

            for(let i=0;i<cart.length;i++){
                total+=cart[i].countInStock*cart[i].price;
            }
            setSubtotal(total)
                break;
            }
        }
        setFlag(false)
    })
}
useEffect(()=>{},[orders,order,Subtotal])
    return ( <
        div >{(order)?



         

<div>
{

    (order.cart)?order.cart.map(order => (   
        <div  >
        <
        div className = "col-2" >

        <
        div className = "row top" >


        <
        img src ={order.image}
        className = "small" / >

        <
        div className = "row " >

        <
        p >{order.name} < /p >  < /
        div > <
        div className = "row " >

        <
        p > {order.countInStock} < /p >  < /
        div >

        <
        div className = "row " >

        <
        p > {order.price}$ < /p >  < /
        div >

        <
        /div>

        <
        /div>

      </div>
    )):<h1>no products to show </h1>
}
<
div className = "col-2" > < h2 className = "hup" >
Subtotal: {Subtotal} $ < /h2> < /div >






        <
        div className = "col-2" >

        <
        div className = "row top" >




        <
        div className = "col-2 " >

        <
        ul >
        <
        li > < label > Client full name < /label> <
        div className = "row us" >
        <
        p > {order.userName} < /p > < /
        div >

        <
        /li>

        <
        li > < label > Client email < /label> <
        div className = "row us" >
        <
        p > {order.usereEmail} < /p > < /
        div >

        <
        /li> <
        li > < label > Client address < /label> <
        div className = "row us" >
        <
        p > {order.userAddress} < /p > < /
        div >

        <
        /li> <
        li > < label > city, country < /label> <
        div className = "row us" >
        <
        p >{order.city}, {order.country} < /p > < /
        div >

        <
        /li>


        <
        li > < label > postal code < /label> <
        div className = "row us" >
        <
        p > {order.postalCode} < /p > < /
        div >

        <
        /li>

        <
        li > < label > phone number < /label> <
        div className = "row us" >
        <
        p > 01005441998 < /p > < /
        div >

        <
        /li>




        <
        /ul>

        <
        /div>

        <
        /div>

        <
        /div>
        </div>
     :<h1>loading</h1>    }</div>

        );
    }