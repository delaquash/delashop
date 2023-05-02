const express = require("express");

const  mongoose  = require("mongoose");
const user = require("./routes/user");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const walletRouter = require("./routes/wallet");
const cors = require("cors");

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