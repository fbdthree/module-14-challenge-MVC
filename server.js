const express=require("express");
const sequelize=require("./connection");

const app=express();

app.use(express.json());

app.listen(8000, ()=>console.log("Express app listening on local host."));
