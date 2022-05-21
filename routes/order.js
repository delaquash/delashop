const router= require('express').Router();
const Order = require('../models/Order');
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');


router.post('/',verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', verifyTokenAdmin, async(req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', verifyTokenAdmin, async(req, res)=> {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted successfully.....")
    } catch (error) {
        res.status(500).json(error)
    }
});

// router.get('/find/:userId', verifyTokenAuthorization, async(req, res)=> {
//     try {
//         const cart = await Cart.findOne({userId: req.params.userId});
//         res.status(200).json(cart)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// router.get('/', verifyTokenAdmin, async(req, res)=> {
//     try {
//         const carts = await Cart.find();
//         res.status(200).json(carts)
//     } catch (error) {
//         res.status(500).json(error) 
//     }
// })

module.exports = router;