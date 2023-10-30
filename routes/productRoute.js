const express = require("express");
const Product = require('../models/productModel');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controller/productController");

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct)

module.exports = router;