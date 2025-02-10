const express=require("express");
const app=express();

const connect=require("./connection");
const route=require("./routes/users");

//for connection
connect("mongodb://127.0.0.1:27017/BJP")
.then(()=>{console.log("MongoDB is successfully started")})
.catch(()=>{console.log("MongoDB is Failed to started")});

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//
app.use("/user",route);

app.listen(5000,()=>{
    console.log("The server is Started");
});