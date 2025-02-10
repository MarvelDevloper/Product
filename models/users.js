const mongoose=require("mongoose");

const userschema=mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    }
});

const User=mongoose.model("OK",userschema);

module.exports=User;