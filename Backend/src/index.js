const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./configs/db");

const PORT = process.env.PORT;

const flatController = require("./controller/flat.controller");

app.use("/", flatController);

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("Connected to DB");
    }catch(err){
        console.log("err", err);
    }
})