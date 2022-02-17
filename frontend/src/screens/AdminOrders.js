import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AdminOrders() {
    const [orders, setOrders] = useState([])
    const [flag, setFlag] = useState(true)
if(flag){
    axios.get("/order").then((res) => {
        setOrders(res.data)
        console.log(res.data)
        setFlag(false)
    })
}
useEffect(()=>{},[orders])
    return (<
        div >
        <
        h1 className="hu" >
            Orders < /h1>

        {

           (orders.length!==0) ?orders.map(order => (    
<div key={order.id}>
       
        <
        div className="row top" >
                <
        div className="col-2" >

                    <
        div className="row user" >
                        <
        p > < span className="sp" >{order.usereEmail} < /span> placed an order < /p >

                                <
        div className="min-30" >

                                    <
        button onclick="" > < Link to={`/od/${order.userId}`} > Check order details < /Link>  < /button >



                                            <
        /div>




                                            <
        /div> < /
        div >


                                            <
        /
        div > < /div>)):<h1>no orders</h1>}</div>
                                            )
}
