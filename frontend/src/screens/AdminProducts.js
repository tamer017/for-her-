import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminProducts() {
    
    return ( < div className = "admin" >
        <
        h1 > Admin dashboard < / h1>

        <
        div className = "row" > < button className = "primary block" > <
        Link to = "/addproduct" > Add new product <
        /Link> < /button >



        <
        /div > <
        br / >


        <
        div className = "row" > < button className = "primary block" > <
        Link to = "/editshow" > Edit existing product < /Link> < /button >



        <
        /div > <
        br / >

        <
        div className = "row" > < button className = "primary block" > <
        Link to = "/ed/:id?" > Delete existing products < /Link> < /button >



        <
        /div >

        <
        /div>
    )
}