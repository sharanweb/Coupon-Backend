const express = require("express");
const app = express();
const cors = require("cors");

const couponController = require("./controllers/coupon.controller");
const productController = require("./controllers/product.controller");

app.use(cors());
app.use(express.json());
app.use("/coupons", couponController);
app.use("/products", productController)

module.exports = app;