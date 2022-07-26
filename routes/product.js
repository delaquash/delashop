const router= require('express').Router();
const Product = require('../models/Products');
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');

/* This is a post request to the server. It is creating a new product. */
router.post('/',verifyTokenAdmin, async (req, res) => {
        const newProduct = new Product(req.body);
        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct)
        } catch (error) {
            res.status(500).json(error)
        }
})

/* Updating the product. */
router.put('/:id', verifyTokenAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {
            new: true,
        })
        res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
})

/* Deleting the product. */
router.delete('/:id', verifyTokenAdmin, async (req, res)=> {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

/* Getting the product by id. */
router.get('/find/:id', async(req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

/* Getting the products from the database. */
router.get('/', verifyToken, async(req, res) => {
    const qNew = req.params.new;
    const qCategory = req.params.category;
    try {
        let products;
        if(qNew){
            products = await Product.find().sort({ createdAt: -1}).limit(1);
        } else if(qCategory){
            products = await Product.find({
                categories : {
                    $in: [qCategory]
                },
            })
        } else {
            products = await Product.find();
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router