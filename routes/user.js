const router= require('express').Router();
const User = require('../models/User');
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');
const CryptoJS = require("crypto-js");

/* Updating the user's username. */
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



/* This is a get request to the user route. It is using the verifyTokenAdmin middleware to verify that
the user is an admin. If the user is an admin, it will return all the users in the database. */
router.get('/', verifyTokenAdmin, async(req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;