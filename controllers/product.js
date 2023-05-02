import ProductModel from "../models/Products.js";

const createProduct = async (req, res) => {
	const newProduct = new ProductModel(req.body);
	try {
		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
			$set: req.body,
		}, {
			new: true,
		});
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
};

const deleteProduct = async (req, res)=> {
	try {
		await ProductModel.findByIdAndDelete(req.params.id);
		res.status(200).json("User has been deleted");
	} catch (error) {
		res.status(500).json(error);
	}
};

const getProduct = async(req, res) => {
	try {
		const product = await ProductModel.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
};

const getAllProduct = async(req, res) => {
	const qNew = req.params.new;
	const qCategory = req.params.category;
	try {
		let products;
		if(qNew){
			products = await ProductModel.find().sort({ createdAt: -1}).limit(1);
		} else if(qCategory){
			products = await Product.find({
				categories : {
					$in: [qCategory]
				},
			});
		} else {
			products = await Product.find();
		}
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
};

export { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct };
