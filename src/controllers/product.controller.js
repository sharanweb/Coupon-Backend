const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");

router.get("", async(req,res)=>{
    try {
        const product = await Product.find().lean().exec();
        return res.status(201).send({product:product});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Product.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

module.exports = router;