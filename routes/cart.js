const router= require('express').Router();
const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');


router.post('/',verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', verifyTokenAuthorization, async(req, res) => {
    try {
        const  id  = req.params.id
        console.log(id);
        const update = req.body
     // Yes, it's a valid ObjectId, proceed with `findById` call.
        const updatedCart = await Cart.findByIdAndUpdate(
         id.trim(), update,
            { new: true }   
        );
        console.log(updatedCart)
      res.status(200).json(updatedCart);
        
     } catch (error) {
                res.status(500).json(error)
        }      
});

router.delete('/:id', verifyTokenAuthorization, async(req, res)=> {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted successfully.....")
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/find/:userId', verifyTokenAuthorization, async(req, res)=> {
    try {
        const cart = await Cart.findById(req.params.userId);
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/', verifyTokenAdmin, async(req, res)=> {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error) 
    }
});


module.exports = router;