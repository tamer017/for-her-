const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//.........................................finding..................................................
//find all the products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.send('Error ' + err)
    }
})
//find product with specific id
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json({ product })
    } catch (err) {
        res.send('Error ' + err)
    }
})

//.........................................adding..................................................
//add new product
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        countInStock: req.body.countInStock,
        description: req.body.description,
        brand: req.body.brand,
        category: req.body.category,
        nreviews: req.body.nreviews,
        rating: req.body.rating
    })
    try {
        const a1 = await product.save()
        res.json(a1)
    } catch (err) {
        res.send(err)
    }
})
/* router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Product.findById(req.params.id) 
        alien.name = req.body.name
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error4')
    }

}) */
//.........................................editing..................................................
//editing product with specific id
/* router.get('/edit/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        /* product.name = req.body.name
        product.image = req.body.image
        product.price = req.body.price
        product.description = req.body.description
        product.countInStock = req.body.countInStock
        product.brand = req.body.brand
        product.category = req.body.category
        product.nreviews = req.body.nreviews
        product.rating = req.body.rating */
        //const a1 = await product.save()
//.........................................deleting..................................................
//deleting all the products
router.delete("/", async (req, res) => {
    try {
        const a1 = await Product.deleteMany({})
        res.json(a1)
    }
    catch (err) {
        res.send('Error')
    }
})
//deleting product with specific id
router.delete("/:id", async (req, res) => {
    try {
        const a1 = await Product.findByIdAndRemove(req.params.id)
        res.json(a1)
    }
    catch (err) {
        res.send('Error')
    }
})


module.exports = router