import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { Link } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';

export default function RegisterScreen() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [flag, setFlag] = useState(true)
    const [id, setId] = useState(true)
    const [message, setMessage] = useState("")

    const history = useHistory();


    const [confirmpassword, setConfirmpassword] = useState("")
    useEffect(() => { }
        , [message, flag])
    axios.post("/signup", {
        name: name,
        phone: phone,
        password: password,
        confirmPassword: confirmpassword,
        email: email
    }).then((res) => {
        if(flag) {
            if (res.data.message == "ok") {
                localStorage.setItem("userId", JSON.stringify(res.data.id));
                setFlag(false)
                console.log(1)
            }
        setMessage(res.data.message)
    }
        else {
            if(res.data.message == "ok") {
                 axios.delete(`${res.data.id}`).then((res) =>{console.log(res.data)})
                 setFlag(true)
                 console.log(2)

    }
            else {
        setMessage(res.data.message)
    }

}
        })

const register = async () => {

    setFlag(true)

}

return (
    <
        div >
        <span>{message}</span>
        {<
        form className="form"
        >
            <
        h1 > create account < /h1> <
        div > <
        label htmlFor="username" >
                        User name <
        /label>

                        <
                            input type="text"
                            id="username"
                            placeholder="enter username"
                            required

                            onChange={(e) => {
                                setName(e.target.value)
                            }}





                        />     <
        /
        div >

                        <
        div > <
        label htmlFor="email" >
                                Email address <
        /label>

                                <
                                    input type="text"
                                    id="email"
                                    placeholder="enter email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}

                                    required


                                /

                                >




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

                                        /
                                        >
                                        <
        /
        div >



                                        <
        div > <
        label htmlFor="confirmpassword" >
                                                Confirm Password <
        /label>

                                                <
                                                    input type="password"
                                                    id=" confirmpassword"
                                                    placeholder="Enter password again"
                                                    onChange={(e) => {
                                                        setConfirmpassword(e.target.value)
                                                    }}
                                                    required

                                                /
                                                >
                                                <
        /
        div >


                                                <
        div > <
        label htmlFor="phonenum" >
                                                        Phone number <
        /label>

                                                        <
                                                            input type="number"
                                                            id="phonenum"
                                                            placeholder="Enter your phone number"
                                                            onChange={(e) => {
                                                                setPhone(e.target.value)
                                                            }}
                                                            required

                                                        /
                                                        >
                                                        <
        /
        div >


                                                        < div >
                                                            <
                                                                label />
                                                            <
        button className="primary"
                                                                type="submit"
                                                                onClick={register} > Register < /
        button > < /
        div >
                                                                <
        div >
                                                                    <
                                                                        label />
                                                                    <
        div >
                                                                        Already have an account ? <
        Link to="/signin" > Sign In < /Link> < /
        div > <
        /div>


                                                                            <
        /
        form >}

                                                                            <
        /div>
                                                                            )
}
