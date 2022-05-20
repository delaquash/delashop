const express = require("express");
const app= express();
const  mongoose  = require("mongoose");
const user = require('./routes/user')
const dotenv = require("dotenv")
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');

dotenv.config();

// DB Connection
mongoose.connect(process.env.MONGO_URL)
    .then(()=> 
        console.log("DB connections is successful"))
    .catch((err) => {
        console.log(err);
    })

app.use(express.json())
// Routes
app.use('/api/user', user);
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);

app.listen(process.env.PORT  || 5000, () => {
    console.log('Backend Server is actively running!');
})