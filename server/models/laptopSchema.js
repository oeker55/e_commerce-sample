const mongoose = require("mongoose")




const laptopSchema = mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    title:{type:String},
    cover:{type:String},
    brand:{type:String},
    cpu:{type:String},
    gpu:{type:String},
    ssd_memory:{type:Number},
    ram_memory:{type:Number},
    os:{type:String},
    price:{type:Number}
})

const model = mongoose.model("laptops", laptopSchema)

module.exports = model;
