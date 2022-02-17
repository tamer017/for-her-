import React from 'react'
import { Link } from 'react-router-dom'

export default function admin() {
    return ( < div className = "admin" >
        <
        h1 > Admin dashboard < / h1>

        <
        div className = "row" > < button className = "primary block" > <
        Link to = "/users" >
        users < /Link> < /button >





        <
        /div > <
        br / >


        <
        div className = "row" > < button className = "primary block" > <
        Link to = "/orders" > orders < /Link> < /button >



        <
        /div > <
        br / >

        <
        div className = "row" > < button className = "primary block" > <
        Link to = "/adminproducts" > products < /Link> < /button >



        <
        /div >

        <
        /div>


    )
}