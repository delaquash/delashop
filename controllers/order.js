/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
import Order from "../models/Order";

export const createOrder = async (req, res) => {
	const newOrder = new Order(req.body);
	try {
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const updateOrder =  async(req, res) => {
	try {
		const id = req.params.id;
		const update = req.body;
		const updatedOrder = await findByIdAndUpdate(
			/* Getting the id from the url. */
			id, update,
			/* Setting the new value of the order. */
			    {
			        $set: req.body
			    },
			//    /* Telling the database to return the updated document. */
			{
				new: true
			}
		);
        
		return res.status(200).json(updatedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const deleteOrder = async(req, res)=> {
	try {
		await findByIdAndDelete(req.params.id);
		res.status(200).json("Order has been deleted successfully.....");
	} catch (error) {
		res.status(500).json(error);
	}
};

export const findOrder = async(req, res)=> {
	try {
		const orders = await findById(req.params.userId);
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json(err);
	}
};

export const findAllOrder = async(req, res)=> {
	try {
		const orders = await find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getIncome = async(req, res)=> {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));
	try {
		const income = await aggregate([
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
		res.status(200).json(income);
	} catch (error) {
		res.status(500).json(error);
	}
};