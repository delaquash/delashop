const  mongoose  = require("mongoose");

const ProductSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Product", ProductSchema);