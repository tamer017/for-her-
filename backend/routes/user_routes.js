const express = require('express');
const router = express.Router()
const bcrypt = require("bcryptjs")
const User = require('../models/user');
const Product = require('../models/product');

const signUp = async (req, res) => {
    if (!(req.body.email && req.body.password && req.body.confirmPassword && req.body.phone && req.body.name)) {
        res.json({ message: "please enter all fields" });
    }
    else {
        const newUser = await User.findOne({ email: req.body.email })
        if (newUser) {
            res.json({ message: "use an other email" })
        }
        else {
            if (req.body.password !== req.body.confirmPassword) {
                res.json({ message: "password mismatch... " })
            } else {
                if (!req.body.email.includes("@")) {
                    res.json({ message: "enter valid email " })
                } else {

                    const salt = await bcrypt.genSalt(10)
                    password = await bcrypt.hash(req.body.password, salt);
                    const user = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: password,
                        phone: req.body.phone,
                        cart: []

                    });

                    try {
                        const a1 = await user.save();
                        res.json({ "message": "ok", "id": a1.id })
                    }
                    catch (error) {
                        res.json({ message: "error" })
                    }

                }
            }
        }
    }
}
const signIn = async (req, res) => {
    if (!(req.body.email && req.body.password)) {
        res.json({ message: "please enter all fields" });
    }
    else {
        const newUser = await User.findOne({ email: req.body.email })
        if (newUser) {
            const validPassword = await bcrypt.compare(req.body.password, newUser.password);
            if (validPassword) {
                res.json({ "message": "ok", "id": newUser.id })
            } else {
                res.json({ message: "Invalid Password" });
            }
        } else {
            res.json({ message: "User does not exist" });
        }
    }
}
router.get("/user", async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.send('Error' + err)
    }
})
//.................signup..........................
router.post("/signup", signUp);
//.................signin..........................
router.post("/signin", signIn);


router.get("/:userId/cart", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user.cart)
    }
    catch (err) {
        res.send('Error ' + err)
    }

})
//..............................adding new roduct to cart...................................
router.post("/:userId/cart/:productId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const product = await Product.findById(req.params.productId);
        const amount = req.body.amount;
        if (amount > product.countInStock) {
            res.json({ message: "no enough products" })
        }
        else {
            let temp = product.countInStock - amount;
            const containProduct = user.cart.some((element) => element.id == req.params.productId)
            if (!containProduct) {
                user.cart.push({
                    "id": req.params.productId,
                    "name": product.name,
                    "image": product.image,
                    "description": product.description,
                    "price": product.price,
                    "countInStock": amount,
                    "brand": req.body.brand,
                    "category": req.body.category
                })
                user.save()
                product.countInStock -= amount;
                product.save()
                // to remove from the database of any user bought the whole amount of the product
                console.log(product.countInStock, amount, product.name, req.params.productId)
                if (temp === 0) {
                    try {
                        await Product.findByIdAndRemove(req.params.productId)
                        res.json(user.cart)
                    } catch (err) {
                        res.send('Error ')
                    }
                } else {
                    res.json(user.cart)
                }
            }
            else {
                const index = user.cart.findIndex((element) => element.id == req.params.productId)
                const oldAmount = user.cart[index].countInStock;
                user.cart[index] = {
                    "id": req.params.productId,
                    "name": product.name,
                    "image": product.image,
                    "description": product.description,
                    "price": product.price,
                    "countInStock": amount,
                    "brand": product.brand,
                    "category": product.category
                }
                console.log(user.cart[index])
                user.save()
                //  .........................................................
                product.countInStock -= (amount - oldAmount);
                product.save()
                if (product.countInStock === 0) {
                    try {
                        await Product.findByIdAndRemove(req.params.productId)
                    } catch (err) {
                        res.send('Error ' + err)
                    }
                }

                res.json(user.cart)

            }
        }
    }
    catch (err) {
        res.send('Error ' + err)
    }

})
router.delete("/:userId/cart/:productId", async (req, res) => {
    try {

        const user = await User.findById(req.params.userId);
        const product = await Product.findById(req.params.productId);
        const containProduct = user.cart.some((element) => element.id == req.params.productId)
        if (containProduct) {
            const index = user.cart.findIndex((element) => element.id == req.params.productId)
            user.cart[index] = null
            let tempCart = user.cart.slice(0, user.cart.length);
            user.cart = tempCart.filter((element) => {
                return element !== null
            })
            user.save()
            res.json(user.cart)
        }
        else {
            res.json({ "message": "this product is not in the cart" })

        }
    }
    catch (err) {
        res.send('Error ' + err)
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const a1 = await User.findByIdAndRemove(req.params.id)
        res.json(a1)
    }
    catch (err) {
        res.send('Error')
    }
})

module.exports = router



