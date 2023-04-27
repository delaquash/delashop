import mongoose from "mongoose";
const { Schema } = mongoose;
const CartSchema = new Schema({
	userId : {
		type: String,
		// type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	products: [
		{
			productId: {
				type: String
			},
			quantity : {
				type: Number,
				default: 1
			}
		}
	]
},
{timestamps: true}
);


const CartModel = mongoose.model("Cart", CartSchema);
export default CartModel;