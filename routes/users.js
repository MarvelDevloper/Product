const express=require("express");
const app=express();
const route=express.Router();
const User=require("../models/users");
const { handlegetUserby_ID,
     handlecreateUser, handleDeleteUserby_ID, handleupdateUserby_ID } = require("../controllers/users");


route.get("/:id",handlegetUserby_ID);
route.post("/add",handlecreateUser);
route.delete("/delete/:id",handleDeleteUserby_ID);
route.patch("/update/:id",handleupdateUserby_ID);


module.exports=route;