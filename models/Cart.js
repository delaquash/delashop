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

export default model("Cart", CartSchema);