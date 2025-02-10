const mongoose=require("mongoose");

async function MongoDBconnect(url){
    return mongoose.connect(url);
}   


module.exports=MongoDBconnect;