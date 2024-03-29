const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js"); 
const jwt = require ("jsonwebtoken");

// Register
router.post('/register', async(req, res) => {
    const newUser = new User({
        username : req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()

    });

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// login
router.post('/login', async(req, res) => {
    try {
        // find the user
        const user = await User.findOne({username : req.body.username });
    // error message if user doesnt exist 
        if (!user) {
            res.status(401).json("Wrong Credentials!");
            return;
          }
        /* Decrypting the password that was encrypted in the register route. */
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
       /* Checking if the password is not equal to the password in the request body and if it is not,
       it will return a 401 status and a message saying "Invalid login details" */
       const inputPassword = req.body.password;
        originalPassword !== inputPassword && res.status(401).json('Invalid login details')

        /* This is creating a token for the user. */
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET, {
            expiresIn: "300days"
        });

        /* Destructuring the user object and removing the password property from the object which is username. */
        const { password, ...others } = user._doc
        res.status(200).json({...others, accessToken});
        
    } catch (err) {
        res.status(500).json(err);
    } 
})

module.exports = router;