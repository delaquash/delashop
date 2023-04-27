import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import cartRouter from "./routes/cart.js";
import orderRouter from "./routes/order.js";
import productRouter from "./routes/product.js";
import user from "./routes/user.js";
import walletRouter from "./routes/wallet.js";

const app= express();
dotenv.config();

// DB Connection
mongoose.connect(process.env.MONGO_URL)
	.then(()=> 
		console.log("DB connections is successful"))
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use(cors());
// Routes
// app.use('/', (req, res) => {
//     res.send("Server is set up successfully.")
// })
app.use("/api/user", user);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/order", orderRouter);
app.use("api/wallet", walletRouter);

app.listen(process.env.PORT  || 5000, () => {
	console.log("Backend Server is actively running!");
});