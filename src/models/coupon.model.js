const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
    {
        coupon_code:{type:String, required: true},
        start_date:{type:Date, required: true},
        end_date:{type:Date, required: true},
        min_amount:{type:Number, required: false},
        description:{type: String, required: true},
        discount:{type: Number, required:true},
        type:{type: String, required: true}
        
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const Coupon = mongoose.model("coupon", couponSchema);

module.exports = Coupon;