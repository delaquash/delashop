import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	desc: {
		type: String,
		required: true,
	},
	categories: {
		type: Array,
	},
	img: {
		type: String,
		required: true,
	},
	sizes: {
		type: Array,
	},
	colors: {
		type: Array,
	},
	price: {
		type: Number,
		required: true,
	},
	inStock: {
		type: Boolean,
	}
},
{timestamps : true}
);

const ProductModel= mongoose.model("Product", ProductSchema);
export default ProductModel;