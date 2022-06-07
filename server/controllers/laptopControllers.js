const laptopSchema =require("../models/laptopSchema")




module.exports.addNewLaptop = async (req, res)=>{
    
    const newLaptop = new laptopSchema(req.body)
    try {
       await newLaptop.save("laptop")
       res.status(201).json(newLaptop)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    
}


module.exports.getAllLaptops = async (req, res)=>{
    
    try {
       const allLaptops =  await laptopSchema.find()
       res.status(200).json(allLaptops)
    } catch (error) {
        res.status(404).json(error)
    }
    
}
module.exports.getLaptop = async (req, res)=>{
    
    try {
       const laptop =  await laptopSchema.findById(req.params.laptopId)
       res.status(200).json(laptop)
    } catch (error) {
        res.status(404).json(error)
    }
    
}
module.exports.getLoptopBetweenPrice = async (req, res)=>{
    const {lowPrice, highPrice} = req.params;
    
    try {
       const laptops =  await laptopSchema.find({price:{"$gte":parseInt(lowPrice), "$lte":parseInt(highPrice)}})
       res.status(200).json(laptops)
    } catch (error) {
        res.status(404).json(error)
    }
    
}

module.exports.updateLaptop = async (req, res)=>{
    
    try {
       const updatedLaptop =  await laptopSchema.findByIdAndUpdate(req.params.laptopId, req.body,{new:true})
       res.status(200).json(updatedLaptop)
    } catch (error) {
        res.status(404).json(error)
    }
    
}
module.exports.deleteLaptop = async (req, res)=>{
    
    try {
       const deletedLaptop =  await laptopSchema.findByIdAndRemove(req.params.laptopId)
       res.status(200).json(deletedLaptop)
    } catch (error) {
        res.status(404).json(error)
    }
    
}

