import React from 'react'
import { Link } from 'react-router-dom';

export default function MessageScreen() {
    return (
        <div>
            <h1>Order submitted successfully</h1>
            <Link to="/">Go to Home </Link>
        </div>
    )
}
