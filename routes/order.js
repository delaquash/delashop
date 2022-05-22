const router= require('express').Router();
const Order = require('../models/Order');
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');


/* This is a post request to the order route. It is using the verifyToken middleware to verify that
the user is logged in. If the user is logged in, it will create a new order in the database. */
router.post('/',verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})

/* This is a put request to the order route. It is using the verifyTokenAdmin middleware to verify that

the user is an admin. If the user is an admin, it will update the order in the database. */
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

/* This is a delete request to the order route. It is using the verifyTokenAdmin middleware to verify
that
the user is an admin. If the user is an admin, it will delete the order in the database. */
router.delete('/:id', verifyTokenAdmin, async(req, res)=> {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted successfully.....")
    } catch (error) {
        res.status(500).json(error)
    }
});

/* This is a get request to the order route. It is using the verifyTokenAuthorization middleware to
verify that
the user is logged in. If the user is logged in, it will return all the orders in the database. */
router.get('/find/:userId', verifyTokenAuthorization, async(req, res)=> {
    try {
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
})

/* This is a get request to the order route. It is using the verifyTokenAdmin middleware to verify that

the user is an admin. If the user is an admin, it will return all the orders in the database. */
router.get('/', verifyTokenAdmin, async(req, res)=> {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error) 
    }
})

/* This is a get request to the order route. It is using the verifyTokenAdmin middleware to verify that
the order is an admin. If the order is an admin, it will return all the orders in the database. */
router.get('/income', verifyTokenAdmin, async(req, res)=> {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));
    try {
        const income = await Order.aggregate([
            {
                $match : {createdAt: { $gte: previousMonth}}
            },
            {
                $project :{
                    month: {$month: "$createdAt"},
                    sales: "$amount"
                }},
                {
                    $group: {
                        _id:"$month",
                        total: {$sum: "$sales"},
                    },
                },
        ]);
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;