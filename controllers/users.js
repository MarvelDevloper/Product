const User=require("../models/users");

async function handlegetUserby_ID(req,res){
    const id=req.params.id;
    const userr= await User.findById(id);
    if(!userr)return res.status(404).json("User Not Found");
    return res.status(200).json(userr);
}


async function handlegetUserall_users(req,res){
    const userr= await User.find();
    if(!userr)return res.status(404).json("User Not Found");
    return res.status(200).json(userr);
}

async function handleDeleteUserby_ID(req,res){
    const id=req.params.id;
    const userr= await User.findByIdAndDelete(id);
    if(!userr)return res.status(404).json("User Not Found");
    return res.status(200).json("Success");
}

async function handleupdateUserby_ID(req,res){
    const id=req.params.id;
    const userr= await User.findByIdAndUpdate(id,{first_name:"Changed"});
    if(!userr)return res.status(404).json("User Not Found");
    return res.status(200).json("Success");
}

async function handlecreateUser(req,res){
    const body=req.body;
    if(!body || !body.first_name || !body.last_name)return res.status(400).json("please fill all attirbutes");
    const result= await User.create({
        first_name: body.first_name,
        last_name: body.last_name
    });
    return res.status(201).json("User Created Successfully");
}


module.exports={
    handleDeleteUserby_ID,handlecreateUser,handlegetUserall_users,handleupdateUserby_ID,handlegetUserby_ID
}