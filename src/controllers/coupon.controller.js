const express = require("express");
const router = express.Router();
const Coupon = require("../models/coupon.model");


router.post("/",async(req,res)=>{
    try {
        const coupon = await Coupon.create(req.body);
        return res.status(201).send(coupon);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


router.get("/", async(req,res)=>{
    try {
        const coupon = await Coupon.find().populate("product_id").lean().exec();
        return res.status(201).send({"coupon":coupon});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const coupon = await Coupon.find(req.params.id).populate().lean().exec();
        return res.status(201).send({"coupon":coupon});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const coupon = await Coupon.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"coupon":coupon});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});
module.exports = router;