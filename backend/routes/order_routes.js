const express = require("express");
const router = express.Router();
const User = require("../models/user")
const Order = require("../models/order");
//placing the order
router.post("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
                const order = new Order({
                    "userId": req.params.id,
                     "userName": user.name,
                    "usereEmail": user.email,
                    "userAddress": req.body.userAddress,
                    "city": req.body.city,
                    "postalCode": req.body.postalCode,
                    "country": req.body.country,
                    "cart": user.cart,
                    "phone":user.phone
                })
                try {
                    const a = await order.save()
                    res.json(a);
                } catch (error) {
                    console.error(error)
                    res.json({ "error": "error1" })
                }
        }
        else {
            res.json({ "error": "error2" })

        }
    } catch (error) {
        res.json({ "error": "error3", "errorbody": error })
    }
})
//get all orders
router.get("/",async (req,res)=>{
    try {
        const orders = await Order.find()
        res.json(orders)
    } catch (err) {
        res.send('Error ' + err)
    }
})
module.exports = router

