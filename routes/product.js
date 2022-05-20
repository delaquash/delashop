const router= require('express').Router();
const Product = require('../models/Products');
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");


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
        res.status(200).json(updatedProduct)
    } catch (error) {
      res.status(500).json(error)  
    }
})

router.delete('/:id', verifyTokenAdmin, async (req, res)=> {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    } catch (error) {
        
    }
})

module.exports = router