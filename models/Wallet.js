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

module.exports = model("Wallet", WalletSchema);