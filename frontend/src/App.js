import React from 'react';
import { Link } from 'react-router-dom';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import OrderDetails from './screens/OrderDetails';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import AdminScreen from './screens/AdminScreen'
import AdminProducts from './screens/AdminProducts'
import AdminUsers from './screens/AdminUsers'
import AdminOrders from './screens/AdminOrders'
import EdScreen from './screens/EdScreen'
import AddProduct from './screens/AddProduct'
import EditScreen from './screens/EditScreen'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './Actions/userActions';
import Edit from './screens/Edit'
import DeleteScreen from './screens/DeleteScreen'
import MessageScreen from './screens/MessageScreen';


function App() {
  
  localStorage.setItem("user",  JSON.stringify("false"))

  localStorage.setItem("admin",  JSON.stringify("false"))
  const isUser=localStorage.getItem('user')
  const isAdmin=localStorage.getItem('admin')

    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
    return ( < BrowserRouter >

        <
        div className = "grid-container" >
        <
        header className = "row" >
        <
        div >
        <
        a className = "logo"
        href = '/' > For Her < /a> < /
        div > <
        div >






        <
        a href = "/" > home < /a>

        <
        a href = "/cart" > cart < /a>











        
               
     <a href="/signin">Sign In</a>
      
   <  a href = "/admin" > Admin < /a>
      





        


        <
        /
        div > <
        /header> <
        main >
        <
        Route exact path = '/'
        component = { HomeScreen }
        /> <
        Route path = '/product/:id'
        component = { ProductScreen }
        /> <
        Route path = '/cart'
        component = { CartScreen }
        /> <
        Route path = '/signin'
        component = { SigninScreen }
        /> <
        Route path = '/register'
        component = { RegisterScreen }
        /><
        Route path = '/shipping/:userId?'
        component = { ShippingScreen }
        />  <
        Route path = '/admin'
        component = { AdminScreen }
        /> <
        Route path = '/adminproducts'
        component = { AdminProducts }
        /> <
        Route path = '/users'
        component = { AdminUsers }
        /> <
        Route path = '/orders'
        component = { AdminOrders }
        /> <
        Route path = '/edit/:id?'
        component = { EditScreen }
        />

        <
        Route path = '/addproduct'
        component = { AddProduct }
        />
        <
        Route path = '/od/:id'
        component = { OrderDetails }
        /> 

        <
        Route path = '/ed/:id?'
        component = { EdScreen }
        /> <
        Route path = '/deletescreen/:id'
        component = { DeleteScreen}
        />
        <
        Route path = '/editshow'
        component = { Edit}
        /><
        Route path = '/message'
        component = { MessageScreen}
        />

        <
        /
        main >




        <
        footer className = " row center " >
        all rights reserved

        <
        /footer> < /
        div >
        <
        /BrowserRouter>
    );
}

export default App;