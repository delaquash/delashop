const router= require('express').Router();
const Product = require('../models/Products');
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");

// create
router.post('/',verifyTokenAdmin, async (req, res) => {
        const newProduct = new Product(req.body);
        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct)
        } catch (error) {
            res.status(500).json(error)
        }
})

module.exports = router