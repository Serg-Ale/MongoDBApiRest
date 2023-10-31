require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoute');
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    throw new Error('fake error');
})

// routes
app.use("/api/products", productRoute);

app.use(errorMiddleware);


// Connect to MongoDB ant then start listen on port ${port}
mongoose.
    connect(MONGO_URL).
    then(() => {
        console.log("connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`API running on port ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    });