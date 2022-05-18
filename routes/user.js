const router= require('express').Router();
const User = require('../models/User');
const { verifyToken, verifyTokenAuthorization } = require('./verifyToken');
const CryptoJS = require("crypto-js");

// update single user
// Url path

router.put('/:id',verifyTokenAuthorization, async (req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate (req.params.id,{
            $set: req.body
        },
        {
            new: true
        }
        );
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all user




module.exports = router;