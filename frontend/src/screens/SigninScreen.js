import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { signin } from '../Actions/userActions';

import { useDispatch, useSelector } from 'react-redux';


export default function SigninScreen(props) {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [flag, setFlag] = useState(false)



    useEffect(() => { }
        , [message, flag])
    axios.post("/signin", {
        password: password,
        email: email
    }).then((res) => {
        if (flag) {
            if (res.data.message == "ok") {
                localStorage.setItem("userId", JSON.stringify(res.data.id))
                // localStorage.setItem("userId", JSON.stringify(res.data.id))
                // const userId= JSON.parse(localStorage.getItem("userId"))
                // console.log(userId);
                /* if (email === "admin@forher.com") {
                    localStorage.setItem("admin", JSON.stringify("true"))
                    localStorage.setItem("user",  JSON.stringify("false"))
                } else {
                    localStorage.setItem("user", JSON.stringify("true"))
                    localStorage.setItem("admin", JSON.stringify("false"))
                } */
            }
            setMessage(res.data.message)
        }
        else{
            if (res.data.message == "ok") {
                alert('press signin')
                setFlag(true);
            }
            else {
                setMessage(res.data.message)
            }}
    })

    const login = async () => {
    }

    return (<
            div >
        <span>{message}</span>

        <
            form className="form"
        >

            <
            h1 > Sign in < /h1><
            div > <
            label htmlFor="email" >
                        Email address <
            /label>

                        <
                            input type="email"
                            id="email"
                            placeholder="enter email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required


                        />

                        <
            /div > <
            div > <
            label htmlFor="password" >
                                Password <
            /label>

                                <
                                    input type="password"
                                    id="password"
                                    placeholder="enter password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    required
                                />

                                <

            /div >

                                <
            div >
                                    <
                                        label /
                                    >
                                    <
                                        button type="submit" onClick={login}
                                        className="primary "
                                    > sign in < /button >



                                        <
            /div> <
            div >
                                            <
                                                label /
                                            >
                                            <
            div > New customer ? < Link to="/register" > Create your account < /Link>

                                                    <
            /div>



                                                    <
            /div>




                                                    <
            /
            form > < /
            div >
                                                    )
    }
