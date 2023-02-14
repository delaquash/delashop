/* eslint-disable no-undef */
import Cart from "../models/Cart";

export const createCart=async (req, res) => {
	const newCart = new Cart(req.body);
	try {
		const savedCart = await newCart.save();
		res.status(200).json(savedCart);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const updateCart = async(req, res) => {
	try {
		const  id  = req.params.id;
		console.log(id);
		const update = req.body;
		// Yes, it's a valid ObjectId, proceed with `findById` call.
		const updatedCart = await findByIdAndUpdate(
			id.trim(), update,
			{ new: true }   
		);
		console.log(updatedCart);
		res.status(200).json(updatedCart);
        
	} catch (error) {
		res.status(500).json(error);
	}      
};

export const deleteCart =  async(req, res)=> {
	try {
		await findByIdAndDelete(req.params.id);
		res.status(200).json("Cart has been deleted successfully.....");
	} catch (error) {
		res.status(500).json(error);
	}
};
export const getCart = async(req, res)=> {
	try {
		const cart = await findById(req.params.userId);
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getAllCart = async(req, res)=> {
	try {
		const carts = await find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error); 
	}
};