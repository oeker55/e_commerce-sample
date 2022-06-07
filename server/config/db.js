const mongoose = require("mongoose")


const CONNECTION_URL = "mongodb+srv://oeker55:Ozgur.55@db0.zvxy8ku.mongodb.net/?retryWrites=true&w=majority"
module.exports =()=>{
    mongoose.connect(CONNECTION_URL,  {
        useNewUrlParser : true,
        useUnifiedTopology :true
    
    })
    mongoose.connection.on("open",()=>{console.log("Mongo Db Connected")})
    mongoose.connection.on("error",(err)=>{console.log("HATA"+err)})
}