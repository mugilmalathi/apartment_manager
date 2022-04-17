const express = require("express");
const router = express.Router();

const Flat = require("../models/flat.model");

router.post("/flat", async(req, res)=>{
    const flat = await Flat.create(req.body);
    res.send(flat);
})

router.get("/flat", async(req, res)=>{
    const flat = await Flat.find().lean().exec();
    res.send(flat);
})

module.exports = router;