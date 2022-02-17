const express = require('express')
const connectDB = require("./config/db")
const app = express()
connectDB()
app.use(express.json())
const productRouter = require('./routes/product_routes')
const userRouter = require('./routes/user_routes')
const orderRouter = require('./routes/order_routes')
app.use('/product',productRouter)
app.use('/',userRouter)
app.use('/order',orderRouter)


app.listen(9000, () => {
    console.log('Server started')
})