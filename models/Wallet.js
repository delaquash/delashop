import mongoose from "mongoose";
const { Schema } = mongoose;

const WalletSchema = Schema(
	{
		balance: { type: Number, default: 0 },
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	},
	{ timestamps: true }
);

const WalletModel =mongoose.model("Wallet", WalletSchema);
export default WalletModel;