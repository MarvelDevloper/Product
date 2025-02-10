const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const product_data=[];

app.post((req,res)=>{
    const pdata={
        "id":product_data.length+1,
        "p_name":req.body.p_name,
        "p_price":req.body.p_price,
        "p_desciption":req.body.p_desciption
    }
});

product_data.push(pdata);
console.log("final",pdata);

res.status(200).send({
   "status_code":200,
   "message": "Product addes successfully",
   "product":pdata
});