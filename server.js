require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


const productRoute = require('./routes/productRoute');
app.use("/api/products", productRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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