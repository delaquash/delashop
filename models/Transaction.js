const mongoose = require("mongoose");

const transactionSchema =new mongoose.Schema(
  {
    card_number: {
        type: String,
        trim: true,
      },
    cvv: {
        type: String,
        trim: true,
      },
    expiry_month: {
        type: String,
        trim: true,
      },
    expiry_year: {
        type: String,
        trim: true,
      },
    currency: {
        type: String,
        trim: true,
      },
    amount: {
        type: String,
        trim: true,
      },
      redirect_url: {
        type: String,
        trim: true,
      },
      fullname: {
        type: String,
        trim: true,
      },
    email: {
        type: String,
        trim: true,
      },
      phone_number: {
        type: String,
        trim: true,
      },
      enckey: {
        type: String,
        trim: true,
      },
      tx_ref: {
        type: String,
        trim: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
