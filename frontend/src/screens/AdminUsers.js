import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [flag, setFlag] = useState(true);
    if (flag) {
        axios.get("/user").then((res) => {
            setUsers(res.data)
            setFlag(false)
            let usersEmails = users.map((user) => user.email)
            usersEmails = usersEmails.filter((value, index) => {
                return usersEmails.indexOf(value) === index;
            });
            let newusers = [];
            let index = 0;
            for (let i = 0; i < users.length; i++) {


                if (users[i].email == usersEmails[index]) {
                    index++
                    newusers.push(users[i]);
                }
            }
            setUsers(newusers);
            console.log(users)
        })

    }
    useEffect(() => { }, [users])
    return (<
        div > <
        h1 className="hup" >
            Users < /h1>{
                (users) ? users.map((user) => (<div>
                    <
        div className="row top" >
                        <
        div className="col-2" >

                            <
        div className="row user" >
                                <
        p > <
                                        span className="sp" > {user.email} < /span>has just logged in< /p > < /
        div >




                                        <
        /div> < /
        div >

                                    </div> )):<h1>no users</h1>
}
                                    <
        /
        div >
                                    )
}
