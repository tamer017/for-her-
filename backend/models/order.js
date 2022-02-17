const mongoose =require("mongoose");
const orderSchema =new mongoose.Schema({
    userId:{
        type :String,
        required :true
    },
    userName:{
        type :String,
        required :true
    },
    usereEmail:{
        type :String,
        required :true
    },
    userAddress:{
        type :String,
        required :true
    },
    city:{
        type :String,
        required :true
    },
    postalCode:{
        type :Number,
        required :true
    },
    phone:{
        type :Number,
        required :true
    },
    country:{
        type :String,
        required :true
    },
    cart:{
        type :Array,
        required :true
    }
})
module.exports=mongoose.model("order",orderSchema)